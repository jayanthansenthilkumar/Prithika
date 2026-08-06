import { motion, Variants } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
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

export function ExperienceHighlight() {
  return (
    <section className="py-24 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit mb-4">
              <Briefcase size={16} className="text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">Professional Trajectory</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white transition-colors">
              Proven <span className="text-amber-500">Impact.</span>
            </motion.h2>
          </div>
          <motion.div variants={itemVariants}>
            <Link to="/resume" className="inline-flex items-center group text-lg font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors">
              View full resume 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-amber-500/5 to-transparent border border-black/5 dark:border-white/10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/20">
                  <span className="font-bold text-xl text-amber-600 dark:text-amber-400">RS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white transition-colors">Software Engineer</h3>
                  <p className="text-amber-600 dark:text-amber-400 font-medium">RSUN Technologies</p>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed transition-colors">
                Engineered a scalable, distributed backend infrastructure leveraging PHP and SQL. Designed robust RESTful APIs to facilitate seamless data communication, resulting in a remarkable <strong className="text-zinc-900 dark:text-white transition-colors">30% reduction in backend latency</strong>.
              </p>
            </div>
            
            <div className="hidden md:block w-px bg-black/10 dark:bg-white/10 transition-colors" />
            
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/20">
                  <span className="font-bold text-xl text-amber-600 dark:text-amber-400">MK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white transition-colors">B.Tech IT</h3>
                  <p className="text-amber-600 dark:text-amber-400 font-medium">M. Kumarasamy College</p>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed transition-colors">
                Developing a strong foundation in modern software engineering principles, advanced data structures, and system architecture. Currently maintaining a CGPA of <strong className="text-zinc-900 dark:text-white transition-colors">7.900</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
