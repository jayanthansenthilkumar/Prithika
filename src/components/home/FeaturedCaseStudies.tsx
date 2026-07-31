import { ArrowRight, CodeSquare } from "lucide-react";

import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export function FeaturedCaseStudies() {
  return (
    <section id="projects" className="py-24 border-b-[3px] border-foreground bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border-[3px] border-foreground rounded-md bg-background shadow-[4px_4px_0px_0px_var(--color-foreground)]">
                <CodeSquare className="w-6 h-6 text-foreground" />
              </div>
              <h2 className="text-4xl font-black text-foreground tracking-tighter font-heading uppercase">Featured Projects</h2>
            </div>
            <p className="text-foreground text-sm font-mono font-bold leading-relaxed border-l-[3px] border-foreground pl-4">
              Showcasing practical applications of full-stack engineering, machine learning, and database optimization.
            </p>
          </div>
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button className="hidden md:inline-flex font-mono text-sm border-[3px] border-foreground rounded-md bg-background text-foreground shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg px-6 py-3 items-center font-bold uppercase transition-all">
              View GitHub <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const cardColors = ['bg-brutal-pink', 'bg-brutal-green', 'bg-brutal-blue'];
            const bgColor = cardColors[index % cardColors.length];
            return (
              <div
                key={project.title}
                className={`relative flex flex-col ${bgColor} border-[3px] border-foreground shadow-brutal-lg rounded-xl h-full group hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_var(--color-foreground)] transition-all`}
              >
                
                <div className="relative z-10 p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-foreground uppercase tracking-wider mb-6 font-heading bg-background inline-block px-2 border-[3px] border-foreground rounded-md self-start shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground text-sm font-mono font-bold leading-relaxed flex-grow mb-10 whitespace-pre-line bg-background p-4 border-[3px] border-foreground rounded-md shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                    "{project.description}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t-[3px] border-foreground">
                    <div className="w-12 h-12 bg-background border-[3px] border-foreground rounded-md text-foreground flex items-center justify-center font-black font-heading text-lg shrink-0 shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                      PK
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-foreground font-heading uppercase leading-tight bg-background px-1 border-[3px] border-foreground rounded-sm mb-1 inline-block self-start">Prithika Kannan</span>
                      <span className="text-xs font-mono font-bold text-foreground leading-tight bg-primary px-1 border-[3px] border-foreground rounded-sm inline-block self-start">SOFTWARE ENGINEER</span>
                    </div>
                  </div>

                  {/* Hover overlay links */}
                  <div className="absolute top-6 right-6 flex gap-2">
                    <Link to={`/projects/${project.id}`} className="p-2 bg-background border-[3px] border-foreground rounded-md text-foreground hover:bg-primary transition-colors shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none" title="Overview">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border-[3px] border-foreground rounded-md text-foreground hover:bg-primary transition-colors shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none" title="Source Code">
                      <CodeSquare className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 md:hidden">
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button className="w-full flex items-center justify-center font-mono text-sm border-[3px] border-foreground rounded-md bg-background shadow-brutal px-6 py-3 font-bold uppercase hover:-translate-y-1 hover:shadow-brutal-lg transition-all text-foreground">
              View GitHub <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
