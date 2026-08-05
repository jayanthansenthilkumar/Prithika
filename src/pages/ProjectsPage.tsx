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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function ProjectsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-6xl mx-auto pt-10 pb-24"
    >
      <Helmet>
        <title>Case Studies & Work | Prithika Kannan</title>
        <meta name="description" content="Explore Prithika Kannan's recent software engineering case studies, featuring AI trip planners, dynamic interfaces, and more." />
        <meta property="og:title" content="Case Studies & Work | Prithika Kannan" />
        <meta property="og:description" content="Explore Prithika Kannan's recent software engineering case studies, featuring AI trip planners, dynamic interfaces, and more." />
      </Helmet>
      
      <div className="mb-16">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit mb-6">
          <Terminal size={16} className="text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">~/projects</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6 text-zinc-950 dark:text-white transition-colors">
          Case Studies & <span className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Work.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed text-balance max-w-3xl transition-colors">
          Here is a comprehensive overview of my recent software engineering and machine learning projects. Each case study demonstrates my ability to identify complex problems, architect scalable solutions, and deliver tangible performance improvements.
        </motion.p>
      </div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className={`glass-card rounded-3xl p-8 flex flex-col ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}`}
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-3xl font-bold text-zinc-950 dark:text-white transition-colors">{project.title}</h2>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/5 dark:border-white/10"
                  title="View Source on GitHub"
                >
                  <GitBranch size={20} className="text-zinc-600 dark:text-zinc-400" />
                </a>
              )}
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8 flex-1 transition-colors">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-black/5 dark:border-white/10 transition-colors">
              <div>
                <div className="text-sm text-zinc-500 font-medium mb-1">Outcome</div>
                <div className="font-bold text-lg text-zinc-950 dark:text-white transition-colors">
                  <span className="text-purple-600 dark:text-purple-400">{project.metric}</span> {project.metricLabel}
                </div>
              </div>
              <Button asChild className="rounded-full px-6 shrink-0">
                <Link to={`/projects/${project.id}`}>
                  Read Case Study <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}