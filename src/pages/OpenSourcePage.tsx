import { Helmet } from "react-helmet-async";
import { Terminal, GitPullRequest, GitFork, Star, GitBranch } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

export default function OpenSourcePage() {
  const contributions = [
  {
    repo: "prithika/machine-learning-toolkit",
    description: "A robust collection of utility scripts and algorithms engineered for preprocessing massive datasets and training standard predictive models quickly. Built to reduce boilerplate in ML workflows.",
    stars: 12,
    forks: 3,
    language: "Python",
    type: "Maintainer"
  },
  {
    repo: "open-source/data-analyzer",
    description: "Contributed directly to optimizing the core SQL querying engine, significantly reducing latency on heavy aggregations, and improving the modularity of the data visualization components.",
    stars: 345,
    forks: 89,
    language: "TypeScript",
    type: "Contributor"
  },
  {
    repo: "prithika/portfolio-v1",
    description: "My legacy open-source portfolio template built with React, Vite, and Tailwind CSS. It serves as a foundational boilerplate for developers looking to establish a web presence quickly.",
    stars: 5,
    forks: 1,
    language: "React",
    type: "Maintainer"
  }];


  const stats = [
  { label: "Public Repositories", value: "24+" },
  { label: "Total Contributions", value: "150+" },
  { label: "Pull Requests", value: "30+" },
  { label: "Followers", value: "45" }];


  return (
    <motion.div

      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      
      <Helmet>
        <title>Open Source & Community | Prithika Kannan</title>
      </Helmet>
      
      <motion.div variants={itemVariants}>
        <Terminal size={16} />
        <span>~/prithika/open-source</span>
      </motion.div>

      <motion.h1 variants={itemVariants}>
        Building in the Open
      </motion.h1>
      
      <motion.p variants={itemVariants}>
        I strongly believe in the philosophy of open-source software. Contributing to public repositories helps me continuously learn, share knowledge, undergo peer review, and build better software together with the community.
      </motion.p>

      <motion.a
        variants={itemVariants}
        href="https://github.com/prithikakannan"
        target="_blank"
        rel="noopener noreferrer">

        
        <GitBranch size={18} /> Follow my work on GitHub
      </motion.a>

      {/* Stats Section */}
      <motion.div variants={containerVariants}>
        {stats.map((stat, idx) =>
        <motion.div
          key={idx}
          variants={itemVariants}>

          
            <div>
              {stat.value}
            </div>
            <div>
              {stat.label}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Repositories Section */}
      <motion.h2 variants={itemVariants}>
        Highlighted Repositories
      </motion.h2>
      
      <motion.div variants={containerVariants}>
        {contributions.map((repo, idx) =>
        <motion.div
          key={idx}
          variants={itemVariants}>

          
            <div>
              <div>
                <GitBranch size={24} />
                <a href={`https://github.com/${repo.repo}`} target="_blank" rel="noopener noreferrer">
                  {repo.repo.split('/').pop()}
                </a>
              </div>
              <span>
                {repo.type}
              </span>
            </div>
            
            <p>
              {repo.description}
            </p>
            
            <div>
              <div>
                <div></div>
                {repo.language}
              </div>
              <div>
                <Star size={16} /> {repo.stars}
              </div>
              <div>
                <GitFork size={16} /> {repo.forks}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>);

}