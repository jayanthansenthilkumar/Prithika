import { Helmet } from "react-helmet-async";
import { Terminal, FileText } from "lucide-react";


export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
            <FileText className="w-3 h-3" />
            <span>austral/terms</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
            Terms of Service
          </h1>
          
          <p className="text-sm font-mono text-gray-500 mb-12">Last updated: July 1, 2025</p>

          <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-mono text-gray-500 font-semibold">terms-of-service.md</span>
            </div>
            
            <div className="p-8 md:p-12 space-y-8 text-sm font-mono text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using Austral AI&apos;s services, APIs, or platforms, you agree to be bound by these Terms of Service. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">2. Services</h2>
                <p>Austral AI provides enterprise AI infrastructure, APIs, and consulting services. The specific terms of your service usage, including SLAs, throughput limits, and support tiers, are defined in your individual Enterprise Agreement or API subscription plan.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">3. Intellectual Property</h2>
                <p>For custom engagements, intellectual property rights are transferred to the client upon completion and full payment, as specified in the project agreement. All pre-existing Austral AI technology and tools remain the property of Austral AI Inc.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">4. API Usage</h2>
                <p>API access is subject to rate limits and usage quotas as defined by your subscription tier. You agree not to reverse engineer, decompile, or attempt to extract the source code of our models or inference infrastructure.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">5. Service Level Agreements</h2>
                <p>Enterprise clients receive SLAs as defined in their individual agreements. Standard API access carries a 99.9% uptime SLA. Service credits are issued for downtime exceeding the SLA commitment.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">6. Limitation of Liability</h2>
                <p>Austral AI&apos;s total liability shall not exceed the amount paid by you in the twelve months preceding the claim. We are not liable for indirect, incidental, special, or consequential damages.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">7. Governing Law</h2>
                <p>These terms are governed by the laws of the State of California, United States. Any disputes shall be resolved through binding arbitration in San Francisco, California.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">8. Contact</h2>
                <p>For questions regarding these terms, contact us at:</p>
                <p className="mt-2 text-blue-600">legal@australai.com</p>
                <p className="mt-1">Austral AI Inc., 500 Howard St, San Francisco, CA 94105</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
