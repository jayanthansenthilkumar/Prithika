import { ArrowRight, CodeSquare } from "lucide-react";

import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export function FeaturedCaseStudies() {
  return (
    <section id="projects">
      <div>
        <div>
          <div>
            <div>
              <div>
                <CodeSquare />
              </div>
              <h2>Featured Projects</h2>
            </div>
            <p>
              Showcasing practical applications of full-stack engineering, machine learning, and database optimization.
            </p>
          </div>
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button>
              View GitHub <ArrowRight />
            </button>
          </a>
        </div>

        <div>
          {projects.map((project) => {
            return (
              <div
                key={project.title}>

                
                
                <div>
                  <h3>
                    {project.title}
                  </h3>
                  
                  <p>
                    "{project.description}"
                  </p>
                  
                  <div>
                    <div>
                      PK
                    </div>
                    <div>
                      <span>Prithika Kannan</span>
                      <span>SOFTWARE ENGINEER</span>
                    </div>
                  </div>

                  {/* Hover overlay links */}
                  <div>
                    <Link to={`/projects/${project.id}`} title="Overview">
                      <ArrowRight />
                    </Link>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" title="Source Code">
                      <CodeSquare />
                    </a>
                  </div>
                </div>
              </div>);

          })}
        </div>
        
        <div>
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button>
              View GitHub <ArrowRight />
            </button>
          </a>
        </div>
      </div>
    </section>);

}