import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { BookOpen, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PrimaryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Marquee />
        <section className="bg-primary/5 py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
              <BookOpen size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Primary School</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a strong foundation for lifelong learning through academic rigor and character development.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" alt="Primary School" className="rounded-[3rem] shadow-2xl" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-8">Curriculum & Values</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Our Primary School curriculum (Grades 1-5) is designed to spark curiosity and foster critical thinking. We balance core subjects with sports and arts to develop well-rounded individuals.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Integrated Science & Math", "Multi-lingual Program", "Digital Literacy & Coding", "Environmental Awareness"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-primary" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/admissions" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all inline-block shadow-lg">
                  Enroll Your Child
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
