"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export default function AdmissionPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenAdmissionPopup");
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 5000);

    const handleOpen = () => setIsVisible(true);
    window.addEventListener("open-admission-modal", handleOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-admission-modal", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenAdmissionPopup", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left side (Decoration) */}
            <div className="hidden md:flex md:w-2/5 bg-primary p-12 flex-col justify-center text-white relative">
              <Sparkles className="absolute top-10 right-10 opacity-20" size={60} />
              <h3 className="text-3xl font-bold mb-4">Start Your Journey</h3>
              <p className="text-white/80 text-sm">Join our vibrant learning community for the 2026 academic year.</p>
            </div>

            {/* Right side (Form) */}
            <div className="md:w-3/5 p-10 md:p-12 relative">
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">Admission Enquiry</span>
                <h4 className="text-2xl font-bold text-gray-900">Get All Details</h4>
              </div>

              <form className="space-y-4" onSubmit={(e) => { 
                e.preventDefault(); 
                const formData = new FormData(e.currentTarget);
                const student = formData.get("student");
                const parent = formData.get("parent");
                const phone = formData.get("phone");
                const grade = formData.get("grade");
                
                const msg = encodeURIComponent(`Hello! I would like to enquire about admission for:
- Student Name: ${student}
- Parent Name: ${parent}
- Phone: ${phone}
- Class: ${grade}`);
                
                window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
                handleClose(); 
              }}>
                <div>
                  <input 
                    name="student"
                    type="text" 
                    placeholder="Student Name" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    name="parent"
                    type="text" 
                    placeholder="Parent Name" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    name="phone"
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <select 
                    name="grade"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-500"
                  >
                    <option value="">Class Applying For</option>
                    <option value="pre-primary">Pre Primary</option>
                    <option value="primary">Primary School</option>
                    <option value="high">High School</option>
                    <option value="intermediate">Intermediate</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                >
                  Submit Inquiry <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
