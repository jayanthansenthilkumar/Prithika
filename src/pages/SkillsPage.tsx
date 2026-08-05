import { Helmet } from "react-helmet-async";
import { Terminal, BrainCircuit, Server, Globe, Database } from "lucide-react";
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

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit size={28} />,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      skills: ["Scikit-Learn", "Pandas & NumPy", "TensorFlow / PyTorch", "NLP (NLTK, SpaCy)", "Data Visualization", "Predictive Modeling", "Feature Engineering"]
    },
    {
      title: "Backend Development",
      icon: <Server size={28} />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      skills: ["Python", "Flask & Django", "RESTful APIs", "PHP", "Node.js", "Express", "Microservices Architecture"]
    },
    {
      title: "Frontend Development",
      icon: <Globe size={28} />,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Responsive Design", "Accessibility"]
    },
    {
      title: "Databases & DevOps Tools",
      icon: <Database size={28} />,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      skills: ["MySQL / PostgreSQL", "MongoDB", "Git & GitHub Actions", "Docker", "Linux / Bash", "CI/CD Pipelines", "AWS Basics"]
    }
  ];

  return (
    <motion.div 
      className="max-w-5xl pb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Technical Skills | Prithika Kannan</title>
      </Helmet>
      
      <motion.div variants={itemVariants} className="flex items-center gap-3 text-[var(--text-tertiary)] mb-8 bg-[var(--bg-card)] w-fit px-4 py-2 rounded-full border border-[var(--border-subtle)] shadow-sm">
        <Terminal size={16} />
        <span className="text-sm font-mono tracking-tight">~/prithika/skills</span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
        Technical Arsenal
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-lg text-[var(--text-secondary)] leading-relaxed font-light mb-16 max-w-3xl">
        A comprehensive breakdown of the languages, frameworks, methodologies, and infrastructure tools I use to build intelligent applications and scalable backend systems. 
        I continuously expand this toolkit, prioritizing technologies that offer strong typing, excellent community support, and predictable performance at scale. 
      </motion.p>

      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="flex flex-col p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-[var(--border-hover)]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`${category.bg} ${category.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                {category.icon}
              </div>
              <h2 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">{category.title}</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-4 py-2 bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-xl text-[15px] font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 cursor-default"
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
