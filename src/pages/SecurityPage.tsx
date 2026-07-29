import { Helmet } from "react-helmet-async";
import { Terminal, ShieldCheck, Lock, FileKey2 } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";


export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 border-b border-gray-200 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>austral/security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Uncompromising Security.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
              We understand that your data is your competitive advantage. 
              Austral AI is built from the ground up with military-grade 
              encryption, zero-trust architecture, and full compliance reporting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 font-serif italic">Compliance & Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
              <ShieldCheck className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">SOC 2 Type II</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed">
                Our infrastructure and organizational processes are continuously audited to ensure strict adherence to SOC 2 Type II standards.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
              <Lock className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">VPC Deployment</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed">
                Run our inference stack directly within your own Virtual Private Cloud (AWS, GCP, Azure). Your weights never leave your perimeter.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
              <FileKey2 className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">E2E Encryption</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed">
                All data in transit (TLS 1.3) and at rest (AES-256) is encrypted. Bring Your Own Key (BYOK) is fully supported across all instances.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </div>
  );
}
