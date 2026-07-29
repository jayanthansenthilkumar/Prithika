import { Helmet } from "react-helmet-async";
import { Terminal, ArrowRight, Building, Network, Activity } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";


export default function CustomersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 border-b border-gray-200 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>austral/customers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Trusted by Leaders.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
              From algorithmic trading desks to global healthcare providers, Austral AI powers 
              the most demanding workloads where latency, privacy, and scale are non-negotiable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <div className="border border-gray-200 p-8 rounded-sm shadow-sm">
              <Building className="w-8 h-8 text-blue-600 mb-6" />
              <div className="text-3xl font-bold text-gray-900 font-serif italic mb-2">40x</div>
              <div className="text-sm font-mono text-gray-900 font-bold mb-4">Decrease in Inference Latency</div>
              <p className="text-xs font-mono text-gray-600 leading-relaxed mb-6">
                A Tier 1 investment bank migrated their internal coding assistant to Austral AI's bare-metal infrastructure, reducing latency from 2 seconds to 50ms per token generation.
              </p>
              <div className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider">Financial Services</div>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm shadow-sm">
              <Network className="w-8 h-8 text-blue-600 mb-6" />
              <div className="text-3xl font-bold text-gray-900 font-serif italic mb-2">Zero</div>
              <div className="text-sm font-mono text-gray-900 font-bold mb-4">Data Egress Outside Perimeter</div>
              <p className="text-xs font-mono text-gray-600 leading-relaxed mb-6">
                A national healthcare provider utilized our VPC deployment to analyze millions of patient records through an LLM without a single byte of PII leaving their secure AWS environment.
              </p>
              <div className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider">Healthcare & Lifesciences</div>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm shadow-sm">
              <Activity className="w-8 h-8 text-blue-600 mb-6" />
              <div className="text-3xl font-bold text-gray-900 font-serif italic mb-2">1.5M</div>
              <div className="text-sm font-mono text-gray-900 font-bold mb-4">Requests Handled Per Minute</div>
              <p className="text-xs font-mono text-gray-600 leading-relaxed mb-6">
                A global e-commerce platform relies on our highly-available distributed tensor runtime to serve personalized product reasoning to millions of concurrent users during peak traffic events.
              </p>
              <div className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider">Global E-Commerce</div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-sm p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic">Ready to see what Austral can do for your architecture?</h2>
            <p className="text-sm font-mono text-gray-600 mb-8 max-w-2xl mx-auto">
              Our engineering team is ready to scope your deployment and provide a rigorous proof-of-concept for your specific workload requirements.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-mono text-sm transition-colors shadow-sm">
                Book a Demo
              </button>
              <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-md font-mono text-sm transition-colors shadow-sm">
                Read the Docs
              </button>
            </div>
          </div>

        </div>
      </section>
      
      <ContactCTA />
    </div>
  );
}
