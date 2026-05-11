"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { schoolData } from "@/data/schoolData";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 hover:scale-100"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-primary px-6 py-2 rounded-full text-white text-sm font-bold tracking-widest uppercase mb-6 shadow-lg animate-pulse">
            Admissions Open 2026
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {schoolData.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            {schoolData.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-2 group transition-all"
            >
              Apply Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-2 transition-all"
            >
              <Phone size={20} className="text-primary" />
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
