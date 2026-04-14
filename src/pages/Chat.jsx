import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Bot, User } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userInput = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userInput }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.response || "No response from AI" }]);
    } catch {
      setMessages((prev) => [...prev, { role: "ai", text: "❌ Error connecting to server" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="min-h-screen text-white pt-20 pb-6 px-4 md:px-8 flex flex-col">
      <section className="max-w-4xl mx-auto w-full flex flex-col section-card" style={{ height: "calc(100vh - 110px)" }}>

        {/* HEADER */}
        <div className="px-6 py-4 border-b border-[#E6D3A3]/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] rounded-xl shadow-lg shadow-[#E6D3A3]/20">
              <Sparkles size={16} className="text-black" />
            </div>
            <div>
              <h1 className="text-base font-bold gold-gradient">AI Assistant</h1>
              <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Ready to help
              </p>
            </div>
          </div>
          <span className="hidden sm:block text-xs text-gray-600 px-3 py-1.5 bg-white/3 rounded-lg border border-white/5">
            💡 Ask anything
          </span>
        </div>

        {/* MESSAGES */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-5 md:px-8 py-5 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                msg.role === "user"
                  ? "bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E]"
                  : "bg-white/5 border border-[#E6D3A3]/15"
              }`}>
                {msg.role === "user"
                  ? <User size={14} className="text-black" />
                  : <Bot size={14} className="text-[#E6D3A3]" />}
              </div>
              <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] text-black font-medium rounded-tr-sm"
                  : "bg-white/5 border border-white/8 text-gray-200 rounded-tl-sm"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-[#E6D3A3]/15 flex items-center justify-center shrink-0">
                <Bot size={14} className="text-[#E6D3A3]" />
              </div>
              <div className="px-4 py-3 bg-white/5 border border-white/8 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#E6D3A3]/50 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* INPUT */}
        <div className="px-5 md:px-8 py-4 border-t border-[#E6D3A3]/10 shrink-0">
          <div className="flex items-center gap-3 bg-white/4 border border-[#E6D3A3]/15 rounded-2xl px-4 py-2 focus-within:border-[#E6D3A3]/35 transition-all duration-300">
            <input type="text" placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-600 py-1.5" />
            <button onClick={sendMessage} disabled={!input.trim() || loading}
              className="p-2.5 rounded-xl bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] text-black disabled:opacity-30 hover:shadow-lg hover:shadow-[#E6D3A3]/20 hover:scale-105 disabled:hover:scale-100 transition-all duration-200 shrink-0">
              <Send size={15} />
            </button>
          </div>
        </div>

      </section>
    </article>
  );
};

export default Chat;
