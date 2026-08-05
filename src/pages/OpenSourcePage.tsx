import { Helmet } from "react-helmet-async";
import { Terminal, GitFork, Star, GitBranch } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-6xl mx-auto pt-10 pb-24"
    >
      <Helmet>
        <title>Open Source & Community | Prithika Kannan</title>
      </Helmet>
      
      <div className="mb-16">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-6">
          <Terminal size={16} className="text-indigo-400" />
          <span className="text-sm font-medium tracking-wide">~/open-source</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6">
          Building in the <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Open.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl text-zinc-400 leading-relaxed text-balance max-w-3xl mb-8">
          I strongly believe in the philosophy of open-source software. Contributing to public repositories helps me continuously learn, share knowledge, undergo peer review, and build better software together with the community.
        </motion.p>

        <motion.a
          variants={itemVariants}
          href="https://github.com/prithikakannan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors"
        >
          <GitBranch size={18} /> Follow my work on GitHub
        </motion.a>
      </div>

      {/* Stats Section */}
      <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass-card rounded-3xl p-6 text-center flex flex-col justify-center border-t border-white/10"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Repositories Section */}
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Star className="text-yellow-500 fill-yellow-500/20" size={28} />
        Highlighted Repositories
      </motion.h2>
      
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributions.map((repo, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 flex flex-col hover:border-indigo-500/30 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass bg-white/5 flex items-center justify-center shrink-0">
                  <GitBranch size={20} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <a 
                  href={`https://github.com/${repo.repo}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-lg hover:text-indigo-400 transition-colors truncate"
                  title={repo.repo}
                >
                  {repo.repo.split('/').pop()}
                </a>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 shrink-0">
                {repo.type}
              </span>
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
              {repo.description}
            </p>
            
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                {repo.language}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-zinc-400">
                <Star size={16} /> {repo.stars}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-zinc-400">
                <GitFork size={16} /> {repo.forks}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}