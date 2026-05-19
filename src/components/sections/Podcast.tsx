import { motion } from "framer-motion";
import { Mic, Scissors, Radio, Check, ArrowRight } from "lucide-react";

const steps = [
  { icon: Mic, title: "Record", desc: "Multi-track studio sessions with broadcast-grade microphones." },
  { icon: Scissors, title: "Edit", desc: "Noise reduction, leveling, mastering and tight storytelling cuts." },
  { icon: Radio, title: "Publish", desc: "Distribution-ready files, show notes and promo assets." },
];

const includes = [
  "Multi-track recording",
  "Noise reduction & EQ",
  "Mastering to LUFS",
  "Episode show notes",
  "Distribution-ready files",
  "Audiogram clips for social",
];

const Podcast = () => {
  return (
    <section id="podcast" className="relative py-32 bg-background-elevated overflow-hidden">
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow mb-6">▸ Featured Service</p>
            <h2 className="display-lg text-balance">
              Your Voice.
              <br />
              <span className="text-primary">Professionally Produced.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Whether you're launching your first show or scaling a syndicated
            series, our podcast team handles the technical craft so you can stay
            focused on the conversation. Walk in with an idea — leave with a
            release-ready episode.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative bg-background p-8 border border-border group hover:border-primary transition-colors"
              >
                <div className="flex items-center justify-between mb-8">
                  <Icon size={32} strokeWidth={1.5} className="text-primary" />
                  <span className="font-display text-5xl text-border group-hover:text-primary/40 transition-colors">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-3xl uppercase tracking-wide mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary bg-background-elevated z-10" size={20} />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-border p-10 bg-background"
          >
            <h3 className="font-display text-2xl uppercase tracking-wide mb-8">What's Included</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check size={16} className="text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="text-2xl font-display uppercase tracking-wide mb-6 text-balance">
              Ready to hit record?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary-deep transition-colors group"
            >
              Start Your Podcast Journey
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
