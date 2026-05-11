import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Marquee />
        <About />
        {/* Additional Team Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Dr. Elizabeth Montgomery", role: "Principal", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" },
                { name: "Mr. Robert Wilson", role: "Vice Principal", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" },
                { name: "Mrs. Sarah Jenkins", role: "Academic Coordinator", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" },
              ].map((member) => (
                <div key={member.name} className="group">
                  <div className="rounded-[2rem] overflow-hidden mb-6 h-80 shadow-lg">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="text-2xl font-bold">{member.name}</h4>
                  <p className="text-primary font-medium">{member.role}</p>
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
