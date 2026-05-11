"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Baby, BookOpen, GraduationCap, Award, ChevronRight } from "lucide-react";
import { schoolData } from "@/data/schoolData";

const iconMap = {
  Baby: Baby,
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
  Award: Award,
};

export default function Courses() {
  return (
    <section id="classes" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Academic Streams</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Educational Programs</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Providing a seamless educational journey from early childhood to professional preparation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schoolData.classes.map((cls, index) => {
            const Icon = iconMap[cls.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={cls.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-sm group-hover:bg-primary transition-colors duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cls.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {cls.description}
                </p>
                <Link 
                  href={`/academics/${cls.title.toLowerCase().replace(/\s+/g, "-")}`} 
                  className="flex items-center gap-2 mx-auto font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300"
                >
                  View Details <ChevronRight size={18} />
                </Link>
                
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
