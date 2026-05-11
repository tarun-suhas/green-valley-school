"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { schoolData } from "@/data/schoolData";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Classes", href: "/#classes" },
    { name: "Facilities", href: "/#facilities" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHomePage
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span
            className={cn(
              "font-bold text-xl tracking-tight",
              isScrolled || !isHomePage ? "text-gray-900" : "text-white"
            )}
          >
            {schoolData.name.split(" ")[0]} <span className="text-primary">Valley</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled || !isHomePage ? "text-gray-600" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/admissions"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg",
            isScrolled || !isHomePage ? "text-gray-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl font-semibold text-gray-800 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="#contact"
          className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
