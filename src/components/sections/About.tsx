import { motion } from "framer-motion";

const stats = [
  { num: "2017", label: "Founded" },
  { num: "50+", label: "Projects Delivered" },
  { num: "25+", label: "Celebrity Collaborations" },
];

const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow mb-6">▸ Who We Are</p>
          <h2 className="display-lg text-balance">
            We Don't Just Capture Moments.
            <br />
            <span className="text-primary">We Craft Stories.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-6 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            MediaWorks Studio is Pune's premier post-production powerhouse, dedicated to transforming creative visions into cinematic masterpieces. Founded in 2017, we have established ourselves as a trusted partner for filmmakers, directors, and content creators across India. Our philosophy is simple yet profound: every project tells a unique story, and we are committed to bringing that story to life with precision, creativity, and unwavering dedication.
          </p>
          <p>
            As a comprehensive post-production house, we offer an extensive suite of services that covers every aspect of filmmaking excellence. From <span className="text-foreground">professional editing</span> and <span className="text-foreground">color grading</span> to cutting-edge <span className="text-foreground">visual effects (VFX)</span>, <span className="text-foreground">sound design</span>, and <span className="text-foreground">audio mastering</span> — we handle every detail with meticulous care. Whether you're working on feature films, web series, documentaries, advertisements, or music videos, our team possesses the expertise and equipment to elevate your content to international standards.
          </p>
          <p>
            Our team comprises award-winning editors, sound engineers, VFX artists, colorists, and music producers who bring a wealth of experience to every project. We leverage industry-leading software and technologies including DaVinci Resolve, Adobe Creative Suite, Pro Tools, and the latest VFX tools to ensure your final product is nothing short of extraordinary. Each team member is deeply passionate about their craft and brings a unique perspective that enriches the creative process.
          </p>
          <p>
            We understand that timing is everything in the entertainment industry. Our streamlined workflows and dedicated project management ensure that deadlines are met without compromising on quality. We believe in transparent communication throughout the production process, keeping you informed at every stage and welcoming your feedback to ensure the final product aligns perfectly with your vision.
          </p>
          <p>
            What sets MediaWorks Studio apart is our commitment to building lasting relationships with our clients. We view each project not as a transaction, but as a collaboration between creative partners. Our extensive portfolio includes collaborations with renowned celebrities, successful film productions, and diverse commercial projects, all of which reflect our dedication to excellence and innovation.
          </p>
        </motion.div>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-px mt-24 bg-border">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            className="bg-background p-10 text-center group hover:bg-background-elevated transition-colors"
          >
            <div className="font-display text-7xl text-primary mb-2 group-hover:scale-105 transition-transform">
              {s.num}
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
