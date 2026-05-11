import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import EarlyAdmission from "@/components/EarlyAdmission";
import { CheckCircle2, FileText, CreditCard, Users } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Marquee />
        
        {/* Hero Section for Admissions */}
        <section className="bg-primary/5 py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are excited to welcome new students for the academic year 2026. Follow the simple steps below to begin your journey with us.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Enquiry", desc: "Fill out the online enquiry form or visit our campus.", icon: FileText },
                { title: "Campus Visit", desc: "Schedule a tour to see our facilities and meet teachers.", icon: Users },
                { title: "Interaction", desc: "A friendly interaction with the student and parents.", icon: CheckCircle2 },
                { title: "Enrollment", desc: "Complete the documentation and secure your seat.", icon: CreditCard },
              ].map((step, i) => (
                <div key={i} className="text-center p-8 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EarlyAdmission />

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Admission FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "What is the age criteria for Pre-Primary?", a: "The student should be 3+ years old for Nursery as of March 31st of the academic year." },
                { q: "Do you offer sibling discounts?", a: "Yes, we offer a 10% discount on tuition fees for the second child." },
                { q: "Is there an entrance exam?", a: "For High School and Intermediate, we conduct a basic aptitude test in English and Mathematics." },
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
