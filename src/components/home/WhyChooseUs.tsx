import { CheckSquare } from "lucide-react";

const pillars = [
  {
    title: "Engineering Excellence",
    description: "Built by a team of senior AI researchers and full-stack engineers obsessed with performance and clean code."
  },
  {
    title: "Data Privacy & Security",
    description: "SOC2 Type II compliant. Your models are trained in isolated environments, and your data is never used to train global models."
  },
  {
    title: "Scalable Architecture",
    description: "We deploy on Kubernetes and cloud-native serverless functions to ensure your AI features scale from day one."
  },
  {
    title: "Business ROI Focus",
    description: "We don't build tech for the sake of it. Every project starts with a clear metric we intend to move."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif italic">
              Why ambitious teams choose <span className="text-blue-600">Austral AI</span>
            </h2>
            <p className="text-sm font-mono text-gray-600 mb-12">
              We bridge the gap between academic AI research and production-grade enterprise software. No hype, just shipping reliable systems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    <h3 className="text-sm font-bold text-gray-900 font-serif">{pillar.title}</h3>
                  </div>
                  <p className="text-xs font-mono text-gray-500 leading-relaxed pl-6 border-l border-gray-200 ml-2">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Zed-styled Light Terminal output representation */}
          <div className="rounded-md border border-gray-200 bg-white shadow-sm font-mono text-xs h-full min-h-[400px] flex flex-col overflow-hidden">
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 text-gray-500 flex justify-between">
              <span>build.log</span>
              <span>100%</span>
            </div>
            <div className="p-6 text-gray-700 space-y-2 overflow-auto flex-grow bg-white">
              <div className="text-blue-600 font-semibold">$ cargo build --release</div>
              <div>Compiling austral_core v2.4.0 (/workspace/core)</div>
              <div>Compiling austral_inference v1.2.0 (/workspace/inference)</div>
              <div>Compiling austral_server v3.0.1 (/workspace/server)</div>
              <div className="text-green-600 font-semibold">Finished release [optimized + debuginfo] target(s) in 2m 14s</div>
              <div className="text-blue-600 font-semibold mt-4">$ ./target/release/austral-server --config config.toml</div>
              <div className="text-gray-500">[INFO] Loading configuration from config.toml</div>
              <div className="text-gray-500">[INFO] Initializing TensorRT engine...</div>
              <div className="text-gray-500">[INFO] Allocating 24GB VRAM... <span className="text-green-600 font-semibold">Success</span></div>
              <div className="text-gray-500">[INFO] Starting HTTP server on 0.0.0.0:8080</div>
              <div className="text-gray-500">[INFO] Ready to accept connections.</div>
              <div className="mt-4 flex items-center">
                <span className="text-blue-600 font-bold mr-2">$</span>
                <span className="w-2 h-4 bg-gray-400 animate-pulse" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
