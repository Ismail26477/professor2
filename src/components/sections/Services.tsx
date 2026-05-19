import { memo } from "react";
import { motion } from "framer-motion";
import { Film, Mic, Music } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "Audio Services",
    desc: "Broadcast-grade audio post production — sound design, foley, dubbing, SFX and 5.1 surround mixing for film and media.",
    items: [
      "Audio Recording",
      "Sound Design",
      "Audio Dubbing",
      "Foley",
      "SFX Design",
      "5.1 Premix & Final Mix",
    ],
  },
  {
    icon: Film,
    title: "Video Services",
    desc: "From concept to final cut — video shoot, VFX, colour grading, DCP and animation production handled end-to-end.",
    items: [
      "Video Shoot",
      "Video Edit",
      "Animation Film Production",
      "VFX Design",
      "CC & DI (Colour Grading)",
      "DCP / DPX Print",
    ],
  },
  {
    icon: Music,
    title: "Music Production",
    desc: "Original compositions, film background scores, music programming and full album production with live instrument recording.",
    items: [
      "Music Composition",
      "Music Programming & Arrangement",
      "Artists for Rhythm & Instruments",
      "Film Background Music",
    ],
  },
];

const Services = memo(() => {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-background pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full border-8 border-primary/20 -mr-16 -mt-16 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-primary/20 pointer-events-none" />
      <div className="absolute bottom-32 right-32 w-16 h-16 border-2 border-primary/20 pointer-events-none" />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group"
            >
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide mb-6 text-primary italic">
                {s.title}
              </h3>
              
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-base text-gray-300 flex items-start gap-3 group/item"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span className="group-hover/item:text-primary transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";
export default Services;
