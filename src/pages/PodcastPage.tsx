import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Podcast from "@/components/sections/Podcast";
import Footer from "@/components/sections/Footer";

const PodcastPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CursorGlow />
    <Navbar />
    <main className="pt-20">
      <Podcast />
    </main>
    <Footer />
  </div>
);

export default PodcastPage;
