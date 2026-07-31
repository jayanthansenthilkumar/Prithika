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
      icon: <BrainCircuit  />,
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
      icon: <Server  />,
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
      icon: <Globe  />,
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
      icon: <Database  />,
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
    <div >
      <Helmet>
        <title>Technical Skills | Prithika Kannan</title>
        <meta name="description" content="Detailed overview of Prithika Kannan's technical skills across Machine Learning, Backend, Frontend, and Tools." />
      </Helmet>
      
      <section >
        <div >
          <div >
            <div >
              <Terminal  />
              <span>prithika/skills</span>
            </div>
            
            <h1 >
              Technical Arsenal
            </h1>
            
            <p >
              A comprehensive breakdown of the tools, languages, and frameworks I use to build intelligent applications and scalable systems.
            </p>
          </div>
        </div>
      </section>

      <section >
        <div >
          <div >
            {skillCategories.map((category, idx) => (
              <div key={idx} >
                <div >
                  <div >
                    {category.icon}
                  </div>
                  <h2 >{category.title}</h2>
                </div>
                
                <div >
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div >
                        <span >{skill.name}</span>
                        <span >{skill.level}%</span>
                      </div>
                      <div >
                        <div 
                           
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

      <div ></div>
    </div>
  );
}
