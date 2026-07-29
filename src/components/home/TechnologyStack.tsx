import { Box, Layers, Server, Code, Database, Cpu } from "lucide-react";

const technologies = [
  { name: "Rust", category: "Core", icon: <Cpu className="w-4 h-4 text-orange-500" /> },
  { name: "CUDA", category: "Hardware", icon: <Server className="w-4 h-4 text-green-600" /> },
  { name: "PyTorch", category: "ML", icon: <Box className="w-4 h-4 text-red-500" /> },
  { name: "PostgreSQL", category: "Data", icon: <Database className="w-4 h-4 text-blue-500" /> },
  { name: "Next.js", category: "Frontend", icon: <Code className="w-4 h-4 text-gray-900" /> },
  { name: "Kubernetes", category: "Ops", icon: <Layers className="w-4 h-4 text-blue-600" /> },
];

export function TechnologyStack() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Tech Stack</h2>
            <p className="text-gray-600 text-sm font-mono">
              Built on production-hardened primitives. No vendor lock-in. 100% transparent architecture.
            </p>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 p-6 bg-white hover:bg-gray-50 transition-colors h-full"
              >
                <div className="p-1.5 bg-gray-50 border border-gray-100 rounded-sm">
                  {tech.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 font-serif">{tech.name}</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
