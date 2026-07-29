import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-0 overflow-hidden bg-transparent border-b border-gray-200">
      
      {/* Announcement Badge */}
      <div className="text-center mb-16 relative z-10">
        <a
          href="https://aventrea.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/60 text-xs font-mono text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 shadow-sm"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white shrink-0">
            <Sparkles className="w-3 h-3" />
          </span>
          <span className="truncate"><span className="font-semibold text-blue-600">New</span> - Aventrea.me<span className="hidden sm:inline">, The Living Digital Identity Platform</span></span>
          <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
        
        <h1 className="text-5xl md:text-[4.5rem] lg:text-[5rem] text-blue-600 mb-6 leading-tight tracking-tight font-serif italic">
          Secure AI Systems & Intelligence Infrastructure for the Fortune 500
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-mono">
          Austral AI builds and deploys high-performance,<br className="hidden md:block" /> secure artificial intelligence systems at scale.
        </p>
        
        <div className="flex flex-row gap-3 justify-center mb-6">
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-sm h-10 px-5 flex items-center gap-2 shadow-sm">
              <span className="font-sans font-medium text-sm">Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-sm h-10 px-5 bg-white border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center gap-2 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-gray-500" /> 
              <span className="font-sans font-medium text-sm">Explore Services</span>
            </Button>
          </Link>
        </div>
        
        <p className="text-xs text-gray-500 font-mono">Trusted by Fortune 500 enterprises · SOC2 Type II Compliant</p>
      </div>

      {/* 3 Column Feature Grid (Bordered) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 bg-transparent text-left relative z-10 max-w-7xl mx-auto">
        <div className="p-8 border-b md:border-b-0 border-r-0 md:border-r border-gray-200">
          <h3 className="text-base font-bold text-gray-900 mb-2 font-serif">High Performance</h3>
          <p className="text-xs text-gray-600 font-mono leading-relaxed">
            Built on Rust and CUDA for sub-50ms inference latency. Auto-scaling infrastructure that handles enterprise workloads.
          </p>
        </div>
        <div className="p-8 border-b md:border-b-0 border-r-0 md:border-r border-gray-200">
          <h3 className="text-base font-bold text-gray-900 mb-2 font-serif">Secure by Design</h3>
          <p className="text-xs text-gray-600 font-mono leading-relaxed">
            Air-gapped on-premise deployments. Your data never leaves your perimeter. SOC2 compliant infrastructure.
          </p>
        </div>
        <div className="p-8">
          <h3 className="text-base font-bold text-gray-900 mb-2 font-serif">Enterprise Ready</h3>
          <p className="text-xs text-gray-600 font-mono leading-relaxed">
            Custom LLM fine-tuning, multi-agent architectures, and RAG systems built for your specific business needs.
          </p>
        </div>
      </div>
    </section>
  );
}
