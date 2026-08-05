import { Box, Layers, Server, Code, Database, Globe, Network, Cpu, FileJson } from "lucide-react";

const technologies = [
{ name: "Python", category: "Language", icon: <Code /> },
{ name: "JavaScript", category: "Language", icon: <Code /> },
{ name: "HTML & CSS", category: "Frontend", icon: <Globe /> },
{ name: "Flask", category: "Framework", icon: <Box /> },
{ name: "MySQL", category: "Database", icon: <Database /> },
{ name: "REST APIs", category: "Backend", icon: <Network /> },
{ name: "Git", category: "Tools", icon: <Layers /> },
{ name: "GitHub", category: "Tools", icon: <Server /> }];




export function TechnologyStack() {
  return (
    <section id="skills">
      <div>
        <div>
          <div>
            <h2>Technical Skills</h2>
            <p>
              A comprehensive toolkit for building scalable backend systems, responsive web apps, and machine learning models.
            </p>
          </div>
          
          <div>
            {technologies.map((tech) =>
            <div
              key={tech.name}>

              
                <div>
                  {tech.icon}
                </div>
                <div>
                  <span>{tech.name}</span>
                  <span>{tech.category}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}