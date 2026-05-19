import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "MediaWorks handled the complete audio post for our film. The sound design and foley elevated every scene beyond what we imagined.",
    name: "Marathi Film Director",
    role: "Feature Film Production",
    company: "Pune, Maharashtra",
  },
  {
    quote:
      "From recording to the final 5.1 mix, the team at MediaWorks delivered broadcast-quality audio on a tight deadline. Exceptional professionals.",
    name: "Corporate Film Client",
    role: "Brand Film Project",
    company: "Maharashtra Tourism Board",
  },
  {
    quote:
      "Our podcast went from a raw recording to a polished production ready for Snovel. The team understood exactly what we needed.",
    name: "Podcast Host",
    role: "+91 Podcast",
    company: "Snovel Platform",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
      <div className="container max-w-4xl text-center">
        <p className="eyebrow mb-6">▸ Client Voices</p>
        <h2 className="display-lg mb-16">
          Words From <span className="text-primary">The Booth.</span>
        </h2>

        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full glass-card p-12"
            >
              <Quote className="text-primary mx-auto mb-8" size={40} strokeWidth={1.5} />
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-10 text-balance">
                "{t.quote}"
              </p>
              <div className="accent-divider mx-auto mb-6" />
              <div className="font-display text-xl uppercase tracking-wide">{t.name}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {t.role} · {t.company}
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-1 transition-all ${
                  idx === i ? "w-10 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
