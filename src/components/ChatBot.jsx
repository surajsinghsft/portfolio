import { useEffect, useRef, useState } from "react";
import "./ChatBot.css";

import aiBot from "../assets/ai-bot.png";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi 👋 I'm Suraj's AI Assistant. Ask me anything about Suraj, his skills or projects.",
    },
  ]);

  // Automatically scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    // Add user's message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      console.log("Chatbot response:", data);

      if (!response.ok) {
        throw new Error(data.error || "API request failed");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.reply || "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Sorry, AI is temporarily unavailable. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating AI Button + Label */}
      {!open && (
        <div className="chatbot-launcher">
          <button
            className="chatbot-button"
            onClick={() => setOpen(true)}
            aria-label="Open AI Chat"
          >
            <img src={aiBot} alt="Suraj AI" />
          </button>

          <span className="chatbot-label">Ask Suraj AI</span>
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div className="chatbot">
          {/* Header */}
          <div className="chatbot-header">
            <div>
              <h3>Suraj AI</h3>

              <span>
                <span className="online-dot">●</span> Online
              </span>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.role === "user"
                    ? "user-message"
                    : "ai-message"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="message ai-message">
                <span className="typing">Typing...</span>
              </div>
            )}

            {/* Scroll target */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask about Suraj..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />

            <button
              onClick={sendMessage}
              disabled={loading || !message.trim()}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;