"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Cpu, LibraryBig, Trophy, Bus, ShieldCheck } from "lucide-react";
import { schoolData } from "@/data/schoolData";

const iconMap = {
  Monitor: Monitor,
  Cpu: Cpu,
  LibraryBig: LibraryBig,
  Trophy: Trophy,
  Bus: Bus,
  ShieldCheck: ShieldCheck,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">World Class Campus</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Facilities for Growth</h2>
            <p className="text-gray-500 text-lg">
              We provide state-of-the-art infrastructure to ensure every student has access to the tools they need to succeed in the modern world.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="https://www.youtube.com/watch?v=HgKU6a593j4" 
              target="_blank"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors duration-300 shadow-lg"
            >
              Take a Virtual Tour
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {schoolData.facilities.map((facility, index) => {
            const Icon = iconMap[facility.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-[2rem] text-center shadow-sm border border-gray-100 flex flex-col items-center group transition-all hover:shadow-xl hover:border-primary/20"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="text-gray-400 group-hover:text-primary transition-colors" size={28} />
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{facility.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
