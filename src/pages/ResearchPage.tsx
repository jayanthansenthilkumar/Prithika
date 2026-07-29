import { Helmet } from "react-helmet-async";
import { Terminal, BookOpen, FileText, Share2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Button } from "@/components/ui/button";


export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 border-b border-gray-200 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>austral/research</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Pushing the Boundaries.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
              We believe that fundamental AI research must be paired with rigorous systems engineering. 
              Our research team focuses on model efficiency, reasoning capabilities, and safe enterprise alignment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Open Source Models</h2>
            <p className="text-sm font-mono text-gray-600 max-w-2xl">
              We periodically release distilled and base models to the community. These artifacts represent 
              our commitment to democratizing foundational intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="group border border-gray-200 p-8 rounded-sm hover:border-blue-600 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <Share2 className="w-6 h-6 text-blue-600" />
                <span className="px-2 py-1 bg-gray-100 text-xs font-mono text-gray-500 rounded">8B Parameters</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif italic">Austral-Core-8B</h3>
              <p className="text-sm font-mono text-gray-600 leading-relaxed mb-6">
                A highly optimized base model trained on 3T tokens. Achieves state-of-the-art reasoning 
                for its size class. Licensed under Apache 2.0.
              </p>
              <Link to="#" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
                View on Hugging Face <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="group border border-gray-200 p-8 rounded-sm hover:border-blue-600 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <Share2 className="w-6 h-6 text-blue-600" />
                <span className="px-2 py-1 bg-gray-100 text-xs font-mono text-gray-500 rounded">MoE</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif italic">Austral-MoE-Instruct</h3>
              <p className="text-sm font-mono text-gray-600 leading-relaxed mb-6">
                A 14B sparse mixture-of-experts model optimized for function calling, structured data extraction, and instruction following.
              </p>
              <Link to="#" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
                View on Hugging Face <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Technical Reports</h2>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 border border-gray-200 p-6 rounded-sm items-center hover:bg-gray-50 transition-colors">
              <div className="bg-gray-100 p-4 rounded-full">
                <FileText className="w-6 h-6 text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 font-serif">Scaling Laws for Enterprise Retrieval-Augmented Generation</h3>
                <p className="text-xs font-mono text-gray-500 mt-1">October 2025 • Research Team</p>
              </div>
              <div>
                <Button variant="outline" size="sm" className="font-mono text-xs">Download PDF</Button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 border border-gray-200 p-6 rounded-sm items-center hover:bg-gray-50 transition-colors">
              <div className="bg-gray-100 p-4 rounded-full">
                <FileText className="w-6 h-6 text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 font-serif">KV-Cache Quantization for Multi-Turn Reasoning</h3>
                <p className="text-xs font-mono text-gray-500 mt-1">June 2025 • Infrastructure Team</p>
              </div>
              <div>
                <Button variant="outline" size="sm" className="font-mono text-xs">Download PDF</Button>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <ContactCTA />
    </div>
  );
}
