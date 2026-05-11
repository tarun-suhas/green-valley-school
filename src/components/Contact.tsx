"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { schoolData } from "@/data/schoolData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info */}
          <div className="lg:w-2/5">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Have Questions? <br />Contact Us Today</h2>
            <p className="text-gray-500 text-lg mb-12">
              Our administrative team is here to help you with any queries regarding admissions, fees, or facilities.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Phone Number</h4>
                  <p className="text-gray-600">{schoolData.contact.phone}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Email Address</h4>
                  <p className="text-gray-600">{schoolData.contact.email}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 leading-relaxed">{schoolData.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const subject = formData.get("subject");
                const message = formData.get("message");
                
                const msg = encodeURIComponent(`Hello! I have a query:
- Name: ${name}
- Email: ${email}
- Subject: ${subject}
- Message: ${message}`);
                
                window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
                (e.target as HTMLFormElement).reset();
              }}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Your Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="Enter your name" 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="Enter your email" 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    required
                    placeholder="How can we help?" 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Message</label>
                  <textarea 
                    name="message"
                    rows={5} 
                    required
                    placeholder="Type your message here..." 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button type="submit" className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group">
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
