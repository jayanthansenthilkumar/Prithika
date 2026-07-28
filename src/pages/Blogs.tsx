import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
  const projects = [
    {
      id: 1,
      title: "PLANGO - AI Trip Planner",
      tech: ["Flask", "Python", "SQLite", "JS"],
      desc: "Built a scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%. Engineered predictive models for traffic and time optimization, boosting user satisfaction by 35%.",
      color: "bg-blue"
    },
    {
      id: 2,
      title: "Geo Tagging Issue System",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JS", "Maps API"],
      desc: "Developed a geo-tagged issue reporting platform enabling users to submit location-based complaints with real-time map integration, reducing issue reporting time by 50%. Implemented role-based dashboards, status tracking, and database optimization.",
      color: "bg-red"
    },
    {
      id: 3,
      title: "Rock Paper Scissors Game",
      tech: ["Python"],
      desc: "Built an interactive command-line Rock Paper Scissors game using Python with randomized game logic, delivering accurate gameplay and win/loss tracking. Designed modular game logic and input validation, improving code maintainability by 35%.",
      color: "bg-green"
    }
  ];

  return (
    <div className="min-h-screen text-black font-sans selection:bg-yellow selection:text-black">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-8 md:mb-12 border-b-[3px] border-black pb-4 break-words">
          Projects
        </h1>
        
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <div key={project.id} className={`bg-white border-[3px] border-black p-6 sm:p-8 md:p-12 rounded-3xl brutalist-shadow flex flex-col lg:flex-row gap-8 hover:-translate-y-2 transition-transform ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-3xl font-black mb-4">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="bg-cream border-[2px] border-black rounded-full px-3 py-1 font-bold text-sm">{t}</span>
                  ))}
                </div>
                <p className="text-xl font-medium leading-relaxed mb-8">
                  {project.desc}
                </p>
                <button className="flex items-center justify-center gap-2 font-bold text-lg bg-yellow border-[3px] border-black rounded-full py-3 px-6 brutalist-shadow w-max hover:-translate-y-1 transition-transform">
                  View Source <ArrowRight size={20} />
                </button>
              </div>
              <div className={`flex-1 min-h-[300px] border-[3px] border-black rounded-3xl flex items-center justify-center p-8 ${project.color} relative overflow-hidden`}>
                 <div className="absolute top-4 right-4 flex gap-2">
                   <div className="w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                   <div className="w-4 h-4 bg-yellow border-2 border-black rounded-full"></div>
                 </div>
                 <h3 className="text-4xl sm:text-5xl font-black tracking-tighter opacity-50 transform -rotate-12 text-white text-outline">
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
