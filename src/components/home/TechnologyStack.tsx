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

const getHoverColor = (category: string) => {
  switch (category) {
    case 'Language': return 'hover:bg-brutal-pink';
    case 'Frontend': return 'hover:bg-brutal-orange';
    case 'Framework': return 'hover:bg-brutal-purple';
    case 'Database': return 'hover:bg-brutal-blue';
    case 'Backend': return 'hover:bg-brutal-green';
    default: return 'hover:bg-brutal-red';
  }
};

const getBgColor = (category: string) => {
  switch (category) {
    case 'Language': return 'bg-brutal-pink';
    case 'Frontend': return 'bg-brutal-orange';
    case 'Framework': return 'bg-brutal-purple';
    case 'Database': return 'bg-brutal-blue';
    case 'Backend': return 'bg-brutal-green';
    default: return 'bg-brutal-red';
  }
};

export function TechnologyStack() {
  return (
    <section id="skills" className="py-24 border-b-[3px] border-foreground bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-black font-heading uppercase text-foreground mb-6 tracking-tighter">Technical Skills</h2>
            <p className="text-foreground text-base font-mono font-bold leading-relaxed bg-background p-4 border-[3px] border-foreground rounded-xl shadow-brutal">
              A comprehensive toolkit for building scalable backend systems, responsive web apps, and machine learning models.
            </p>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-[3px] bg-foreground border-[3px] border-foreground rounded-xl overflow-hidden shadow-brutal-lg">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-3 p-6 bg-background ${getHoverColor(tech.category)} hover:-translate-y-1 hover:-translate-x-1 transition-transform h-full flex-col justify-center text-center relative`}
              >
                <div className={`p-3 border-[3px] border-foreground rounded-md mb-2 shadow-[2px_2px_0px_0px_var(--color-foreground)] ${getBgColor(tech.category)}`}>
                  {tech.icon}
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-sm font-black font-heading uppercase text-foreground">{tech.name}</span>
                  <span className="text-[10px] font-mono font-bold text-foreground bg-foreground rounded-sm text-background px-2 py-0.5 uppercase tracking-widest">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
