import { memo } from "react";
import { motion } from "framer-motion";

const clients = [
  "Maharashtra Shasan",
  "Maharashtra Tourism",
  "Audible",
  "Finolex Pipes",
  "Rhyfil",
  "AppDirect India",
  "Teradata India",
  "Snovel",
  "Zee Music Marathi",
  "Symbiosis SSOU",
  "Nanded Waghala Municipal Corp",
  "Gurukul Public School",
];

const Clients = memo(() => {
  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-black to-black pointer-events-none" />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-8 font-medium">
            ▸ Trusted By Industry Leaders
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-gray-400 mt-6 leading-relaxed">
            Proudly partnering with top brands, studios, and organizations across India and beyond
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg p-8 sm:p-12 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {clients.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/5 border border-white/10 rounded-lg px-4 py-6 sm:px-6 sm:py-8 text-center hover:border-primary/50 hover:bg-white/[0.08] transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]">
                  <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.15em] text-white/90 leading-tight block group-hover:text-primary transition-colors">
                    {c}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-4">
            And many more prestigious brands
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary text-xs">★</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Clients.displayName = "Clients";
export default Clients;
