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
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function HeroSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full pt-10 pb-20"
    >
      <div className="flex flex-col gap-8 max-w-5xl">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit">
          <Sparkles size={16} className="text-indigo-400" />
          <span className="text-sm font-medium tracking-wide">Prithika Kannan • Portfolio</span>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-balance">
            ENGINEER<span className="text-zinc-600">ING</span> <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">EXCELLENCE</span>
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed text-balance">
            I craft data-driven experiences grounded in proven engineering traditions. 
            Specializing in distributed systems, full-stack development, and integrating machine learning models.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
          <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg bg-white text-zinc-950 hover:bg-zinc-200">
            <Link to="/projects">
              Explore Work <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-white/20 hover:bg-white/10 hover:text-white">
            <Link to="/contact">
              Get in touch
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="bento-grid mt-24"
      >
        <div className="bento-item group bg-gradient-to-br from-white/[0.05] to-transparent">
          <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-indigo-500/20 text-indigo-300">
            <Globe size={24} strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Full-Stack Architecture</h3>
          <p className="text-zinc-400 leading-relaxed mt-auto">
            Building robust web applications using React and Python. Emphasizing seamless user experiences and scalable server-side design.
          </p>
        </div>

        <div className="bento-item group bg-gradient-to-br from-white/[0.05] to-transparent">
          <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-purple-500/20 text-purple-300">
            <Server size={24} strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Data-Driven Systems</h3>
          <p className="text-zinc-400 leading-relaxed mt-auto">
            Designing highly available backend architectures and optimizing databases to handle complex queries efficiently.
          </p>
        </div>

        <div className="bento-item group bg-gradient-to-br from-white/[0.05] to-transparent">
          <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-pink-500/20 text-pink-300">
            <BrainCircuit size={24} strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Applied ML</h3>
          <p className="text-zinc-400 leading-relaxed mt-auto">
            Engineering predictive models using Scikit-Learn. Bridging the gap between data science research and user-facing features.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}