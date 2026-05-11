import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HighSchoolPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Marquee />
        <section className="bg-primary/5 py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
              <GraduationCap size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">High School</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Preparing students for global challenges through academic excellence, leadership training, and career guidance.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" alt="High School" className="rounded-[3rem] shadow-2xl" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-8">Excellence in Learning</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Our High School program (Grades 6-10) focuses on developing deep conceptual understanding and analytical skills. We provide a platform for students to explore their passions through diverse clubs and competitive sports.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Advanced Science Laboratories", "Leadership & Public Speaking", "Competitive Exam Coaching", "Student Exchange Programs"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-primary" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/admissions" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all inline-block shadow-lg">
                  Join High School
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
