import { Helmet } from "react-helmet-async";
import { Terminal, ShieldCheck } from "lucide-react";


export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
            <ShieldCheck className="w-3 h-3" />
            <span>austral/privacy</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
            Privacy Policy
          </h1>
          
          <p className="text-sm font-mono text-gray-500 mb-12">Last updated: July 1, 2025</p>

          <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-mono text-gray-500 font-semibold">privacy-policy.md</span>
            </div>
            
            <div className="p-8 md:p-12 space-y-8 text-sm font-mono text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, including your name, email address, company name, and any messages you send through our contact forms. When you use our APIs, we collect usage data such as request counts and latency metrics.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">2. Data Sovereignty</h2>
                <p>Austral AI is committed to absolute data sovereignty. Your proprietary data, model weights, and training datasets are never used to train our base models or any models for other clients. All customer data is processed in isolated, single-tenant environments.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">3. How We Use Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services; communicate with you about products, services, and events; and comply with legal obligations. We do not sell your personal information to third parties.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">4. Security</h2>
                <p>We implement industry-standard security measures including SOC2 Type II compliance, end-to-end encryption, and regular third-party security audits. For on-premise deployments, all data remains within your network perimeter.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">5. Data Retention</h2>
                <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected. API usage logs are retained for 90 days for debugging and performance optimization purposes.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">6. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. You may also object to the processing of your data or request data portability. To exercise these rights, contact us at privacy@australai.com.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 font-serif mb-4">7. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at:</p>
                <p className="mt-2 text-blue-600">privacy@australai.com</p>
                <p className="mt-1">Austral AI Inc., 500 Howard St, San Francisco, CA 94105</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
