import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
  const projects = [
    {
      id: 1,
      title: "PLANGO - AI Trip Planner",
      tech: ["Flask", "Python-ML", "SQLite", "JS"],
      desc: "Built a scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%. Engineered predictive models for traffic and time optimization, boosting user satisfaction by 35%."
    },
    {
      id: 2,
      title: "Geo Tagging Issue System",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JS", "Maps API"],
      desc: "Developed a geo-tagged issue reporting platform enabling users to submit location-based complaints with real-time map integration, reducing issue reporting time by 50%. Implemented role-based dashboards, status tracking, and database optimization."
    },
    {
      id: 3,
      title: "Rock Paper Scissors Game",
      tech: ["Python"],
      desc: "Built an interactive command-line Rock Paper Scissors game using Python with randomized game logic, delivering accurate gameplay and win/loss tracking. Designed modular game logic and input validation, improving code maintainability by 35%."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-black">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 md:mb-12 border-b-4 md:border-b-8 border-black pb-4 break-words">
          Projects
        </h1>
        
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <div key={project.id} className={`bg-white border-4 border-black p-6 sm:p-8 md:p-12 brutalist-shadow flex flex-col lg:flex-row gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <h2 className="text-4xl font-black uppercase mb-4">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="bg-black text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black">{t}</span>
                  ))}
                </div>
                <p className="text-xl font-medium leading-relaxed mb-8">
                  {project.desc}
                </p>
                <button className="flex items-center gap-2 font-black uppercase text-lg border-b-4 border-primary hover:text-primary transition-colors pb-1">
                  View Source <ArrowRight size={20} />
                </button>
              </div>
              <div className={`flex-1 min-h-[300px] border-4 border-black flex items-center justify-center p-8 ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}>
                 <h3 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter opacity-50 transform -rotate-12 ${i % 2 === 0 ? 'text-black text-outline' : 'text-white text-outline'}`}>
                   {project.title.split(' ')[0]}
                 </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blogs;
