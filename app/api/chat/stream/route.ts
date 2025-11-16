import { NextResponse } from "next/server";
import weaviate from "weaviate-client";
import { WeaviateStore } from "@langchain/weaviate";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";

export async function POST(req: Request) {
  if (process.env.NEXT_PUBLIC_ENABLE_RAG_CHAT !== "true") {
    return NextResponse.json(
      { error: "RAG chat is disabled." },
      { status: 403 },
    );
  }

  const { messages, nResults = 3 } = await req.json();

  // Extract latest user message
  const userQuery = messages[messages.length - 1]?.content ?? "";

  // Setup vector store and embeddings
  const client = await weaviate.connectToLocal({
    port: 1564,
  });

  const embeddings = new OpenAIEmbeddings({
    model: process.env.EMBEDDING_MODEL,
    configuration: {
      baseURL: process.env.BASE_URL,
      apiKey: process.env.OPENROUTER_API_KEY,
    },
  });

  const vectorStore = new WeaviateStore(embeddings, {
    client,
    indexName: "Docs",
  });

  // Run similarity search
  const ragResults = await vectorStore.similaritySearch(userQuery, nResults);

  // Build RAG context
  const contextText = ragResults
    .map((doc, i) => `(${i + 1}) ${doc.pageContent}`)
    .join("\n");

  // LLM model
  const model = new ChatOpenAI({
    model: process.env.CHAT_MODEL,
    configuration: {
      baseURL: process.env.BASE_URL,
      apiKey: process.env.OPENROUTER_API_KEY,
    },
    streaming: true,
  });

  // RAG-augmented system message
  const systemMessage = {
    role: "system",
    content: `
      You are a chatbot that leverages retrieved documents to provide accurate answers.
      You answer user queries using the retrieved context provided below.
      The provided context related to the professional and life experience of a human named Daniel.
      If the context does not contain relevant information, answer normally.
      Answer in plain-text only. No markdown.
      Never mention the context directly in your answers; act as if you know this information already.
      Politely decline to answer if the question is not related to Daniel's experience, and prompt the user to ask relevant questions.

      Context:
      ${contextText}
    `.trim(),
  };

  const chat_history = [systemMessage, ...messages];

  const stream = await model.stream(chat_history);

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async pull(controller) {
      for await (const chunk of stream) {
        controller.enqueue(encoder.encode(chunk.text));
      }
      controller.close();
    },
  });

  return new NextResponse(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
