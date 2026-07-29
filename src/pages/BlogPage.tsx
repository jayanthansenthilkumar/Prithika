import { Helmet } from "react-helmet-async";
import { Terminal, Clock, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactCTA } from "@/components/home/ContactCTA";


const posts = [
  {
    title: "The shift from monolithic LLMs to multi-agent systems",
    excerpt: "Why the future of enterprise AI isn't one massive model, but a swarm of specialized, coordinated agents working together to solve complex business problems.",
    category: "Architecture",
    date: "2025-06-12",
    readTime: "6m",
    featured: true
  },
  {
    title: "Optimizing vector search for billion-scale datasets",
    excerpt: "A deep dive into how we reduced p99 latency by 40% using custom HNSW graph quantization techniques.",
    category: "Engineering",
    date: "2025-05-28",
    readTime: "8m",
    featured: false
  },
  {
    title: "SOC2 Compliance in the age of generative AI",
    excerpt: "A framework for safely deploying LLMs in regulated industries without compromising data privacy.",
    category: "Security",
    date: "2025-05-15",
    readTime: "5m",
    featured: false
  },
  {
    title: "Building HIPAA-compliant NLP pipelines for healthcare",
    excerpt: "How we designed and deployed an automated medical coding system processing 50,000 physician notes daily.",
    category: "Healthcare AI",
    date: "2025-04-22",
    readTime: "7m",
    featured: false
  },
  {
    title: "Custom CUDA kernels for enterprise inference optimization",
    excerpt: "Writing custom GPU kernels to achieve sub-50ms latency for transformer models in production.",
    category: "Performance",
    date: "2025-03-18",
    readTime: "10m",
    featured: false
  },
  {
    title: "RAG architecture patterns for enterprise knowledge bases",
    excerpt: "Lessons learned from deploying retrieval-augmented generation systems at Fortune 500 companies.",
    category: "Architecture",
    date: "2025-03-05",
    readTime: "9m",
    featured: false
  }
];

export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <BookOpen className="w-3 h-3" />
              <span>austral/blog</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Changelog & Thinking
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed">
              Engineering deep dives, architecture patterns, and thoughts on the future of enterprise AI.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-16 border-b border-gray-200 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden hover:border-gray-300 transition-colors">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="text-[10px] font-mono text-blue-600 font-semibold">{featured.category} · Featured</span>
                <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500">
                  <span>{featured.date}</span>
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {featured.readTime}</span>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-serif">{featured.title}</h2>
                <p className="text-sm font-mono text-gray-600 leading-relaxed max-w-3xl">{featured.excerpt}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-24 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-serif italic">All Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
            {rest.map((post, index) => (
              <div key={index} className="flex flex-col bg-white hover:bg-gray-50 transition-colors h-full">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="text-[10px] font-mono text-blue-600 font-semibold">{post.category}</span>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500">
                    <span>{post.date}</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {post.readTime}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-gray-900 mb-3 font-serif">{post.title}</h3>
                  <p className="text-xs font-mono text-gray-600 leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
