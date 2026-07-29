import { Helmet } from "react-helmet-async";
import { Terminal, Cpu, Database, Network } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";


export default function PlatformPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 border-b border-gray-200 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>austral/platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              The AI Platform for the Enterprise.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
              Austral AI delivers bare-metal performance with modern abstractions. 
              Our platform allows you to securely train, fine-tune, and deploy large 
              language models within your VPC, avoiding lock-in and maximizing throughput.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 font-serif italic">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] p-8 border border-gray-200 rounded-sm">
              <Cpu className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">Distributed Compute</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed">
                Optimized kernel execution for multi-node GPU clusters, providing linear scaling across thousands of H100s.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 border border-gray-200 rounded-sm">
              <Database className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">High-Speed Storage</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed">
                Direct NVMe over Fabrics integration ensuring GPU starvation is a thing of the past. Maximum IOPS for tensor operations.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 border border-gray-200 rounded-sm">
              <Network className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">Secure Networking</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed">
                Air-gapped capabilities and single-tenant VPC deployments. Complete network isolation for your most sensitive weights and data.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </div>
  );
}
