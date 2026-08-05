import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Terminal, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ProjectOverviewPage() {
  const { id } = useParams<{id: string;}>();
  
  // Highly robust filtering and memoization to prevent hydration mismatches and ensure instant population
  const project = useMemo(() => {
    if (!id) return null;
    const sanitizedId = id.toLowerCase().trim();
    return projects.find((p) => p.id === sanitizedId) || null;
  }, [id]);

  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 w-full"
      >
        <div className="glass-card p-12 rounded-3xl max-w-lg w-full relative overflow-hidden border border-red-500/10 dark:border-red-500/20">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/40 via-transparent to-transparent" />
          <AlertCircle size={48} className="text-red-500 dark:text-red-400 mx-auto mb-6 opacity-80" />
          <h1 className="text-3xl font-bold mb-4 text-zinc-950 dark:text-white relative z-10">Project Not Found</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg relative z-10">The case study you are looking for does not exist or has been moved.</p>
          <Button asChild size="lg" className="rounded-full px-8 relative z-10">
            <Link to="/projects">
              <ArrowLeft size={16} className="mr-2" /> Return to Projects
            </Link>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto pt-6 pb-24">
      <Helmet>
        <title>{project.title} | Case Study - Prithika Kannan</title>
        <meta name="description" content={`Detailed case study for ${project.title}. Read about the problem, the solution, and the tech stack.`} />
        <meta property="og:title" content={`${project.title} | Prithika Kannan`} />
        <meta property="og:description" content={`Detailed case study for ${project.title}. Read about the problem, the solution, and the tech stack.`} />
      </Helmet>
      
      {/* Header Section */}
      <section className="mb-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mb-10 font-medium"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit mb-6">
          <Terminal size={16} className="text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">prithika/projects/{project.id}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-4 text-zinc-950 dark:text-white transition-colors">
          {project.title}
        </h1>
        {project.subtitle && (
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-800 dark:text-zinc-200 mb-6 transition-colors tracking-tight">
            {project.subtitle}
          </h2>
        )}
        
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 text-balance transition-colors">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-zinc-700 dark:text-zinc-300 text-sm font-mono transition-colors">
              {tech}
            </span>
          ))}
        </div>
        
        {project.link && (
          <Button asChild size="lg" className="rounded-full px-8">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Source Code <ExternalLink size={18} className="ml-2" />
            </a>
          </Button>
        )}
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Problem */}
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center bg-red-500/10">
                <AlertCircle size={24} className="text-red-500 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-950 dark:text-white transition-colors">The Challenge</h2>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed whitespace-pre-wrap transition-colors">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center bg-emerald-500/10">
                <CheckCircle2 size={24} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-950 dark:text-white transition-colors">The Solution</h2>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed whitespace-pre-wrap transition-colors">
              {project.solution}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center bg-blue-500/10">
                  <Terminal size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-zinc-950 dark:text-white transition-colors">Key Features</h2>
              </div>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Metrics Sidebar */}
        <div className="lg:col-span-1">
          <div className="glass-card rounded-3xl p-8 sticky top-24 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/20 dark:to-purple-900/20 transition-colors">
            <h3 className="text-xl font-bold mb-2 text-zinc-950 dark:text-white transition-colors">Key Outcome</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 transition-colors">The quantifiable impact of this architecture.</p>
            
            <div className="flex flex-col gap-2">
              <div className="text-5xl md:text-6xl font-bold text-zinc-950 dark:text-white tracking-tighter transition-colors">
                {project.metric}
              </div>
              <div className="text-lg text-indigo-700 dark:text-indigo-300 font-medium leading-snug text-balance transition-colors">
                {project.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}