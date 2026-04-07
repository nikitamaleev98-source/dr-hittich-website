import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Guarantee from "@/components/Guarantee";
import Founder from "@/components/Founder";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Guarantee />
        <Founder />
        <Testimonials />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
