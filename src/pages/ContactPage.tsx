import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const ContactPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CursorGlow />
    <Navbar />
    <main className="pt-20">
      <Contact />
    </main>
    <Footer />
  </div>
);

export default ContactPage;
