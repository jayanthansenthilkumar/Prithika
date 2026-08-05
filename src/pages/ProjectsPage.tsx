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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ProjectsPage() {
  return (
    <motion.div

      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      
      <Helmet>
        <title>Portfolio Projects | Prithika Kannan</title>
      </Helmet>
      
      <motion.div variants={itemVariants}>
        <Terminal size={16} />
        <span>~/prithika/projects</span>
      </motion.div>

      <motion.h1 variants={itemVariants}>
        Projects & Case Studies
      </motion.h1>
      
      <motion.p variants={itemVariants}>
        Here is a comprehensive overview of my recent software engineering and machine learning projects. 
        Each case study demonstrates my ability to identify complex problems, architect scalable solutions, and deliver tangible performance improvements.
      </motion.p>

      <motion.div variants={containerVariants}>
        {projects.map((project) =>
        <motion.div
          key={project.id}
          variants={itemVariants}>

          
            <div>
              <h2>
                {project.title}
              </h2>
              <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"

              title="View Source on GitHub">
              
                <GitBranch size={24} />
              </a>
            </div>
            
            <p>
              {project.description}
            </p>
            
            <div>
              {project.techStack.map((tech, idx) =>
            <span
              key={idx}>

              
                  {tech}
                </span>
            )}
            </div>

            <div>
              <div>
                <div>
                  <span>Outcome:</span>
                  {project.metric} {project.metricLabel}
                </div>
              </div>
              <Button asChild variant="default">
                <Link to={`/projects/${project.id}`}>
                  Read Case Study <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>);

}