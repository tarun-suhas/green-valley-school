import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Facilities from "@/components/Facilities";
import EarlyAdmission from "@/components/EarlyAdmission";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Courses />
      <Facilities />
      <EarlyAdmission />
      <Gallery />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
    </main>
  );
}
