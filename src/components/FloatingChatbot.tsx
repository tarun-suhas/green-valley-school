"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot } from "lucide-react";
import { schoolData } from "@/data/schoolData";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! Welcome to our school website. How can I help you today?", sender: "bot" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    
    const botResponse = getResponse(input.toLowerCase());
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, sender: "bot" }]);
    }, 500);

    setInput("");
  };

  const getResponse = (query: string) => {
    const faq = schoolData.faq as Record<string, string>;
    for (const key in faq) {
      if (query.includes(key)) {
        return faq[key];
      }
    }
    return "I'm sorry, I didn't quite understand that. Would you like to contact our office directly at " + schoolData.contact.phone + "?";
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl text-white hover:bg-primary-dark transition-colors"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} fill="white" />}
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-44 right-6 z-50 w-[350px] md:w-[400px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Bot className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">School Assistant</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/70 text-xs">Always active</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="ml-auto text-white/50 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="h-[400px] overflow-y-auto p-6 space-y-4 bg-gray-50/50"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${
                    msg.sender === "user" 
                      ? "bg-primary text-white rounded-tr-none" 
                      : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about admissions, timings..." 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
              <button 
                onClick={handleSend}
                className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/10"
              >
                <Send size={18} />
              </button>
            </div>
            
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-2">
              {["Timings", "Admission", "Fees", "Contact"].map((chip) => (
                <button 
                  key={chip}
                  onClick={() => { setInput(chip); handleSend(); }}
                  className="text-[10px] font-bold uppercase tracking-wider bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-500 hover:border-primary hover:text-primary transition-all"
                >
                  {chip}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
