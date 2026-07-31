import { Box, Layers, Server, Code, Database, Globe, Network, Cpu, FileJson } from "lucide-react";

const technologies = [
  { name: "Python", category: "Language", icon: <Code className="w-5 h-5 text-foreground" /> },
  { name: "JavaScript", category: "Language", icon: <Code className="w-5 h-5 text-foreground" /> },
  { name: "HTML & CSS", category: "Frontend", icon: <Globe className="w-5 h-5 text-foreground" /> },
  { name: "Flask", category: "Framework", icon: <Box className="w-5 h-5 text-foreground" /> },
  { name: "MySQL", category: "Database", icon: <Database className="w-5 h-5 text-foreground" /> },
  { name: "REST APIs", category: "Backend", icon: <Network className="w-5 h-5 text-foreground" /> },
  { name: "Git", category: "Tools", icon: <Layers className="w-5 h-5 text-foreground" /> },
  { name: "GitHub", category: "Tools", icon: <Server className="w-5 h-5 text-foreground" /> },
];



export function TechnologyStack() {
  return (
    <section id="skills" className="py-24 border-b-[3px] border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-black font-heading uppercase text-foreground mb-6 tracking-tighter">Technical Skills</h2>
            <p className="text-foreground text-base font-mono font-bold leading-relaxed bg-background p-4 border-[3px] border-foreground rounded-none shadow-brutal">
              A comprehensive toolkit for building scalable backend systems, responsive web apps, and machine learning models.
            </p>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-[3px] bg-foreground border-[3px] border-foreground rounded-none overflow-hidden shadow-brutal-lg">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 p-6 bg-background hover:bg-primary hover:-translate-y-1 hover:-translate-x-1 transition-transform h-full flex-col justify-center text-center relative group"
              >
                <div className="p-3 border-[3px] border-foreground rounded-none mb-2 shadow-[2px_2px_0px_0px_var(--color-foreground)] bg-background group-hover:bg-foreground group-hover:text-background transition-colors">
                  {tech.icon}
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-sm font-black font-heading uppercase text-foreground group-hover:text-foreground">{tech.name}</span>
                  <span className="text-[10px] font-mono font-bold text-foreground bg-foreground rounded-none text-background px-2 py-0.5 uppercase tracking-widest">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
