import { Helmet } from "react-helmet-async";
import { Terminal, GitBranch, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ProjectsPage() {
  return (
    <motion.div 
      className="max-w-5xl pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Portfolio Projects | Prithika Kannan</title>
      </Helmet>
      
      <motion.div variants={itemVariants} className="flex items-center gap-3 text-[var(--text-tertiary)] mb-8 bg-[var(--bg-card)] w-fit px-4 py-2 rounded-full border border-[var(--border-subtle)] shadow-sm">
        <Terminal size={16} />
        <span className="text-sm font-mono tracking-tight">~/prithika/projects</span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
        Projects & Case Studies
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-lg text-[var(--text-secondary)] leading-relaxed font-light mb-16 max-w-3xl">
        Here is a comprehensive overview of my recent software engineering and machine learning projects. 
        Each case study demonstrates my ability to identify complex problems, architect scalable solutions, and deliver tangible performance improvements.
      </motion.p>

      <motion.div variants={containerVariants} className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            variants={itemVariants}
            className="group flex flex-col p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-[var(--border-hover)]"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
                {project.title}
              </h2>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors p-2 rounded-xl hover:bg-[var(--bg-hover)]"
                title="View Source on GitHub"
              >
                <GitBranch size={24} />
              </a>
            </div>
            
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-sm text-[var(--text-tertiary)]">
                  <span className="font-semibold text-[var(--text-primary)] block">Outcome:</span>
                  {project.metric} {project.metricLabel}
                </div>
              </div>
              <Button asChild variant="default" className="rounded-full rounded-tr-lg">
                <Link to={`/projects/${project.id}`} className="flex items-center gap-2">
                  Read Case Study <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
