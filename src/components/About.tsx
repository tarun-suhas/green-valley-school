"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Eye, Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Welcome to Excellence</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Inspiring the Leaders <br />of Tomorrow
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded on the principles of academic excellence and holistic development, Green Valley International School has been a beacon of quality education for over two decades. We believe in nurturing individual potential through a curriculum that balances tradition with innovation.
            </p>
            <Link href="/about" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-primary pb-1">
              Learn More About Our Heritage
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about-school.jpg" 
                alt="School Building" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-3xl shadow-xl hidden lg:block">
              <p className="text-4xl font-bold mb-1">20+</p>
              <p className="text-sm font-medium uppercase tracking-wider">Years of Legacy</p>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex gap-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <Eye className="text-primary" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a global leader in education, fostering a community of lifelong learners who contribute positively to society with integrity and passion.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex gap-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <Target className="text-primary" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide a safe, nurturing environment that encourages academic rigor, artistic expression, and athletic achievement.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Principal Message */}
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 h-[400px] lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                alt="Principal" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-3/5 p-12 lg:p-20 relative">
              <Quote className="absolute top-10 right-10 text-primary/10" size={120} />
              <span className="text-primary font-bold mb-4 block uppercase tracking-widest text-sm">Leadership Message</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">From the Principal&apos;s Desk</h3>
              <p className="text-gray-600 text-lg leading-relaxed italic mb-10">
                &quot;At Green Valley, we don&apos;t just teach subjects; we inspire dreams. Our focus remains on the overall growth of every child, ensuring they are equipped with the skills and values needed to thrive in an ever-changing world. I welcome you to join our family.&quot;
              </p>
              <div>
                <p className="text-xl font-bold text-gray-900">Dr. Elizabeth Montgomery</p>
                <p className="text-primary font-medium">Principal, Green Valley International School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
