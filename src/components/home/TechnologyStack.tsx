import { Box, Layers, Server, Code, Database, Globe, Network } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  { name: "Python", category: "Language", icon: <Code size={24} className="text-blue-400" /> },
  { name: "JavaScript", category: "Language", icon: <Code size={24} className="text-yellow-400" /> },
  { name: "HTML & CSS", category: "Frontend", icon: <Globe size={24} className="text-orange-400" /> },
  { name: "Flask", category: "Framework", icon: <Box size={24} className="text-zinc-400" /> },
  { name: "MySQL", category: "Database", icon: <Database size={24} className="text-blue-500" /> },
  { name: "REST APIs", category: "Backend", icon: <Network size={24} className="text-emerald-400" /> },
  { name: "Git", category: "Tools", icon: <Layers size={24} className="text-red-400" /> },
  { name: "GitHub", category: "Tools", icon: <Server size={24} className="text-zinc-200" /> }
];

export function TechnologyStack() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-4">
            <Server size={16} className="text-indigo-400" />
            <span className="text-sm font-medium tracking-wide">Core Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Toolkit</h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-2xl text-balance">
            A comprehensive toolkit for building scalable backend systems, responsive web apps, and machine learning models.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={tech.name}
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {tech.icon}
              </div>
              <div>
                <span className="block font-bold text-lg text-white">{tech.name}</span>
                <span className="block text-sm text-zinc-500 mt-1">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}