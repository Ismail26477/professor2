import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/sections/Footer";
import ameyWagh from "@/assets/gallery/amey-wagh.jpg";
import mangesh from "@/assets/gallery/mangesh-borgaonkar.jpg";
import savanee from "@/assets/gallery/savanee-ravindra.jpg";
import shaunak from "@/assets/gallery/shaunak-avinash.png";
import jyoti from "@/assets/gallery/jyoti-subash.png";
import milind from "@/assets/gallery/milind-gune.png";
import ashutosh from "@/assets/gallery/ashutosh-javdekar.png";
import avdhoot from "@/assets/gallery/avdhoot-gupte.png";
import mahalaxmi from "@/assets/gallery/mahalaxmi-iyer.png";
import uddhav from "@/assets/gallery/uddhav-thakre.jpg";
import shankar from "@/assets/gallery/shankar-mahadevan.jpg";
import subodh from "@/assets/gallery/subodh-bhave.jpg";

const photos = [
  { img: ameyWagh, name: "Amey Wagh", role: "Marathi Film Dubbing" },
  { img: mangesh, name: "Mangesh Borgaonkar", role: "Music Album Dubbing" },
  { img: savanee, name: "Savanee Ravindra", role: "Music Single Dubbing" },
  { img: shaunak, name: "Pt. Shaunak Abhisheki & Avinash Chandrachood", role: "Marathi Single" },
  { img: jyoti, name: "Jyoti Subash", role: "Dubbing for Film Basta" },
  { img: milind, name: "Milind Gune", role: "Ramkrushna Math, Pune · Music Album" },
  { img: ashutosh, name: "Dr. Ashutosh Javdekar", role: "Veen Music Album" },
  { img: uddhav, name: "Shri. Uddhav Thakre", role: "Khakee Gulab Release" },
  { img: shankar, name: "Shankar Mahadevan", role: "Katyar to Kajarare Promotions Shoot" },
  { img: subodh, name: "Subodh Bhave", role: "Dubbing For Film" },
  { img: avdhoot, name: "Avdhoot Gupte", role: "Music Single Recording" },
  { img: mahalaxmi, name: "Mahalaxmi Iyer", role: "Dubbing for Album Tujha Ek Themb" },
];

const GalleryPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CursorGlow />
    <Navbar />
    <main className="pt-32 pb-24">
      <section className="container">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">▸ Studio Moments</p>
          <h1 className="display-lg mb-4">
            Gallery of <span className="text-primary">Collaborations</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Behind-the-scenes glimpses from our recording sessions with celebrated
            artists, singers and actors who have graced Media Works Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <motion.figure
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden border border-border bg-card aspect-[4/5]"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Always-visible bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              {/* Hover orange wash */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />

              <figcaption className="absolute inset-x-0 bottom-0 p-5 transform transition-transform duration-500 group-hover:-translate-y-1">
                <div className="h-px w-10 bg-primary mb-3 transition-all duration-500 group-hover:w-20" />
                <h3 className="font-display text-xl uppercase tracking-wide text-foreground leading-tight">
                  {p.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1.5">
                  {p.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default GalleryPage;
