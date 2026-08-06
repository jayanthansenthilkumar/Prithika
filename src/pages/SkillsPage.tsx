import { Helmet } from "react-helmet-async";
import { Terminal, BrainCircuit, Server, Globe, Database } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit size={32} className="text-purple-600 dark:text-purple-400 transition-colors" />,
      gradient: "from-purple-500/10 to-transparent",
      skills: ["Scikit-Learn", "Pandas", "NumPy", "TensorFlow", "PyTorch", "NLP", "Data Visualization", "Predictive Modeling", "Feature Engineering"]
    },
    {
      title: "Backend Architecture",
      icon: <Server size={32} className="text-blue-600 dark:text-blue-400 transition-colors" />,
      gradient: "from-blue-500/10 to-transparent",
      skills: ["Python", "Flask", "Django", "RESTful APIs", "PHP", "Node.js", "Express", "Microservices"]
    },
    {
      title: "Frontend Engineering",
      icon: <Globe size={32} className="text-emerald-600 dark:text-emerald-400 transition-colors" />,
      gradient: "from-emerald-500/10 to-transparent",
      skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Responsive Design"]
    },
    {
      title: "Databases & DevOps",
      icon: <Database size={32} className="text-amber-600 dark:text-amber-400 transition-colors" />,
      gradient: "from-amber-500/10 to-transparent",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Git", "GitHub Actions", "Docker", "Linux", "CI/CD", "AWS"]
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full pt-6 md:pt-10 pb-12 md:pb-20"
    >
      <Helmet>
        <title>Technical Arsenal | Prithika Kannan</title>
      </Helmet>
      
      <div className="mb-10 md:mb-12 max-w-3xl">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit mb-5 md:mb-6">
          <Terminal size={14} className="text-indigo-600 dark:text-indigo-400 md:w-4 md:h-4" />
          <span className="text-xs md:text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">~/skills</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-4 md:mb-6 text-zinc-950 dark:text-white transition-colors">
          Technical <span className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Arsenal.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed text-balance transition-colors">
          A comprehensive breakdown of the languages, frameworks, methodologies, and infrastructure tools I use to build intelligent applications and scalable backend systems. 
        </motion.p>
      </div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`glass-card rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col bg-gradient-to-br ${category.gradient}`}
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 shrink-0">
                {category.icon}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white transition-colors">{category.title}</h2>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-zinc-800 dark:text-zinc-200 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}