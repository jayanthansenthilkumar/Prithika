import { ArrowRight, Globe, Server, BrainCircuit, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function HeroSection() {
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10 w-full pt-10 pb-16"
    >
      <motion.div variants={itemVariants} className="max-w-4xl">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight flex flex-wrap items-center gap-4">
          <span className="text-[var(--accent)] bg-[var(--accent)]/10 p-3 rounded-2xl shadow-sm">
            <Sparkles size={40} strokeWidth={2.5} />
          </span>
          Hi, I'm Prithika.
        </h1>
      </motion.div>
      
      <motion.div variants={itemVariants} className="max-w-3xl">
        <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-light">
          I'm a <strong className="font-medium text-[var(--text-primary)]">Product-focused Software Engineer</strong> crafting data-driven experiences grounded in proven engineering traditions. 
          I specialize in distributed systems, full-stack development, and integrating machine learning models into scalable architectures.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
        <Button asChild size="lg" className="rounded-full px-8 text-base shadow-lg shadow-[var(--accent)]/20">
          <Link to="/projects" className="flex items-center gap-2">
            Explore Work <ArrowRight size={18} />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base border-2">
          <Link to="/contact">
            Get in touch
          </Link>
        </Button>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-[var(--border-subtle)]"
      >
        <div className="group flex flex-col gap-4 p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 hover:border-[var(--border-hover)]">
          <div className="bg-[var(--accent)]/10 text-[var(--accent)] w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Globe size={28} strokeWidth={2} />
          </div>
          <h3 className="font-heading text-xl font-semibold">Full-Stack Engineering</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
            Building robust web applications using React, Python, and Flask. I emphasize seamless user experiences powered by scalable server-side architecture.
          </p>
        </div>

        <div className="group flex flex-col gap-4 p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 hover:border-[var(--border-hover)]">
          <div className="bg-[var(--accent)]/10 text-[var(--accent)] w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Server size={28} strokeWidth={2} />
          </div>
          <h3 className="font-heading text-xl font-semibold">Data-Driven Systems</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
            Designing highly available backend architectures and optimizing relational databases to handle complex queries securely and efficiently.
          </p>
        </div>

        <div className="group flex flex-col gap-4 p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 hover:border-[var(--border-hover)]">
          <div className="bg-[var(--accent)]/10 text-[var(--accent)] w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <BrainCircuit size={28} strokeWidth={2} />
          </div>
          <h3 className="font-heading text-xl font-semibold">Applied Machine Learning</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
            Engineering predictive models using Pandas & Scikit-Learn. I bridge the gap between data science research and tangible user-facing features.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
