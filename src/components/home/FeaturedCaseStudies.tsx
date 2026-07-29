import { ArrowRight, TerminalSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    client: "Global Logistics Co.",
    industry: "Supply Chain",
    metric: "40%",
    metricLabel: "Time Reduction",
    title: "Dynamic routing with reinforcement learning",
    description: "Deployed a custom multi-agent system to handle real-time weather and traffic variables across 5,000 daily active routes.",
    link: "/contact"
  },
  {
    client: "FinTech Innovators",
    industry: "Financial Services",
    metric: "99.8%",
    metricLabel: "Fraud Acc.",
    title: "Real-time transaction anomaly detection",
    description: "Replaced a legacy rules engine with a highly optimized neural network processing 10k transactions per second.",
    link: "/contact"
  },
  {
    client: "HealthSync",
    industry: "Healthcare",
    metric: "$2.4M",
    metricLabel: "Saved/Yr",
    title: "Automated medical coding and billing",
    description: "Implemented a HIPAA-compliant NLP pipeline to extract billing codes from unstructured physician notes automatically.",
    link: "/contact"
  }
];

export function FeaturedCaseStudies() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <TerminalSquare className="w-5 h-5 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight font-serif italic">Proven Outcomes</h2>
            </div>
            <p className="text-gray-600 text-sm font-mono">
              We focus on moving core business metrics. See how our AI implementations perform in production environments.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="outline" className="hidden md:inline-flex rounded-sm font-mono text-xs border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50">
              View All Outcomes <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="group flex flex-col bg-white hover:bg-gray-50 transition-colors h-full"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{study.client}</span>
                <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">{study.industry}</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-end gap-3 mb-6">
                  <div className="text-4xl font-bold text-gray-900 font-serif italic">{study.metric}</div>
                  <div className="text-xs font-mono text-gray-500 uppercase mb-1.5">{study.metricLabel}</div>
                </div>
                
                <h3 className="text-sm font-bold text-gray-900 font-serif mb-3">{study.title}</h3>
                <p className="text-gray-600 text-xs font-mono leading-relaxed mb-6 flex-grow">
                  {study.description}
                </p>
                
                <Link to={study.link}>
                  <Button variant="ghost" className="w-full rounded-sm font-mono text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 border border-transparent group-hover:border-blue-100 justify-between px-4">
                    Read Report <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link to="/contact">
            <Button variant="outline" className="w-full rounded-sm font-mono text-xs border-gray-300 bg-white shadow-sm">
              View All Outcomes <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
