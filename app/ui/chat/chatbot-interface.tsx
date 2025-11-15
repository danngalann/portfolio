"use client";

import { sendMessage } from "@/app/lib/actions";
import { useState, useRef, useEffect } from "react";

export default function ChatbotInterface() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "assistant", text: "Hello! How can I assist you today?" },
    { role: "user", text: "Hi! I have a question about your portfolio." },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", text: input }]);

      const response = await sendMessage(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", text: response },
      ]);

      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-4xl mx-auto border border-gray-600 rounded-lg shadow-lg bg-background">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            Start a conversation...
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] sm:max-w-[60%] rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-light-background text-foreground"
                    : "bg-light-background text-foreground"
                }`}
              >
                <p className="text-sm sm:text-base break-words">
                  {message.text}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-600 p-4 bg-background">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-light-background border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-foreground placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-6 py-2 bg-light-background text-foreground rounded-lg hover:bg-[#54545e] disabled:bg-[#3a3a44] disabled:text-gray-600 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
