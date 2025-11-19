"use client";

import { useState, useRef, useEffect } from "react";
import { useDictionary, useLocale } from "@/app/contexts/dictionary-context";

export default function ChatbotInterface() {
  const locale = useLocale();
  const dict = useDictionary();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const suggestedMessages =
    locale === "en"
      ? [
          "What is Daniel's experience with Elasticsearch?",
          "What professional challenges has Daniel faced?",
          "How has Daniel applied his technical skills in his astrophotography projects?",
        ]
      : [
          "¿Cuál es la experiencia de Daniel con Elasticsearch?",
          "¿Qué desafíos profesionales ha enfrentado Daniel?",
          "¿Cómo ha aplicado Daniel sus habilidades técnicas en sus proyectos de astrofotografía?",
        ];

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");

    const updatedMessages = [
      ...messages,
      { role: "user" as const, content: userMsg },
    ];
    setMessages(updatedMessages);

    const assistantIndex = updatedMessages.length;

    // Show loading indicator
    setIsLoading(true);

    const res = await fetch("/api/chat/stream", {
      method: "POST",
      body: JSON.stringify({ messages: updatedMessages, lang: locale }),
    });

    // Hide loading and add empty assistant message
    setIsLoading(false);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    let partial = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      partial += decoder.decode(value);

      // Update last message incrementally
      setMessages((prev) => {
        const updated = [...prev];
        updated[assistantIndex] = {
          role: "assistant",
          content: partial,
        };
        return updated;
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedClick = (message: string) => {
    setInput(message);
  };

  return (
    <div className="flex flex-col h-[90vh] sm:h-[90vh] w-full max-w-3xl mx-auto bg-background">
      {/* Messages Area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 space-y-6 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm sm:text-base">
            {dict.chat.start}
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 ${
                    message.role === "user"
                      ? "bg-light-background text-foreground"
                      : "bg-transparent text-foreground"
                  }`}
                >
                  <p className="text-sm sm:text-base leading-relaxed break-words whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 bg-transparent">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                      style={{
                        animationDelay: "0ms",
                        animationDuration: "1.4s",
                      }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                      style={{
                        animationDelay: "200ms",
                        animationDuration: "1.4s",
                      }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                      style={{
                        animationDelay: "400ms",
                        animationDuration: "1.4s",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-700/50 px-4 py-4 sm:px-6 sm:py-5 bg-background">
        {/* Suggested Messages */}
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {suggestedMessages.map((message, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedClick(message)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-400 bg-transparent border border-gray-700/50 rounded-full hover:bg-light-background hover:text-foreground hover:border-gray-600 transition-all duration-200"
              >
                {message}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-2 sm:gap-3 max-w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={handleKeyPress}
            placeholder={
              locale === "en" ? "Type your message..." : "Escribe tu mensaje..."
            }
            className="flex-1 px-4 py-3 sm:px-5 sm:py-3.5 bg-light-background border border-gray-700/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 text-foreground placeholder-gray-500 text-sm sm:text-base transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-5 py-3 sm:px-6 sm:py-3.5 bg-light-background text-foreground rounded-xl hover:bg-[#54545e] disabled:bg-[#3a3a44] disabled:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 text-sm sm:text-base font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
