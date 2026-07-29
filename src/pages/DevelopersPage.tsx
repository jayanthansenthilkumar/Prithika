import { Helmet } from "react-helmet-async";
import { Terminal, Code2, Layers, Zap } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";


export default function DevelopersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 border-b border-gray-200 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>austral/developers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Build with Austral AI.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
              Our APIs and SDKs are designed by developers, for developers. 
              Get granular control over your models with our comprehensive tooling, 
              or use our high-level abstractions to ship faster.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif italic">The Toolchain</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><Code2 className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <h3 className="text-sm font-bold font-mono text-gray-900 mb-1">Austral SDKs</h3>
                    <p className="text-xs font-mono text-gray-600">Native libraries for Python, Go, and TypeScript. Fully typed and documented.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Layers className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <h3 className="text-sm font-bold font-mono text-gray-900 mb-1">Model Registry API</h3>
                    <p className="text-xs font-mono text-gray-600">Programmatically manage your weights, fine-tunes, and deployment configurations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Zap className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <h3 className="text-sm font-bold font-mono text-gray-900 mb-1">Inference Engine</h3>
                    <p className="text-xs font-mono text-gray-600">OpenAI-compatible endpoints mapped directly to our high-throughput tensor runtime.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] rounded-md p-6 shadow-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="text-[10px] text-gray-500 font-mono ml-2">inference.py</span>
              </div>
              <pre className="text-xs font-mono text-gray-300 overflow-x-auto">
                <code className="text-blue-400">import</code> austral<br/><br/>
                <code className="text-blue-400">const</code> client = <code className="text-blue-400">new</code> austral.Client(&#123;<br/>
                &nbsp;&nbsp;apiKey: process.env.AUSTRAL_API_KEY,<br/>
                &nbsp;&nbsp;environment: <code className="text-green-400">'production'</code><br/>
                &#125;)<br/><br/>
                <code className="text-blue-400">const</code> response = <code className="text-blue-400">await</code> client.chat.completions.create(&#123;<br/>
                &nbsp;&nbsp;model: <code className="text-green-400">'llama-3-70b-instruct'</code>,<br/>
                &nbsp;&nbsp;messages: [&#123; role: <code className="text-green-400">'user'</code>, content: <code className="text-green-400">'Optimize this query.'</code> &#125;]<br/>
                &#125;)<br/><br/>
                print(response.choices[0].message.content)
              </pre>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </div>
  );
}
