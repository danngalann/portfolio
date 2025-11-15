import { NextResponse } from "next/server";
import { ChatOllama } from "@langchain/ollama";
import weaviate from "weaviate-client";
import { WeaviateStore } from "@langchain/weaviate";
import { OllamaEmbeddings } from "@langchain/ollama";

export async function POST(req: Request) {
  const { messages, nResults = 3 } = await req.json();

  // Extract latest user message
  const userQuery = messages[messages.length - 1]?.content ?? "";

  // Setup vector store and embeddings
  const client = await weaviate.connectToLocal({
    port: 1564,
  });

  const embeddings = new OllamaEmbeddings({
    model: "mxbai-embed-large:335m",
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
  const model = new ChatOllama({
    model: "gemma3:4b",
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
