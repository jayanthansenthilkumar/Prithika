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
        <title>About | Prithika Kannan</title>
      </Helmet>
      
      <div className="mb-12">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-6">
          <Terminal size={16} className="text-indigo-400" />
          <span className="text-sm font-medium tracking-wide">~/about-me</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
          Architecting <span className="text-zinc-500">solutions</span> for<br />complex <span className="text-zinc-300">problems.</span>
        </motion.h1>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
        
        {/* Main Bio - Large */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-center md:col-span-3 md:row-span-1">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code2 className="text-indigo-400" /> Philosophy
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed text-balance">
            I bridge analytical precision with creative problem-solving. Whether I am architecting a distributed backend system in Python and Flask, or designing an intuitive frontend interface using React, I aim to build scalable, client-centric applications. Excellent code is not just functional, but highly readable, maintainable, and heavily tested.
          </p>
        </motion.div>

        {/* Location - Small */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col justify-between md:col-span-1 md:row-span-1 bg-gradient-to-br from-indigo-900/20 to-transparent">
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
            <MapPin className="text-indigo-400" />
          </div>
          <div>
            <p className="text-sm text-zinc-500 font-medium mb-1">Based in</p>
            <p className="text-xl font-bold">India</p>
          </div>
        </motion.div>

        {/* Experience - Tall */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col md:col-span-2 md:row-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
              <Briefcase className="text-purple-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="flex-1 flex flex-col gap-6">
            <div className="group relative pl-6 border-l-2 border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-1">Software Engineer Intern</h3>
              <div className="flex items-center gap-2 text-sm text-purple-300 font-medium mb-3">
                <span>RSUN Technologies</span>
                <span>•</span>
                <span>Present</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Optimizing backend data pipelines, minimizing database query latency, and actively participating in high-level architectural decisions to enhance overall system scalability. Transitioning legacy components into modern codebases.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education - Tall */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col md:col-span-2 md:row-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
              <GraduationCap className="text-pink-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="group relative pl-6 border-l-2 border-white/10 hover:border-pink-500/50 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-pink-500 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-1">Bachelor of Engineering</h3>
              <div className="flex items-center gap-2 text-sm text-pink-300 font-medium mb-3">
                <span>M. Kumarasamy College of Eng.</span>
                <span>•</span>
                <span>Current</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Rigorous foundation in computer science principles, advanced data structures, complex algorithms, and agile methodologies. Heavy emphasis on systems architecture and mathematical logic for machine learning.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Future/ML - Medium */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 md:col-span-4 md:row-span-1 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-transparent via-white/5 to-transparent">
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl glass flex items-center justify-center bg-white/5">
            <Coffee className="text-zinc-300" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">The Future</h3>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              Actively expanding expertise into Machine Learning, recognizing that the future of software lies at the intersection of robust web infrastructure and intelligent data processing. I build systems that don't just store data, but learn from it.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}