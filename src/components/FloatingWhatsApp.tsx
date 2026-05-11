"use client";

import { motion } from "framer-motion";
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
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl overflow-hidden hover:bg-[#20bd5a] transition-colors"
      title="Chat with us on WhatsApp"
    >
      <img 
        src="/whatsAppIcon.png" 
        alt="WhatsApp" 
        className="w-10 h-10 object-contain"
      />
    </motion.a>
  );
}
