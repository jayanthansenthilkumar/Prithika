import { Helmet } from "react-helmet-async";
import { Terminal, MapPin, ArrowRight, Code2, Briefcase, Cpu, Workflow, Shield, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ContactCTA } from "@/components/home/ContactCTA";
import { JobBoard } from "@/components/careers/JobBoard";


const techStack = [
  { category: "Systems & Infrastructure", tools: ["Rust", "C++ / CUDA", "Go", "Kubernetes", "Terraform"] },
  { category: "Machine Learning", tools: ["PyTorch", "vLLM", "Triton", "TensorRT", "HuggingFace"] },
  { category: "Web & Platform", tools: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js"] },
  { category: "Data & Storage", tools: ["PostgreSQL", "Redis", "ClickHouse", "Milvus", "Kafka"] }
];

const processSteps = [
  { step: "01", title: "Introductory Call", desc: "A 30-minute chat with our recruiting team to align on expectations, culture, and your career goals." },
  { step: "02", title: "Technical Deep Dive", desc: "A 60-minute technical interview focusing on your past architecture decisions and problem-solving." },
  { step: "03", title: "Practical Assessment", desc: "A scoped, real-world take-home project or a pair-programming session, depending on the role." },
  { step: "04", title: "Founders Interview", desc: "Final 45-minute conversation with our founders to discuss vision, trajectory, and mutual fit." }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>austral/careers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Build the future of enterprise AI.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8">
              We&apos;re a focused team of engineers and researchers shipping production AI systems for the world&apos;s most demanding enterprises. We are actively expanding our global infrastructure team.
            </p>

            <div className="flex items-center gap-6 border-t border-gray-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 font-serif italic">45+</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">Team Members</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-blue-600 font-serif italic">3</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">Global Offices</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900 font-serif italic">100%</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">Engineer-Led</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="py-24 border-b border-gray-200 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif italic">What We Look For</h2>
            <p className="text-sm font-mono text-gray-600 leading-relaxed">
              Building highly secure, low-latency intelligence infrastructure requires a specific breed of engineer. We prioritize raw capability, deep ownership, and a bias for action over traditional credentials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
              <Cpu className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">Technical Depth</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed">
                You understand systems from the metal up. Whether it's memory management in Rust, CUDA kernel optimization, or distributed systems architecture, you dive deep.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
              <Shield className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">High Agency</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed">
                You don't wait for permission to fix broken systems. You thrive in ambiguity, take absolute ownership of your features, and drive them to production.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
              <Workflow className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-base font-bold font-serif text-gray-900 mb-2">Pragmatic Execution</h3>
              <p className="text-xs font-mono text-gray-600 leading-relaxed">
                You balance engineering purity with business reality. You know when to write optimal low-level code and when to ship a fast, scalable abstraction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Our Tech Stack</h2>
            <p className="text-sm font-mono text-gray-600">
              The tools we use to build high-performance AI infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="border border-gray-200 bg-white p-6 rounded-sm shadow-sm">
                <h3 className="text-sm font-bold font-serif text-gray-900 mb-4 uppercase tracking-wider">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.tools.map((tool, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-mono text-gray-600">
                      <Code2 className="w-3.5 h-3.5 text-blue-500" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process & Policy */}
      <section className="py-24 border-b border-gray-200 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* How We Hire */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">How We Hire</h2>
            <p className="text-sm font-mono text-gray-600 mb-12">
              Our process is designed to be transparent, fast, and respectful of your time. We aim to go from first call to offer in under 2 weeks.
            </p>
            <div className="space-y-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-blue-600 font-bold font-serif italic text-xl mt-0.5">{step.step}</div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-serif mb-1">{step.title}</h3>
                    <p className="text-xs font-mono text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Policy */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 font-serif italic">Our Hiring Policy</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-serif mb-1">Equal Opportunity & Meritocracy</h4>
                  <p className="text-xs font-mono text-gray-600 leading-relaxed">We hire strictly based on talent, impact, and alignment with our values. We welcome applicants from all backgrounds and do not discriminate based on race, gender, identity, or location.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-serif mb-1">Remote First, Global Reach</h4>
                  <p className="text-xs font-mono text-gray-600 leading-relaxed">While we have hubs in SF and London, we are a remote-first organization. We hire globally, provided you have a reliable connection and can overlap with our core timezone for 4 hours a day.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-serif mb-1">Transparent Compensation</h4>
                  <p className="text-xs font-mono text-gray-600 leading-relaxed">We pay top-of-market rates globally without location-based pay cuts. All our offers include meaningful equity because we want you to be a true partner in our growth.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-serif mb-1">Asynchronous Autonomy</h4>
                  <p className="text-xs font-mono text-gray-600 leading-relaxed">We trust our team. We don't track hours, monitor screens, or mandate rigid schedules. We measure success entirely by the quality and speed of your output.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <JobBoard />

      <ContactCTA />
    </div>
  );
}
