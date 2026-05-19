import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = memo(() => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/hero-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="container relative text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 uppercase tracking-[0.4em] font-light letter-spacing">
            Film | Sound | Music
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-black text-xs uppercase tracking-[0.3em] font-semibold hover:bg-opacity-90 transition-all hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
          >
            View Our Work
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-[0.3em] font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>

      <Link
        to="/about"
        aria-label="Go to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Explore</span>
        <ArrowDown size={16} className="animate-scroll-bounce" />
      </Link>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
