import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Terminal, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProjectOverviewPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center gap-6">
        <h1 className="font-heading text-4xl font-bold">Project Not Found</h1>
        <p className="text-[var(--text-secondary)]">The project you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto pb-20"
    >
      <Helmet>
        <title>{project.title} | Case Study - Prithika Kannan</title>
        <meta name="description" content={`Detailed case study for ${project.title}. Read about the problem, the solution, and the tech stack.`} />
      </Helmet>
      
      {/* Header Section */}
      <section className="mb-16">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        
        <div className="flex items-center gap-3 text-[var(--text-tertiary)] mb-6 bg-[var(--bg-card)] w-fit px-4 py-2 rounded-full border border-[var(--border-subtle)] shadow-sm">
          <Terminal size={16} />
          <span className="text-sm font-mono tracking-tight">prithika/projects/{project.id}</span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1]">
          {project.title}
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-light mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-4 py-1.5 bg-[var(--bg-hover)] text-[var(--text-primary)] rounded-full text-sm font-medium border border-[var(--border-subtle)]">
              {tech}
            </span>
          ))}
        </div>
        
        <Button asChild size="lg" className="rounded-full shadow-lg shadow-[var(--accent)]/20">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            View Source Code <ExternalLink size={18} />
          </a>
        </Button>
      </section>

      {/* Content Section */}
      <section className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Problem */}
          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
            <div className="flex items-center gap-4 mb-6 text-[var(--accent)]">
              <div className="bg-[var(--accent)]/10 p-3 rounded-2xl">
                <AlertCircle size={24} />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">The Challenge</h2>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
            <div className="flex items-center gap-4 mb-6 text-[#10b981]">
              <div className="bg-[#10b981]/10 p-3 rounded-2xl">
                <CheckCircle2 size={24} />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">The Solution</h2>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-hover)] border border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-2">Key Outcome</h3>
            <p className="text-[var(--text-secondary)]">The quantifiable impact of this architecture.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="font-heading text-5xl md:text-6xl font-black text-[var(--accent)] mb-2 tracking-tighter">
              {project.metric}
            </div>
            <div className="text-lg font-medium text-[var(--text-primary)]">
              {project.metricLabel}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
