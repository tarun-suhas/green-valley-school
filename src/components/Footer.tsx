import Link from "next/link";
import { Globe, Camera, Send, Play, GraduationCap } from "lucide-react";
import { schoolData } from "@/data/schoolData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Green <span className="text-primary">Valley</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Empowering students to achieve academic excellence and personal growth through a holistic and innovative approach to education.
            </p>
            <div className="flex gap-4">
              {[Globe, Camera, Send, Play].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-primary hover:pl-2 transition-all">About Us</Link></li>
              <li><Link href="/admissions" className="text-gray-400 hover:text-primary hover:pl-2 transition-all">Admissions</Link></li>
              <li><Link href="/#classes" className="text-gray-400 hover:text-primary hover:pl-2 transition-all">Our Programs</Link></li>
              <li><Link href="/#facilities" className="text-gray-400 hover:text-primary hover:pl-2 transition-all">Campus Life</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary hover:pl-2 transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Academic Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Academics</h4>
            <ul className="space-y-4">
              {schoolData.classes.map((cls) => {
                const slug = cls.title.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={cls.title}>
                    <Link href={`/academics/${slug}`} className="text-gray-400 hover:text-primary hover:pl-2 transition-all">
                      {cls.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-6">Stay updated with our latest news and events.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white"
              />
              <button className="absolute right-2 top-2 bg-primary text-white p-2.5 rounded-xl hover:bg-primary-dark transition-all">
                <GraduationCap size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© {currentYear} {schoolData.name}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
