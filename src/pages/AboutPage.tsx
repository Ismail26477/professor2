import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import About from "@/components/sections/About";
import Collaborations from "@/components/sections/Collaborations";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Footer from "@/components/sections/Footer";

const AboutPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CursorGlow />
    <Navbar />
    <main className="pt-20">
      <About />
      <Collaborations />
      <Testimonials />
      <Clients />
    </main>
    <Footer />
  </div>
);

export default AboutPage;
