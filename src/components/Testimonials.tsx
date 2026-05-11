"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { schoolData } from "@/data/schoolData";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % schoolData.testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + schoolData.testimonials.length) % schoolData.testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Parent & Student Voice</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Our Community Says</h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 text-center relative"
            >
              <Quote className="absolute top-10 left-10 text-primary/10" size={120} />
              <div className="flex justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-10 relative z-10">
                &quot;{schoolData.testimonials[current].text}&quot;
              </p>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">{schoolData.testimonials[current].name}</h4>
                <p className="text-primary font-medium">{schoolData.testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 z-20"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 z-20"
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {schoolData.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === i ? "bg-primary w-10" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
