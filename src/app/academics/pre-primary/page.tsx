import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { Baby, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PrePrimaryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Marquee />
        <section className="bg-primary/5 py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
              <Baby size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pre-Primary Education</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A nurturing environment where early childhood development is prioritized through play, exploration, and social interaction.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" alt="Pre Primary" className="rounded-[3rem] shadow-2xl" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-8">Our Approach</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Our Pre-Primary program focuses on the holistic development of children between ages 3 to 5. We use the Montessori and Play-Way methods to ensure learning is joyful and effective.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Phonetics & Language Skills", "Basic Numeracy through Play", "Art & Creative Expression", "Social & Emotional Learning"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-primary" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/admissions" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all inline-block shadow-lg">
                  Apply for Admission
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
