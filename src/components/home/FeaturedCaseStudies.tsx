import { ArrowRight, CodeSquare, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FeaturedCaseStudies() {
  // Take only the first 3 projects for the featured section
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="py-40 relative w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit mb-6">
            <CodeSquare size={16} className="text-indigo-500 dark:text-indigo-400" />
            <span className="text-sm font-medium tracking-wide text-zinc-800 dark:text-zinc-200">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 dark:text-white transition-colors">Case Studies</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-lg md:text-xl transition-colors">
            Showcasing practical applications of full-stack engineering, machine learning, and database optimization.
          </p>
        </div>
        <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="rounded-full px-6 h-12">
            View GitHub <ArrowRight className="ml-2" size={16} />
          </Button>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {featured.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group"
          >
            {/* Image Container */}
            <div className="aspect-video w-full bg-zinc-200 dark:bg-zinc-900 relative border-b border-black/5 dark:border-white/10 shrink-0 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-300 dark:from-indigo-500 via-transparent to-transparent group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-700 font-mono text-xl font-bold opacity-30 px-4 text-center">
                {project.title.toUpperCase()} // PREVIEW
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-zinc-950 dark:text-white transition-colors line-clamp-1" title={project.title}>
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-6 transition-colors line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack?.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-zinc-700 dark:text-zinc-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                  {project.techStack && project.techStack.length > 3 && (
                    <span className="text-xs font-mono px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-zinc-500 transition-colors">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-black/5 dark:border-white/10 transition-colors mt-auto">
                <Button asChild className="rounded-full px-6 flex-1">
                  <Link to={`/projects/${project.id}`}>
                    View Case Study
                  </Link>
                </Button>
                {project.link && (
                  <Button asChild variant="outline" size="icon" className="rounded-full shrink-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" title="Source Code">
                      <ExternalLink size={18} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-32 flex justify-center">
        <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg">
          <Link to="/projects">
            View All Projects <ArrowRight className="ml-2" size={20} />
          </Link>
        </Button>
      </div>
    </section>
  );
}