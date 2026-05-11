"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { schoolData } from "@/data/schoolData";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent("Hello, I would like to know more about admissions.");
  const whatsappUrl = `https://wa.me/${schoolData.contact.whatsapp.replace(/\+/g, "")}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white hover:bg-[#20bd5a] transition-colors"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
      <span className="absolute -top-1 -right-1 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-[#25D366] text-[10px] font-bold items-center justify-center">1</span>
      </span>
    </motion.a>
  );
}
