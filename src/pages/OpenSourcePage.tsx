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
    }
  ];

  const stats = [
    { label: "Public Repositories", value: "24+" },
    { label: "Total Contributions", value: "150+" },
    { label: "Pull Requests", value: "30+" },
    { label: "Followers", value: "45" }
  ];

  return (
    <motion.div 
      className="max-w-5xl pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Open Source & Community | Prithika Kannan</title>
      </Helmet>
      
      <motion.div variants={itemVariants} className="flex items-center gap-3 text-[var(--text-tertiary)] mb-8 bg-[var(--bg-card)] w-fit px-4 py-2 rounded-full border border-[var(--border-subtle)] shadow-sm">
        <Terminal size={16} />
        <span className="text-sm font-mono tracking-tight">~/prithika/open-source</span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
        Building in the Open
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-lg text-[var(--text-secondary)] leading-relaxed font-light mb-12 max-w-3xl">
        I strongly believe in the philosophy of open-source software. Contributing to public repositories helps me continuously learn, share knowledge, undergo peer review, and build better software together with the community.
      </motion.p>

      <motion.a 
        variants={itemVariants}
        href="https://github.com/prithikakannan" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-medium hover:bg-[var(--bg-hover)] transition-all duration-300 hover:shadow-md mb-16 hover:-translate-y-1"
      >
        <GitBranch size={18} /> Follow my work on GitHub
      </motion.a>

      {/* Stats Section */}
      <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="p-6 bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-main)] rounded-3xl border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="font-heading text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2 tracking-tighter">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-[var(--text-secondary)]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Repositories Section */}
      <motion.h2 variants={itemVariants} className="font-heading text-3xl font-semibold text-[var(--text-primary)] mb-8 tracking-tight">
        Highlighted Repositories
      </motion.h2>
      
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contributions.map((repo, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="flex flex-col p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-[var(--border-hover)] hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <GitBranch size={24} className="text-[var(--text-tertiary)]" />
                <a href={`https://github.com/${repo.repo}`} target="_blank" rel="noopener noreferrer" className="font-heading text-xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                  {repo.repo.split('/').pop()}
                </a>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full uppercase tracking-wider">
                {repo.type}
              </span>
            </div>
            
            <p className="text-[var(--text-secondary)] leading-relaxed flex-grow mb-8 text-[15px]">
              {repo.description}
            </p>
            
            <div className="flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-6 mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--accent)]"></div>
                {repo.language}
              </div>
              <div className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors">
                <Star size={16} /> {repo.stars}
              </div>
              <div className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors">
                <GitFork size={16} /> {repo.forks}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
