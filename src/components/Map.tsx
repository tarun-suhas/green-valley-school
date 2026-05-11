"use client";

import { motion } from "framer-motion";

export default function Map() {
  return (
    <section className="h-[450px] w-full bg-gray-200 relative overflow-hidden">
      <iframe
        title="School Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.163351221147!2d78.43283285!3d17.41031385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973a0e676a6b%3A0x600100787729227c!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      {/* Overlay Badge */}
      <div className="absolute bottom-10 left-10 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-xs"
        >
          <h4 className="font-bold text-gray-900 mb-2">Visit Our Campus</h4>
          <p className="text-gray-500 text-sm">
            123 Education Lane, Jubilee Hills, Hyderabad, Telangana 500033
          </p>
        </motion.div>
      </div>
    </section>
  );
}
