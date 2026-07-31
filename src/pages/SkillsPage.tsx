import { Helmet } from "react-helmet-async";
import { 
  Code2, 
  Database, 
  Globe, 
  Terminal, 
  Cpu, 
  Layers, 
  Server, 
  BrainCircuit, 
  BarChart, 
  Braces,
  Laptop
} from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit className="w-6 h-6 text-foreground" />,
      bgColor: "bg-background",
      skills: [
        { name: "Scikit-Learn", level: 85 },
        { name: "Pandas & NumPy", level: 90 },
        { name: "TensorFlow / PyTorch", level: 75 },
        { name: "NLP (NLTK, SpaCy)", level: 80 },
        { name: "Data Visualization", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-foreground" />,
      bgColor: "bg-background",
      skills: [
        { name: "Python", level: 95 },
        { name: "Flask & Django", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "PHP", level: 80 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6 text-foreground" />,
      bgColor: "bg-background",
      skills: [
        { name: "React.js", level: 85 },
        { name: "TypeScript / JS", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 70 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-6 h-6 text-foreground" />,
      bgColor: "bg-background",
      skills: [
        { name: "MySQL / PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Linux / Bash", level: 85 }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Helmet>
        <title>Technical Skills | Prithika Kannan</title>
        <meta name="description" content="Detailed overview of Prithika Kannan's technical skills across Machine Learning, Backend, Frontend, and Tools." />
      </Helmet>
      
      <section className="pt-24 pb-12 border-b-[3px] border-foreground bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border-[3px] border-foreground rounded-none bg-primary text-xs font-mono font-bold uppercase text-foreground shadow-brutal-lg hover:-translate-y-1 hover:-translate-x-1 transition-transform">
              <Terminal className="w-4 h-4" />
              <span>prithika/skills</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tighter font-heading uppercase">
              Technical Arsenal
            </h1>
            
            <p className="text-lg text-foreground font-mono font-bold leading-relaxed border-[3px] border-foreground rounded-none bg-background p-4 shadow-brutal">
              A comprehensive breakdown of the tools, languages, and frameworks I use to build intelligent applications and scalable systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <div key={idx} className={`${category.bgColor} border-[3px] border-foreground rounded-none p-8 shadow-brutal-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_var(--color-foreground)] transition-all`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 border-[3px] border-foreground bg-background rounded-none shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-black text-foreground font-heading uppercase tracking-tight">{category.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-black text-foreground font-mono uppercase bg-background px-2 border-[3px] border-foreground rounded-none">{skill.name}</span>
                        <span className="text-sm text-foreground font-mono font-black bg-background px-2 border-[3px] border-foreground rounded-none">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-background border-[3px] border-foreground h-4 rounded-none overflow-hidden shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                        <div 
                          className="bg-foreground h-full border-r-2 border-foreground transition-all duration-1000 ease-out" 
                          style={{ width: skill.level + '%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12"></div>
    </div>
  );
}
