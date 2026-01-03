import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Introduction />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Certificates />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
