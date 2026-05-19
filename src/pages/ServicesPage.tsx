import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";

const ServicesPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CursorGlow />
    <Navbar />
    <main className="pt-20">
      <Services />
    </main>
    <Footer />
  </div>
);

export default ServicesPage;
