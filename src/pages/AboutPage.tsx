import { Helmet } from "react-helmet-async";
import { Terminal, GraduationCap, Briefcase } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <motion.div 
      className="max-w-4xl pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>About Prithika Kannan | Background & Education</title>
      </Helmet>
      
      <motion.div variants={itemVariants} className="flex items-center gap-3 text-[var(--text-tertiary)] mb-8 bg-[var(--bg-card)] w-fit px-4 py-2 rounded-full border border-[var(--border-subtle)] shadow-sm">
        <Terminal size={16} />
        <span className="text-sm font-mono tracking-tight">~/prithika/about</span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-10 tracking-tight">
        Background & Philosophy
      </motion.h1>
      
      <motion.div variants={itemVariants} className="flex flex-col gap-6 text-lg text-[var(--text-secondary)] leading-relaxed font-light">
        <p>
          I am a product-focused Software Engineer based in India, crafting data-driven experiences grounded in proven engineering traditions. 
          My technical journey began with an intense curiosity about how scalable systems could be built from the ground up to support thousands of concurrent operations seamlessly.
        </p>
        <p>
          My approach bridges analytical precision with creative problem-solving. Whether I am architecting a distributed backend system in Python and Flask, or designing an intuitive, modern frontend interface using React, I aim to build scalable, client-centric applications that align seamlessly with complex AI-driven transformation goals.
          I firmly believe that excellent code is not just functional, but highly readable, maintainable, and heavily tested. 
        </p>
        <p>
          Over the past few years, I have actively expanded my expertise into Machine Learning, recognizing that the future of software lies at the intersection of robust web infrastructure and intelligent data processing. I build systems that don't just store data, but learn from it.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-20 pt-16 border-t border-[var(--border-subtle)]">
        <h2 className="font-heading text-3xl font-semibold text-[var(--text-primary)] mb-10 tracking-tight">Experience & Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col gap-4 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-[var(--border-hover)]"
          >
            <div className="bg-[var(--accent)]/10 text-[var(--accent)] w-12 h-12 rounded-xl flex items-center justify-center mb-2">
              <Briefcase size={24} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">RSUN Technologies</h3>
            <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider">Software Engineer Intern • Present</div>
            <p className="text-[var(--text-secondary)] mt-2 leading-relaxed">
              Contributing directly to core full-stack application development. 
              My primary responsibilities include optimizing existing backend data pipelines, minimizing database query latency, and actively participating in high-level architectural decisions to enhance overall system scalability. 
              I work closely with senior engineers to implement robust RESTful APIs and transition legacy components into modern, maintainable codebases.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col gap-4 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-[var(--border-hover)]"
          >
            <div className="bg-[var(--accent)]/10 text-[var(--accent)] w-12 h-12 rounded-xl flex items-center justify-center mb-2">
              <GraduationCap size={24} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">M. Kumarasamy College of Eng.</h3>
            <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider">Bachelor of Engineering • Current</div>
            <p className="text-[var(--text-secondary)] mt-2 leading-relaxed">
              Building a rigorous foundation in computer science principles, advanced data structures, complex algorithms, and agile software engineering methodologies. 
              My coursework places heavy emphasis on systems architecture, mathematical logic for machine learning, and hands-on laboratory work where theoretical concepts are applied to real-world problems.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}
