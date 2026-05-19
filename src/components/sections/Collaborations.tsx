import { motion } from "framer-motion";
import { Mic2 } from "lucide-react";

const people = [
  { name: "Shankar Mahadevan", project: "Katyar to Kajarare Promotions" },
  { name: "Subodh Bhave", project: "Dubbing — Ani Dr. Kashinath Ghanekar" },
  { name: "Mahalaxmi Iyer", project: "Album Dubbing — Tujha Ek Themb" },
  { name: "Avdhoot Gupte", project: "Music Single Recording" },
  { name: "Savanee Ravindra", project: "Music Single Dubbing" },
  { name: "Amey Wagh", project: "Marathi Film Dubbing" },
  { name: "Siddarth Menon", project: "Marathi Film Dubbing" },
  { name: "Pt. Shaunak Abhisheki", project: "Marathi Single Recording" },
  { name: "Jyoti Subash", project: "Film Dubbing — Basta" },
  { name: "Mangesh Borgaonkar", project: "Music Album Dubbing" },
];

const Card = ({ name, project }: { name: string; project: string }) => (
  <div className="glass-card p-6 min-w-[260px] sm:min-w-0 group hover:border-primary transition-colors">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors shrink-0">
        <Mic2 size={16} strokeWidth={1.5} />
      </div>
      <div>
        <div className="font-display text-xl uppercase tracking-wide leading-tight">
          {name}
        </div>
        <div className="text-xs text-primary mt-1.5 uppercase tracking-[0.15em]">
          {project}
        </div>
      </div>
    </div>
  </div>
);

const Collaborations = () => {
  const loop = [...people, ...people];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            ▸ In The Studio With...
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="display-lg text-balance"
          >
            Voices & Faces <span className="text-primary">We've Worked With.</span>
          </motion.h2>
        </div>
      </div>

      {/* Mobile: grid */}
      <div className="container md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {people.map((p) => (
          <Card key={p.name} {...p} />
        ))}
      </div>

      {/* Desktop: marquee */}
      <div
        className="hidden md:block relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex gap-5 animate-marquee whitespace-nowrap py-2">
          {loop.map((p, i) => (
            <div key={i} className="w-[340px] shrink-0">
              <Card {...p} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Collaborations;
