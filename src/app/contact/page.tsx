import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Marquee from "@/components/Marquee";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Marquee />
        <section className="bg-primary/5 py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re here to answer any questions you may have. Reach out to us and we&apos;ll respond as soon as we can.
            </p>
          </div>
        </section>
        <Contact />
        <Map />
      </div>
      <Footer />
    </main>
  );
}
