import { Helmet } from "react-helmet-async";
import { Terminal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Team } from "@/components/about/Team";


export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 border-b border-gray-200 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>austral/company</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Our Mission.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
              We are on a mission to democratize enterprise AI by providing the most robust, 
              scalable, and secure infrastructure. We believe that compute should be a utility, 
              not a bottleneck.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group border border-gray-200 p-8 rounded-sm hover:border-blue-600 transition-colors">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic">About Us</h2>
              <p className="text-sm font-mono text-gray-600 leading-relaxed mb-6">
                Learn more about our history, our founders, and the engineering philosophy that drives everything we build at Austral AI.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
                Read our story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="group border border-gray-200 p-8 rounded-sm hover:border-blue-600 transition-colors">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic">Careers</h2>
              <p className="text-sm font-mono text-gray-600 leading-relaxed mb-6">
                We are actively hiring elite engineers, researchers, and operators. Join us in building the future of enterprise AI infrastructure.
              </p>
              <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
                View open positions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="group border border-gray-200 p-8 rounded-sm hover:border-blue-600 transition-colors">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic">Blog</h2>
              <p className="text-sm font-mono text-gray-600 leading-relaxed mb-6">
                Technical deep-dives, infrastructure case studies, and engineering updates directly from the team building Austral AI.
              </p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
                Read the blog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="group border border-gray-200 p-8 rounded-sm hover:border-blue-600 transition-colors">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic">Contact</h2>
              <p className="text-sm font-mono text-gray-600 leading-relaxed mb-6">
                Get in touch with our enterprise sales team, press office, or general inquiries. We're here to help you scale.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Team />
      
      <ContactCTA />
    </div>
  );
}
