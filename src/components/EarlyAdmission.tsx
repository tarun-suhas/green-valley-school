"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Timer, ArrowRight, Zap } from "lucide-react";

export default function EarlyAdmission() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date (30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Zap size={14} className="fill-white" /> Limited Time Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Early Admission <br />Benefit for 2026
              </h2>
              <p className="text-white/80 text-xl mb-10 max-w-lg">
                Secure your child&apos;s future today and avail a flat 20% discount on first-term fees. Offer valid for a limited number of seats!
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 min-w-[80px] text-center border border-white/20">
                    <p className="text-3xl font-bold text-white">{value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">{unit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full max-w-md">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-[2rem] p-8 shadow-2xl relative"
              >
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-black px-6 py-2 rounded-xl rotate-12 shadow-lg">
                  20% OFF
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Timer className="text-primary" /> Registration Open
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Priority Seat Allocation",
                    "Waiver on Admission Fee",
                    "Complimentary School Kit",
                    "Free Career Counselling Session",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600 font-medium">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group">
                  Claim This Offer <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
