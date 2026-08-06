import { motion, Variants } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function AboutTeaser() {
  return (
    <section className="py-24 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit">
              <User size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">The Architect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance text-zinc-950 dark:text-white transition-colors">
              Bridging analytical focus with <span className="text-indigo-500">creative problem solving.</span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-indigo-500/5 to-transparent border border-black/5 dark:border-white/10">
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed text-balance mb-8">
              I am a product-focused Software Engineer who thrives on architecting robust backend systems and designing intuitive frontend interfaces. Whether I'm optimizing data pipelines or mapping out seamless user journeys, my goal is to build applications that deliver exceptional value.
            </p>
            <Link to="/about" className="inline-flex items-center group text-lg font-bold text-indigo-600 dark:text-indigo-400 w-fit hover:text-indigo-500 transition-colors">
              Read full narrative 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
