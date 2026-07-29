import { Helmet } from "react-helmet-async";
import { Terminal, ShieldPlus, Briefcase, Code2 } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";


export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 border-b border-gray-200 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>austral/solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Built for Scale.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
              Every industry has unique data gravity and compliance requirements. 
              Our solutions are tailored to help highly regulated sectors deploy AI 
              without compromising on security or latency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 font-serif italic">Industry Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <ShieldPlus className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">Healthcare</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed mb-4">
                HIPAA-compliant LLM infrastructure for analyzing patient records, biomedical literature, and accelerating drug discovery securely.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <Briefcase className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">Finance</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed mb-4">
                Ultra-low latency inference for quantitative analysis, algorithmic trading, and real-time fraud detection within secure boundaries.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <Code2 className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">Technology</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed mb-4">
                Scalable APIs and dedicated GPU clusters for SaaS platforms looking to embed intelligence into their own products seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </div>
  );
}
