import { NextResponse } from "next/server";
import weaviate from "weaviate-client";
import { WeaviateStore } from "@langchain/weaviate";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { StateGraph, START, END, Annotation } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { DynamicStructuredTool } from "@langchain/core/tools";
import {
  AIMessage,
  HumanMessage,
  BaseMessage,
  ToolMessage,
} from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { z } from "zod";

// Define the state annotation for our graph
const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
  }),
});

// Schema for document grading
const gradeDocumentsSchema = z.object({
  binaryScore: z
    .string()
    .describe("Relevance score 'yes' or 'no'")
    .refine((val) => val === "yes" || val === "no", {
      message: "Score must be 'yes' or 'no'",
    }),
});

// Create retriever tool
async function createRetrieverToolFromStore(
  vectorStore: WeaviateStore,
  nResults: number,
) {
  const retriever = vectorStore.asRetriever(nResults);

  return new DynamicStructuredTool({
    name: "retrieve_portfolio_info",
    description:
      "Search and return information about Daniel's professional experience, projects, skills, and background. Use this tool when the user asks about Daniel's work history, technical expertise, or personal information.",
    schema: z.object({
      query: z
        .string()
        .describe("The search query to find relevant information"),
    }),
    func: async ({ query }) => {
      console.log("[RETRIEVER] Executing retrieval with query:", query);
      const results = await retriever.invoke(query);
      console.log(`[RETRIEVER] Retrieved ${results.length} documents`);
      const content = results.map((doc) => doc.pageContent).join("\n\n");
      console.log(
        "[RETRIEVER] Combined content length:",
        content.length,
        "chars",
      );
      return content;
    },
  });
}

// Node: Generate query or respond directly
async function generateQueryOrRespond(
  state: typeof GraphState.State,
  tools: any[],
  model: ChatOpenAI,
  eventEmitter?: (event: string) => void,
) {
  const { messages } = state;
  console.log("\n[NODE: generateQueryOrRespond] Starting...");
  console.log("[NODE: generateQueryOrRespond] Message count:", messages.length);

  eventEmitter?.("event:Analyzing your question...");

  // Build context-aware system message
  const systemPrompt = `You are an intelligent assistant that helps answer questions about Daniel's professional portfolio and experience.
  
  When you receive a question:
  - If it's about Daniel's experience, skills, projects, or background, use the retrieve_portfolio_info tool to get relevant information
  - If it's a greeting or general conversation, respond directly without retrieving
  - If the question is completely unrelated to Daniel's portfolio, politely decline and suggest asking about Daniel's experience
  
  Be conversational and helpful.`;

  const messagesWithSystem = [new HumanMessage(systemPrompt), ...messages];

  const modelWithTools = model.bindTools(tools);
  const response = await modelWithTools.invoke(messagesWithSystem);

  const hasToolCalls =
    "tool_calls" in response &&
    Array.isArray(response.tool_calls) &&
    response.tool_calls.length > 0;

  console.log(
    "[NODE: generateQueryOrRespond] Response type:",
    response.getType(),
  );
  console.log("[NODE: generateQueryOrRespond] Has tool calls:", hasToolCalls);
  if (hasToolCalls) {
    console.log(
      "[NODE: generateQueryOrRespond] Tool calls:",
      JSON.stringify(response.tool_calls, null, 2),
    );
    // Extract query from tool call
    const toolCall = response.tool_calls?.[0];
    if (toolCall && "args" in toolCall) {
      const query = (toolCall.args as any)?.query || "";
      if (query) {
        eventEmitter?.(`event:Searching for "${query}"`);
      }
    }
  } else if (response.content) {
    console.log(
      "[NODE: generateQueryOrRespond] Direct response:",
      typeof response.content === "string"
        ? response.content.substring(0, 100) + "..."
        : response.content,
    );
  }

  return {
    messages: [response],
  };
}

// Node: Grade retrieved documents
async function gradeDocuments(
  state: typeof GraphState.State,
  model: ChatOpenAI,
  eventEmitter?: (event: string) => void,
) {
  const { messages } = state;
  console.log("\n[NODE: gradeDocuments] Starting document grading...");

  eventEmitter?.("event:Evaluating relevance of results...");

  const prompt = ChatPromptTemplate.fromTemplate(
    `You are a grader assessing relevance of retrieved documents to a user question about Daniel's portfolio.
    
    Here are the retrieved documents:
    \n ------- \n
    {context}
    \n ------- \n
    Here is the user question: {question}
    
    If the documents contain information relevant to answering the user's question about Daniel, score them as relevant.
    Give a binary score 'yes' or 'no' to indicate whether the documents are relevant to the question.
    
    Yes: The documents are relevant and contain useful information to answer the question.
    No: The documents are not relevant or don't contain information needed to answer the question.`,
  );

  const modelWithStructuredOutput = model.withStructuredOutput(
    gradeDocumentsSchema,
    {
      name: "grade_documents",
    },
  );

  // Find the original question (first human message)
  const originalQuestion =
    messages.find((m) => m.getType() === "human")?.content || "";

  // Find the tool message with retrieved context
  const toolMessage = messages
    .slice()
    .reverse()
    .find((m) => m.getType() === "tool");
  const context = toolMessage?.content || "";

  console.log("[NODE: gradeDocuments] Question:", originalQuestion);
  console.log(
    "[NODE: gradeDocuments] Context length:",
    typeof context === "string" ? context.length : 0,
    "chars",
  );

  const score = await prompt.pipe(modelWithStructuredOutput).invoke({
    question: originalQuestion,
    context: context,
  });

  console.log("[NODE: gradeDocuments] Grade result:", score.binaryScore);

  return {
    messages: [new AIMessage(`grade_result:${score.binaryScore}`)],
  };
}

// Node: Rewrite query for better retrieval
async function rewriteQuery(
  state: typeof GraphState.State,
  model: ChatOpenAI,
  eventEmitter?: (event: string) => void,
) {
  const { messages } = state;
  console.log("\n[NODE: rewriteQuery] Rewriting query for better retrieval...");

  eventEmitter?.("event:Refining search query...");

  const rewritePrompt = ChatPromptTemplate.fromTemplate(
    `Look at the input question and try to reason about the underlying intent.
    The question is about someone's professional portfolio and experience.
    
    Here is the initial question:
    \n ------- \n
    {question}
    \n ------- \n
    
    Formulate an improved question that would retrieve more relevant information.
    Focus on key terms related to professional experience, skills, projects, or background.
    Keep it concise and specific.`,
  );

  const originalQuestion =
    messages.find((m) => m.getType() === "human")?.content || "";

  console.log("[NODE: rewriteQuery] Original question:", originalQuestion);

  const response = await rewritePrompt.pipe(model).invoke({
    question: originalQuestion,
  });

  const rewrittenQuestion = response.content as string;
  console.log("[NODE: rewriteQuery] Rewritten question:", rewrittenQuestion);

  // Return the rewritten question as a new human message to restart the flow
  return {
    messages: [new HumanMessage(rewrittenQuestion)],
  };
}

// Node: Generate final answer
async function generateAnswer(
  state: typeof GraphState.State,
  model: ChatOpenAI,
  lang: string,
  eventEmitter?: (event: string) => void,
) {
  const { messages } = state;
  console.log("\n[NODE: generateAnswer] Generating final answer...");

  eventEmitter?.("event:Constructing final answer...");

  const prompt = ChatPromptTemplate.fromTemplate(
    `You are an assistant helping users learn about Daniel's professional experience and background.
    Use the following retrieved context to answer the question.
    
    Important guidelines:
    - Answer in plain text only. No markdown formatting like bold, italics, etc.
    - Never mention "the context" or "the documents" - speak as if you have direct knowledge
    - Be conversational and natural
    - If the context doesn't fully answer the question, provide what you can and be honest about limitations
    - Keep responses concise but informative (3-5 sentences typically)
    
    Question: {question}
    
    Context: {context}
    
    Answer:`,
  );

  const originalQuestion =
    messages.find((m) => m.getType() === "human")?.content || "";

  const toolMessage = messages
    .slice()
    .reverse()
    .find((m) => m.getType() === "tool");
  const context = toolMessage?.content || "";

  console.log("[NODE: generateAnswer] Question:", originalQuestion);
  console.log(
    "[NODE: generateAnswer] Context length:",
    typeof context === "string" ? context.length : 0,
    "chars",
  );

  const response = await prompt.pipe(model).invoke({
    question: originalQuestion,
    context: context,
  });

  console.log(
    "[NODE: generateAnswer] Generated answer length:",
    typeof response.content === "string" ? response.content.length : 0,
    "chars",
  );

  return {
    messages: [response],
  };
}

// Helper: Check if we should retrieve
function shouldRetrieve(state: typeof GraphState.State) {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1];

  if (
    lastMessage.getType() === "ai" &&
    "tool_calls" in lastMessage &&
    lastMessage.tool_calls &&
    Array.isArray(lastMessage.tool_calls) &&
    lastMessage.tool_calls.length > 0
  ) {
    console.log("\n[ROUTER: shouldRetrieve] Decision: RETRIEVE");
    return "retrieve";
  }
  console.log("\n[ROUTER: shouldRetrieve] Decision: RESPOND (direct answer)");
  return "respond";
}

// Helper: Route after grading
function routeAfterGrading(state: typeof GraphState.State) {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1];

  // Check the grade result from the last message
  if (
    lastMessage.content &&
    typeof lastMessage.content === "string" &&
    lastMessage.content.includes("grade_result:")
  ) {
    const grade = lastMessage.content.split(":")[1];
    if (grade === "yes") {
      console.log(
        "\n[ROUTER: routeAfterGrading] Decision: GENERATE (documents are relevant)",
      );
      return "generate";
    }
  }
  console.log(
    "\n[ROUTER: routeAfterGrading] Decision: REWRITE (documents not relevant)",
  );
  return "rewrite";
}

// Helper: Check if we should respond directly
function shouldRespond(state: typeof GraphState.State) {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1];

  // If it's an AI message without tool calls, we can respond
  if (lastMessage.getType() === "ai") {
    console.log("\n[ROUTER: shouldRespond] Decision: END (final answer ready)");
    return END;
  }
  console.log("\n[ROUTER: shouldRespond] Decision: GENERATE");
  return "generate";
}

// Build and compile the agentic RAG graph
async function buildAgenticRAGGraph(
  vectorStore: WeaviateStore,
  model: ChatOpenAI,
  nResults: number,
  lang: string,
  eventEmitter?: (event: string) => void,
) {
  const tool = await createRetrieverToolFromStore(vectorStore, nResults);
  const tools = [tool];
  const toolNode = new ToolNode(tools);

  const graph = new StateGraph(GraphState)
    .addNode("generateQueryOrRespond", (state) =>
      generateQueryOrRespond(state, tools, model, eventEmitter),
    )
    .addNode("retrieve", toolNode)
    .addNode("gradeDocuments", (state) =>
      gradeDocuments(state, model, eventEmitter),
    )
    .addNode("rewrite", (state) => rewriteQuery(state, model, eventEmitter))
    .addNode("generate", (state) =>
      generateAnswer(state, model, lang, eventEmitter),
    )
    .addEdge(START, "generateQueryOrRespond")
    .addConditionalEdges("generateQueryOrRespond", shouldRetrieve, {
      retrieve: "retrieve",
      respond: END,
    })
    .addEdge("retrieve", "gradeDocuments")
    .addConditionalEdges("gradeDocuments", routeAfterGrading, {
      generate: "generate",
      rewrite: "rewrite",
    })
    .addConditionalEdges("generate", shouldRespond)
    .addEdge("rewrite", "generateQueryOrRespond");

  return graph.compile();
}

export async function POST(req: Request) {
  console.log("NEW AGENTIC RAG REQUEST");

  if (process.env.NEXT_PUBLIC_ENABLE_RAG_CHAT !== "true") {
    return NextResponse.json(
      { error: "RAG chat is disabled." },
      { status: 403 },
    );
  }

  const { messages, nResults = 3, lang = "en" } = await req.json();

  // Extract latest user message
  const userQuery = messages[messages.length - 1]?.content ?? "";
  console.log("\n[SETUP] User query:", userQuery);
  console.log("[SETUP] Language:", lang);
  console.log("[SETUP] Number of results:", nResults);

  // Setup vector store and embeddings
  console.log("\n[SETUP] Connecting to Weaviate...");
  const client = await weaviate.connectToLocal({
    host: process.env.WEAVIATE_HOST || "localhost",
    port: process.env.WEAVIATE_PORT
      ? parseInt(process.env.WEAVIATE_PORT, 10)
      : 1564,
  });
  console.log("[SETUP] Weaviate connected");

  console.log("[SETUP] Creating embeddings model...");
  const embeddings = new OpenAIEmbeddings({
    model: process.env.EMBEDDING_MODEL,
    configuration: {
      baseURL: process.env.BASE_URL,
      apiKey: process.env.OPENROUTER_API_KEY,
    },
  });

  console.log("[SETUP] Initializing vector store...");
  const vectorStore = new WeaviateStore(embeddings, {
    client,
    indexName: `corpus_${lang}`,
  });

  // LLM model (non-streaming for agent decisions)
  console.log("[SETUP] Creating LLM model...");
  console.log("[SETUP] Model:", process.env.CHAT_MODEL);
  const model = new ChatOpenAI({
    model: process.env.CHAT_MODEL,
    configuration: {
      baseURL: process.env.BASE_URL,
      apiKey: process.env.OPENROUTER_API_KEY,
    },
    temperature: 0,
  });

  // Create a streaming response
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      // Event emitter to send progress updates
      const eventEmitter = (event: string) => {
        console.log("[EVENT]", event);
        controller.enqueue(encoder.encode(event + "\n"));
      };

      try {
        // Build the agentic RAG graph with event emitter
        console.log("\n[SETUP] Building agentic RAG graph...");
        const graph = await buildAgenticRAGGraph(
          vectorStore,
          model,
          nResults,
          lang,
          eventEmitter,
        );
        console.log("[SETUP] Graph compiled successfully");

        // Run the graph with the user's question
        const inputs = {
          messages: [new HumanMessage(userQuery)],
        };

        console.log("EXECUTING AGENTIC RAG GRAPH");

        // Execute the graph and collect the final result
        let finalResponse = "";
        let stepCount = 0;

        for await (const output of await graph.stream(inputs)) {
          stepCount++;
          console.log(`\n--- Step ${stepCount} ---`);

          for (const [key, value] of Object.entries(output)) {
            console.log(`[GRAPH] Current node: ${key}`);

            if (key === "generate" || key === "generateQueryOrRespond") {
              const stateValue = value as typeof GraphState.State;
              const lastMsg =
                stateValue.messages[stateValue.messages.length - 1];

              // If this is the final answer
              if (
                lastMsg.getType() === "ai" &&
                (!("tool_calls" in lastMsg) ||
                  !lastMsg.tool_calls ||
                  !Array.isArray(lastMsg.tool_calls) ||
                  lastMsg.tool_calls.length === 0)
              ) {
                finalResponse = lastMsg.content as string;
                console.log("[GRAPH] ✅ Final answer captured");
              }
            }
          }
        }

        console.log("[RESULT] Total steps:", stepCount);
        console.log(
          "[RESULT] Final response length:",
          finalResponse.length,
          "chars",
        );
        console.log(
          "[RESULT] Response preview:",
          finalResponse.substring(0, 150) + "...",
        );

        // Signal that we're done with progress and starting the final answer
        console.log("\n[RESPONSE] Streaming response to client...");
        controller.enqueue(encoder.encode("event:done\n"));

        // Small delay to ensure the event is processed
        await new Promise((resolve) => setTimeout(resolve, 50));

        // Stream the final response in chunks for a streaming effect
        const chunkSize = 5;
        for (let i = 0; i < finalResponse.length; i += chunkSize) {
          const chunk = finalResponse.slice(i, i + chunkSize);
          controller.enqueue(encoder.encode(chunk));
          await new Promise((resolve) => setTimeout(resolve, 20));
        }

        controller.close();
        console.log("[RESPONSE] Stream closed");
      } catch (error) {
        console.error("\n AGENTIC RAG ERROR:");
        console.error(error);
        if (error instanceof Error) {
          console.error("Error message:", error.message);
          console.error("Error stack:", error.stack);
        }
        controller.enqueue(
          encoder.encode(
            `event:error\n${error instanceof Error ? error.message : String(error)}`,
          ),
        );
        controller.close();
      }
    },
  });

  return new NextResponse(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
