"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80", title: "Yoga Session", category: "Sports" },
    { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80", title: "Science Lab", category: "Academic" },
    { url: "https://images.unsplash.com/photo-1577891721396-22c5a3e73d99?auto=format&fit=crop&q=80", title: "Art Class", category: "Creative" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80", title: "Classroom", category: "Academic" },
    { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80", title: "Annual Day", category: "Event" },
    { url: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80", title: "Library", category: "Academic" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Capturing Moments</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Life at Green Valley</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A glimpse into the vibrant and diverse activities that make our school a second home for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[350px] rounded-[2.5rem] overflow-hidden shadow-lg"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
                <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.title}
                </h3>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-150">
                  <Plus className="text-primary" size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
