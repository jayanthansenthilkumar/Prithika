import { ArrowRight, CodeSquare } from "lucide-react";

import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export function FeaturedCaseStudies() {
  return (
    <section id="projects" className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <CodeSquare className="w-5 h-5 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight font-serif italic">Featured Projects</h2>
            </div>
            <p className="text-gray-600 text-sm font-mono">
              Showcasing practical applications of full-stack engineering, machine learning, and database optimization.
            </p>
          </div>
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button className="hidden md:inline-flex rounded-sm font-mono text-xs border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 px-4 py-2 items-center">
              View GitHub <ArrowRight className="ml-2 w-3 h-3" />
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-white hover:bg-gray-50 transition-colors h-full"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Project</span>
                <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">{project.tech}</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-end gap-3 mb-6">
                  <div className="text-4xl font-bold text-gray-900 font-serif italic">{project.metric}</div>
                  <div className="text-xs font-mono text-gray-500 uppercase mb-1.5">{project.metricLabel}</div>
                </div>
                
                <h3 className="text-sm font-bold text-gray-900 font-serif mb-3">{project.title}</h3>
                <p className="text-gray-600 text-xs font-mono leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-row gap-2 mt-auto pt-4 border-t border-gray-100">
                  <Link to={`/projects/${project.id}`} className="flex-1">
                    <button className="w-full flex items-center justify-center gap-1.5 rounded-sm font-mono text-xs bg-blue-600 text-white hover:bg-blue-700 px-2 py-2 shadow-sm transition-colors border border-blue-700 whitespace-nowrap">
                      Overview <ArrowRight className="w-3 h-3 shrink-0" />
                    </button>
                  </Link>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full flex items-center justify-center gap-1.5 rounded-sm font-mono text-xs text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 px-2 py-2 transition-colors whitespace-nowrap">
                      Source <CodeSquare className="w-3 h-3 text-gray-400 shrink-0" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button className="w-full flex items-center justify-center rounded-sm font-mono text-xs border border-gray-300 bg-white shadow-sm px-4 py-2">
              View GitHub <ArrowRight className="ml-2 w-3 h-3" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
