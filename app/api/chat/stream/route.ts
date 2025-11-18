import { NextResponse } from "next/server";
import weaviate from "weaviate-client";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import type { Document } from "@langchain/core/documents";

export async function POST(req: Request) {
  if (process.env.NEXT_PUBLIC_ENABLE_RAG_CHAT !== "true") {
    return NextResponse.json(
      { error: "RAG chat is disabled." },
      { status: 403 },
    );
  }

  const { messages, nResults = 5, lang = "en" } = await req.json();

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

  const collectionName = `Corpus_${lang}`;

  // Get the collection
  const collection = client.collections.get(collectionName);

  // Embed the query for vector search
  const queryVector = await embeddings.embedQuery(userQuery);

  // Perform hybrid search (BM25 + vector search)
  // alpha: 0 = pure BM25, 1 = pure vector, 0.5 = balanced, 0.75 = favor vector
  const response = await collection.query.hybrid(userQuery, {
    limit: nResults,
    returnMetadata: ["score"],
    vector: queryVector,
    alpha: 0.75, // Favors semantic search while still considering keyword matching
  });

  // Convert Weaviate results to LangChain Document format
  const ragResults: Document[] = response.objects.map((obj: any) => ({
    pageContent: obj.properties.text || "",
    metadata: {
      type: obj.properties.type,
      key: obj.properties.key,
      company: obj.properties.company,
      section: obj.properties.section,
      lang: obj.properties.lang,
      score: obj.metadata?.score,
    },
  }));

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
