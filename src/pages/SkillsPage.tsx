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
      icon: <BrainCircuit size={32} className="text-purple-400" />,
      gradient: "from-purple-500/10 to-transparent",
      skills: ["Scikit-Learn", "Pandas", "NumPy", "TensorFlow", "PyTorch", "NLP", "Data Visualization", "Predictive Modeling", "Feature Engineering"]
    },
    {
      title: "Backend Architecture",
      icon: <Server size={32} className="text-blue-400" />,
      gradient: "from-blue-500/10 to-transparent",
      skills: ["Python", "Flask", "Django", "RESTful APIs", "PHP", "Node.js", "Express", "Microservices"]
    },
    {
      title: "Frontend Engineering",
      icon: <Globe size={32} className="text-emerald-400" />,
      gradient: "from-emerald-500/10 to-transparent",
      skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Responsive Design"]
    },
    {
      title: "Databases & DevOps",
      icon: <Database size={32} className="text-amber-400" />,
      gradient: "from-amber-500/10 to-transparent",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Git", "GitHub Actions", "Docker", "Linux", "CI/CD", "AWS"]
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-6xl mx-auto pt-10 pb-20"
    >
      <Helmet>
        <title>Technical Arsenal | Prithika Kannan</title>
      </Helmet>
      
      <div className="mb-16 max-w-3xl">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-6">
          <Terminal size={16} className="text-indigo-400" />
          <span className="text-sm font-medium tracking-wide">~/skills</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6">
          Technical <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Arsenal.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl text-zinc-400 leading-relaxed text-balance">
          A comprehensive breakdown of the languages, frameworks, methodologies, and infrastructure tools I use to build intelligent applications and scalable backend systems. 
        </motion.p>
      </div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`glass-card rounded-3xl p-8 md:p-10 flex flex-col bg-gradient-to-br ${category.gradient}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center bg-white/5 border border-white/10">
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-200 text-sm font-medium hover:bg-white/10 transition-colors"
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