import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Main content wrapper with padding on desktop for fixed left vertical sidebar (`md:pl-20`) */}
      <main className="md:pl-20 transition-all duration-300">
        <Hero />
        <Introduction />
        <Experience />
        <About />
        <Certificates />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
