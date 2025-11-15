"use server";

export async function sendMessage(message: string) {
  const reply = `Echo: ${message}`;
  return reply;
}
