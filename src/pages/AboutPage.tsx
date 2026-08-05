import { Helmet } from "react-helmet-async";
import { Terminal, GraduationCap, Briefcase, MapPin, Coffee, Code2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-6xl mx-auto pt-10 pb-20"
    >
      <Helmet>
        <title>About Prithika Kannan | Background & Philosophy</title>
        <meta name="description" content="Learn about Prithika Kannan's journey as a Software Engineer, her design philosophy, and her technical expertise." />
        <meta property="og:title" content="About Prithika Kannan | Background & Philosophy" />
        <meta property="og:description" content="Learn about Prithika Kannan's journey as a Software Engineer, her design philosophy, and her technical expertise." />
      </Helmet>
      
      <div className="mb-12">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit mb-6">
          <Terminal size={16} className="text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">~/about-me</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-zinc-950 dark:text-white transition-colors">
          Architecting <span className="text-zinc-500 dark:text-zinc-500">solutions</span> for<br />complex <span className="text-zinc-700 dark:text-zinc-300">problems.</span>
        </motion.h1>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
        
        {/* Main Bio - Large */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-center md:col-span-3 md:row-span-1">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-zinc-950 dark:text-white transition-colors">
            <Code2 className="text-indigo-600 dark:text-indigo-400" /> Philosophy
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed text-balance transition-colors">
            I bridge analytical precision with creative problem-solving. Whether I am architecting a distributed backend system in Python and Flask, or designing an intuitive frontend interface using React, I aim to build scalable, client-centric applications. Excellent code is not just functional, but highly readable, maintainable, and heavily tested.
          </p>
        </motion.div>

        {/* Location - Small */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col justify-between md:col-span-1 md:row-span-1 bg-gradient-to-br from-indigo-100/40 to-transparent dark:from-indigo-900/20 dark:to-transparent transition-colors">
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-black/5 dark:border-white/10">
            <MapPin className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-500 font-medium mb-1 transition-colors">Based in</p>
            <p className="text-xl font-bold text-zinc-950 dark:text-white transition-colors">India</p>
          </div>
        </motion.div>

        {/* Experience - Tall */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col md:col-span-2 md:row-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-black/5 dark:border-white/10">
              <Briefcase className="text-purple-600 dark:text-purple-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white transition-colors">Experience</h2>
          </div>
          
          <div className="flex-1 flex flex-col gap-6">
            <div className="group relative pl-6 border-l-2 border-black/10 dark:border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-purple-500 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-1 transition-colors">Software Engineer Intern</h3>
              <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300 font-medium mb-3 transition-colors">
                <span>RSUN Technologies</span>
                <span className="text-zinc-400">•</span>
                <span>Present</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors">
                Optimizing backend data pipelines, minimizing database query latency, and actively participating in high-level architectural decisions to enhance overall system scalability. Transitioning legacy components into modern codebases.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education - Tall */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col md:col-span-2 md:row-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-black/5 dark:border-white/10">
              <GraduationCap className="text-pink-600 dark:text-pink-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white transition-colors">Education</h2>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="group relative pl-6 border-l-2 border-black/10 dark:border-white/10 hover:border-pink-500/50 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-pink-500 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-1 transition-colors">Bachelor of Engineering</h3>
              <div className="flex items-center gap-2 text-sm text-pink-700 dark:text-pink-300 font-medium mb-3 transition-colors">
                <span>M. Kumarasamy College of Eng.</span>
                <span className="text-zinc-400">•</span>
                <span>Current</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors">
                Rigorous foundation in computer science principles, advanced data structures, complex algorithms, and agile methodologies. Heavy emphasis on systems architecture and mathematical logic for machine learning.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Future/ML - Medium */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 md:col-span-4 md:row-span-1 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-transparent via-black/5 to-transparent dark:via-white/5 transition-colors">
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl glass flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
            <Coffee className="text-zinc-700 dark:text-zinc-300 transition-colors" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-zinc-950 dark:text-white transition-colors">The Future</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-3xl transition-colors">
              Actively expanding expertise into Machine Learning, recognizing that the future of software lies at the intersection of robust web infrastructure and intelligent data processing. I build systems that don't just store data, but learn from it.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}