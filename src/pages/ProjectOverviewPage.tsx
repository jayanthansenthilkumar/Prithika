import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Terminal, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectOverviewPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] pt-24 text-center">
        <h1 className="text-3xl font-black font-heading uppercase text-foreground mb-4">Project Not Found</h1>
        <p className="text-foreground font-mono font-bold text-sm mb-6">The project you are looking for does not exist.</p>
        <Link to="/projects">
          <Button className="bg-primary text-foreground border-[3px] border-foreground rounded-none shadow-[4px_4px_0px_0px_var(--color-foreground)] font-bold uppercase font-mono">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-14 bg-background">
      <Helmet>
        <title>{project.title} | Case Study - Prithika Kannan</title>
        <meta name="description" content={`Detailed case study for ${project.title}. Read about the problem, the solution, and the tech stack including ${project.techStack.join(', ')}.`} />
        <meta name="keywords" content={`${project.title}, ${project.techStack.join(', ')}, Software Engineering Case Study, Prithika Kannan`} />
      </Helmet>
      
      {/* Header Section */}
      <section className="pt-16 pb-12 bg-background border-b-[3px] border-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-sm font-mono font-bold text-foreground hover:bg-primary px-3 py-1 mb-8 border-[3px] border-transparent hover:border-foreground rounded-none transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border-[3px] border-foreground rounded-none bg-primary text-xs font-mono font-bold uppercase text-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:-translate-y-1 hover:-translate-x-1 transition-transform">
            <Terminal className="w-4 h-4" />
            <span>prithika/projects/{project.id}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tighter font-heading uppercase">
            {project.title}
          </h1>
          
          <p className="text-lg text-foreground font-mono font-bold leading-relaxed mb-8 max-w-2xl border-[3px] border-foreground rounded-none bg-background p-4 shadow-brutal">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-background text-foreground font-mono font-bold uppercase text-xs rounded-none border-[3px] border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                {tech}
              </span>
            ))}
          </div>
          
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary border-[3px] border-foreground text-foreground rounded-none h-12 px-6 font-mono font-bold uppercase text-sm flex items-center gap-2 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
              View Live Source <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Problem */}
          <div className="bg-background p-8 rounded-none border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)]">
            <div className="flex items-center gap-3 mb-6 border-b-[3px] border-foreground pb-4">
              <div className="p-2 border-[3px] border-foreground rounded-none bg-primary text-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-black text-foreground font-heading uppercase">Problem Identified</h2>
            </div>
            <p className="text-foreground font-mono font-bold text-sm leading-loose">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-background p-8 rounded-none border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)]">
            <div className="flex items-center gap-3 mb-6 border-b-[3px] border-foreground pb-4">
              <div className="p-2 border-[3px] border-foreground rounded-none bg-primary text-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-black text-foreground font-heading uppercase">Solution Given</h2>
            </div>
            <p className="text-foreground font-mono font-bold text-sm leading-loose">
              {project.solution}
            </p>
          </div>

          {/* Metrics */}
          <div className="bg-background p-8 rounded-none border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-black font-heading uppercase mb-2">Key Outcome</h3>
              <p className="font-mono text-sm font-bold text-foreground">The quantifiable impact of the engineering solution.</p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="text-5xl font-black font-heading mb-2 bg-primary inline-block px-4 py-1 border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-transform">{project.metric}</div>
              <div className="font-mono font-bold text-xs uppercase tracking-wider text-foreground block mt-2">{project.metricLabel}</div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
