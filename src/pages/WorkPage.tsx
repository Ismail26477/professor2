import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/sections/Footer";

const WorkPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CursorGlow />
    <Navbar />
    <main>
      <Portfolio />
    </main>
    <Footer />
  </div>
);

export default WorkPage;
