import { NextResponse } from "next/server";
import { ChatOllama } from "@langchain/ollama";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const model = new ChatOllama({
    model: "gemma3:4b",
  });

  const systemMessage = {
    role: "system",
    content: `You are a helpful assistant that provides concise and accurate information in a chat environment.
      Do not output markdown in any form, just plain text.
      Your responses will be shown directly to the user, so be brief and conversational.`,
  };
  const chat_history = [systemMessage, ...messages];

  console.log(chat_history);

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
