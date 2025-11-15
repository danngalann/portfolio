import { NextResponse } from "next/server";
import { ChatOllama } from "@langchain/ollama";

export async function POST(req: Request) {
  const { message } = await req.json();

  const model = new ChatOllama({
    model: "qwen3:14b",
  });

  const stream = await model.stream(message);

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
