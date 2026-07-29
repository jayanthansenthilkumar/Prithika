import { ArrowRight, CodeSquare } from "lucide-react";

const projects = [
  {
    tech: "Flask, ML, SQLite, JS",
    title: "PLANGO - AI Trip Planner",
    metric: "40%",
    metricLabel: "Accuracy Inc.",
    description: "Built a scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%. Engineered predictive models boosting user satisfaction by 35%.",
    link: "https://github.com/prithikakannan"
  },
  {
    tech: "PHP, MySQL, Maps API",
    title: "Geo Tagging Issue Reported System",
    metric: "50%",
    metricLabel: "Time Reduction",
    description: "Developed a platform enabling users to submit location-based complaints with real-time map integration, reducing issue reporting time by 50%. Implemented role-based dashboards.",
    link: "https://github.com/prithikakannan"
  },
  {
    tech: "Python",
    title: "Rock Paper Scissors Game",
    metric: "35%",
    metricLabel: "Maintainability",
    description: "Built an interactive command-line game using Python with randomized logic. Designed modular game logic and input validation, improving code maintainability by 35%.",
    link: "https://github.com/prithikakannan"
  }
];

export function FeaturedCaseStudies() {
  return (
    <section id="projects" className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <CodeSquare className="w-5 h-5 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight font-serif italic">Featured Projects</h2>
            </div>
            <p className="text-gray-600 text-sm font-mono">
              Showcasing practical applications of full-stack engineering, machine learning, and database optimization.
            </p>
          </div>
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button className="hidden md:inline-flex rounded-sm font-mono text-xs border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 px-4 py-2 items-center">
              View GitHub <ArrowRight className="ml-2 w-3 h-3" />
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-white hover:bg-gray-50 transition-colors h-full"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Project</span>
                <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">{project.tech}</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-end gap-3 mb-6">
                  <div className="text-4xl font-bold text-gray-900 font-serif italic">{project.metric}</div>
                  <div className="text-xs font-mono text-gray-500 uppercase mb-1.5">{project.metricLabel}</div>
                </div>
                
                <h3 className="text-sm font-bold text-gray-900 font-serif mb-3">{project.title}</h3>
                <p className="text-gray-600 text-xs font-mono leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full flex items-center justify-between rounded-sm font-mono text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 border border-transparent group-hover:border-blue-100 px-4 py-2">
                    Source Code <ArrowRight className="w-3 h-3" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
            <button className="w-full flex items-center justify-center rounded-sm font-mono text-xs border border-gray-300 bg-white shadow-sm px-4 py-2">
              View GitHub <ArrowRight className="ml-2 w-3 h-3" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
