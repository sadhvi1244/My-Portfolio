import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import FeaturedWork from "@/components/FeaturedWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground font-['Inter',sans-serif]">
      <Navigation />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Achievements />
      <FeaturedWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
