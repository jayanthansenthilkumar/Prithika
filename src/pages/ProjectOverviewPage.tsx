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
    <div >
        <h1 >Project Not Found</h1>
        <p >The project you are looking for does not exist.</p>
        <Link to="/projects">
          <Button >Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div >
      <Helmet>
        <title>{project.title} | Case Study - Prithika Kannan</title>
        <meta name="description" content={`Detailed case study for ${project.title}. Read about the problem, the solution, and the tech stack including ${project.techStack.join(', ')}.`} />
        <meta name="keywords" content={`${project.title}, ${project.techStack.join(', ')}, Software Engineering Case Study, Prithika Kannan`} />
      </Helmet>
      
      {/* Header Section */}
      <section >
        <div >
          <Link to="/projects" >
            <ArrowLeft  />
            Back to Projects
          </Link>
          
          <div >
            <Terminal  />
            <span>prithika/projects/{project.id}</span>
          </div>
          
          <h1 >
            {project.title}
          </h1>
          
          <p >
            {project.description}
          </p>

          <div >
            {project.techStack.map((tech) => (
              <span key={tech} >
                {tech}
              </span>
            ))}
          </div>
          
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button >
              View Live Source <ExternalLink  />
            </Button>
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section >
        <div >
          
          {/* Problem */}
          <div >
            <div >
              <div >
                <AlertCircle  />
              </div>
              <h2 >Problem Identified</h2>
            </div>
            <p >
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div >
            <div >
              <div >
                <CheckCircle2  />
              </div>
              <h2 >Solution Given</h2>
            </div>
            <p >
              {project.solution}
            </p>
          </div>

          {/* Metrics */}
          <div >
            <div>
              <h3 >Key Outcome</h3>
              <p >The quantifiable impact of the engineering solution.</p>
            </div>
            <div >
              <div >{project.metric}</div>
              <div >{project.metricLabel}</div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
