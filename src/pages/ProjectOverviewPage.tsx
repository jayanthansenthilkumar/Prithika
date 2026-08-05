import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Terminal, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProjectOverviewPage() {
  const { id } = useParams<{id: string;}>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div>
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>);

  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}>

      
      <Helmet>
        <title>{project.title} | Case Study - Prithika Kannan</title>
        <meta name="description" content={`Detailed case study for ${project.title}. Read about the problem, the solution, and the tech stack.`} />
      </Helmet>
      
      {/* Header Section */}
      <section>
        <Link
          to="/projects">

          
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
        
        <div>
          <Terminal size={16} />
          <span>prithika/projects/{project.id}</span>
        </div>
        
        <h1>
          {project.title}
        </h1>
        
        <p>
          {project.description}
        </p>

        <div>
          {project.techStack.map((tech) =>
          <span key={tech}>
              {tech}
            </span>
          )}
        </div>
        
        <Button asChild size="lg">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Source Code <ExternalLink size={18} />
          </a>
        </Button>
      </section>

      {/* Content Section */}
      <section>
        <div>
          
          {/* Problem */}
          <div>
            <div>
              <div>
                <AlertCircle size={24} />
              </div>
              <h2>The Challenge</h2>
            </div>
            <p>
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div>
              <div>
                <CheckCircle2 size={24} />
              </div>
              <h2>The Solution</h2>
            </div>
            <p>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div>
          <div>
            <h3>Key Outcome</h3>
            <p>The quantifiable impact of this architecture.</p>
          </div>
          <div>
            <div>
              {project.metric}
            </div>
            <div>
              {project.metricLabel}
            </div>
          </div>
        </div>
      </section>
    </motion.div>);

}