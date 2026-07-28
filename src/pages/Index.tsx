import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Terminal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
      <div className="absolute inset-0 bg-grid z-0 opacity-40"></div>
      
      {/* Abstract background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Hero Profile - Span 8 columns */}
          <div className="bento-card md:col-span-8 md:row-span-2 p-8 flex flex-col justify-center glass-panel group">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-max text-sm font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
              Prithika <br/> <span className="text-glow text-primary">Kannan.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-light mb-8">
              Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions.
            </p>
            
            <div className="flex gap-4">
              <a href="https://github.com/prithikakannan" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all text-white">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:kpprithika75@gmail.com" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Education - Span 4 columns */}
          <div className="bento-card md:col-span-4 p-8 glass-panel flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Layout size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-muted-foreground text-sm font-medium">B.Tech - Information Technology</p>
              <p className="text-white font-semibold mt-1">M. Kumarasamy College of Engineering</p>
            </div>
            <div className="mt-6 flex justify-between items-end border-t border-white/10 pt-4">
              <div className="font-mono text-xs text-muted-foreground">2024 - 2028</div>
              <div className="font-mono text-primary font-bold">CGPA: 7.9</div>
            </div>
          </div>

          {/* Industrial Experience - Span 6 columns */}
          <div className="bento-card md:col-span-6 md:row-span-2 p-8 glass-panel">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Database size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-bold text-white">RSUN Technologies</h4>
                  <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">June 2026</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Backend Developer</p>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-gray-300">
                    <span className="text-primary mt-1">▹</span>
                    <span>Built scalable distributed backend with PHP & SQL, reducing latency by <strong className="text-white">30%</strong>.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-300">
                    <span className="text-primary mt-1">▹</span>
                    <span>Developed RESTful APIs to improve communication and system reliability by <strong className="text-white">40%</strong>.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-300">
                    <span className="text-primary mt-1">▹</span>
                    <span>Optimized queries and indexing, cutting processing time by <strong className="text-white">35%</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack - Span 6 columns */}
          <div className="bento-card md:col-span-6 p-8 glass-panel flex flex-col font-mono relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Terminal size={16} />
              <span className="text-sm">~/skills.json</span>
            </div>
            <div className="text-sm leading-loose">
              <span className="text-blue-400">const</span> <span className="text-yellow-200">skills</span> = {'{'}
              <div className="pl-4">
                <span className="text-blue-300">languages:</span> [<span className="text-green-300">"Python"</span>, <span className="text-green-300">"JavaScript"</span>, <span className="text-green-300">"HTML"</span>, <span className="text-green-300">"CSS"</span>],<br/>
                <span className="text-blue-300">frameworks:</span> [<span className="text-green-300">"Flask"</span>],<br/>
                <span className="text-blue-300">tools:</span> [<span className="text-green-300">"GitHub"</span>, <span className="text-green-300">"Git"</span>, <span className="text-green-300">"MySQL"</span>, <span className="text-green-300">"REST APIs"</span>],
              </div>
              {'}'};
            </div>
          </div>

          {/* Project 1 - PLANGO - Span 6 columns */}
          <div className="bento-card md:col-span-6 p-8 glass-panel group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
                <Code2 size={24} />
              </div>
              <ExternalLink size={20} className="text-muted-foreground group-hover:text-white transition-colors cursor-pointer" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">PLANGO - AI Trip Planner</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              Scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Flask', 'Python-ML', 'SQLite', 'JS'].map(tech => (
                <span key={tech} className="text-xs font-mono px-2 py-1 bg-white/5 rounded-md border border-white/5 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2 - Geo Tagging - Span 6 columns */}
          <div className="bento-card md:col-span-6 p-8 glass-panel group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
                <Layout size={24} />
              </div>
              <ExternalLink size={20} className="text-muted-foreground group-hover:text-white transition-colors cursor-pointer" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Geo Tagging Issue System</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              Location-based complaint platform with real-time map integration, reducing issue reporting time by 50% with role-based dashboards.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['PHP', 'MySQL', 'Google Maps API'].map(tech => (
                <span key={tech} className="text-xs font-mono px-2 py-1 bg-white/5 rounded-md border border-white/5 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 3 - RPS - Span 4 columns */}
          <div className="bento-card md:col-span-4 p-8 glass-panel">
            <h3 className="text-lg font-bold text-white mb-2">Rock Paper Scissors</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Interactive command-line game with randomized logic and accurate win/loss tracking. Modular design for maintainability.
            </p>
            <div className="font-mono text-xs text-primary">Python</div>
          </div>

          {/* Certifications - Span 8 columns */}
          <div className="bento-card md:col-span-8 p-8 glass-panel flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-4">Certifications & Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-medium text-white">GitHub Foundations</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="font-medium text-white">Finalist - SRMIST Hackathon</span>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      {/* We can keep the footer but it needs a redesign to match. We will use a simplified one below, or rely on the imported Footer after updating it. */}
      {/* I will update the Footer component next. */}
      <Footer />
    </div>
  );
};

export default Index;
