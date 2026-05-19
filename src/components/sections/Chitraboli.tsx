import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import filmStill from "@/assets/work-4.jpg";

const laurels = [
  "Official Selection — 21st Pune International Film Festival",
  "Official Screening — 13th Yashwant International Film Festival, Mumbai",
  "Official Screening — 1st Latur International Film Festival, Latur",
];

const Chitraboli = () => {
  return (
    <section id="chitraboli" className="relative py-32 bg-background-elevated overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <p className="eyebrow mb-6">▸ Our Production House</p>
          <h2 className="display-lg leading-none">CHITRABOLI CREATIONS</h2>
          <p className="font-display text-2xl md:text-3xl text-primary mt-4 tracking-wide">
            A Venture by MediaWorks Studio
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-8">
            After serving for more than a decade in post-production, we launched
            our own production house — Chitraboli Creations — for creating films,
            web shows, and digital content. Based in Pune, we specialise in
            producing films, web series, documentaries, and digital content that
            entertains, inspires, and educates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="relative grid lg:grid-cols-[1.1fr_1fr] gap-0 border border-border bg-background overflow-hidden"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto min-h-[320px] overflow-hidden">
            <img
              src={filmStill}
              alt="Diary of Vinayak Pandit film still"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/60" />
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
              Featured Film
            </p>
            <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-wide leading-none">
              Diary of Vinayak Pandit
            </h3>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mt-3">
              A Film By Chitraboli Creations
            </p>

            <ul className="mt-8 space-y-3">
              {laurels.map((l) => (
                <li
                  key={l}
                  className="flex gap-3 items-start text-sm text-foreground/85"
                >
                  <Award size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:chitrabolicreations@gmail.com"
              className="mt-10 inline-flex items-center gap-3 px-6 py-3.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary-deep transition-colors w-fit"
            >
              Learn More About Chitraboli
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chitraboli;
