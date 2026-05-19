import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Chitraboli from "@/components/sections/Chitraboli";
import Collaborations from "@/components/sections/Collaborations";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Footer from "@/components/sections/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "MediaWorks Studio - Professional Post-Production Services in Pune";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Premium post-production studio in Pune offering film, sound design, music production, and visual effects for feature films, documentaries, and corporate projects.");
    }
  }, []);

  return (
  <div className="min-h-screen bg-background text-foreground">
    <CursorGlow />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Chitraboli />
      <Collaborations />
      <Testimonials />
      <Clients />
    </main>
    <Footer />
  </div>
  );
};

export default Home;
