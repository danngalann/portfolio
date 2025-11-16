import ChatbotInterface from "@/app/ui/chat/chatbot-interface";
import { redirect } from "next/navigation";

export default function ChatPage() {
  if (process.env.NEXT_PUBLIC_ENABLE_RAG_CHAT !== "true") {
    return redirect("/");
  }
  return <ChatbotInterface />;
}
