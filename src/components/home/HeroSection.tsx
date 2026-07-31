import { ArrowRight, Code, Terminal, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-0 overflow-hidden bg-background border-b-[3px] border-foreground">
      
      {/* Announcement Badge */}
      <div className="text-center mb-16 relative z-10">
        <a
          href="https://github.com/prithikakannan"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-1.5 border-[3px] border-foreground bg-primary rounded-none text-xs font-mono font-bold uppercase text-foreground hover:-translate-y-1 hover:shadow-brutal transition-all duration-200 shadow-[2px_2px_0px_0px_var(--color-foreground)]"
        >
          <span className="flex items-center justify-center w-5 h-5 bg-foreground text-background rounded-none shrink-0">
            <Code className="w-3 h-3" />
          </span>
          <span className="truncate">Available - Open to New Opportunities</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
        
        <h1 className="text-5xl md:text-[4.5rem] lg:text-[5rem] text-foreground mb-8 leading-tight tracking-tighter font-heading font-black uppercase">
          <span className="bg-primary text-primary-foreground px-4 py-1 inline-block border-[3px] border-foreground rounded-none shadow-[4px_4px_0px_0px_var(--color-foreground)]">Prithika</span>
          <br className="md:hidden" />
          <span className="inline-block px-4 py-1 ml-0 md:ml-4 border-[3px] border-transparent">Kannan</span>
        </h1>
        
        <p className="text-base md:text-lg text-foreground mb-10 max-w-2xl mx-auto font-mono font-bold leading-relaxed border-l-[3px] border-foreground pl-4 text-left md:text-center md:border-l-0 md:pl-0">
          Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions.
          Skilled in distributed systems and full-stack development, I blend analytical focus with creative problem-solving.
        </p>
        
        <div className="flex flex-row gap-4 justify-center mb-12">
          <Link to="/projects">
            <Button size="lg" className="h-12 px-8 flex items-center gap-2 text-base font-bold uppercase">
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="h-12 px-8 flex items-center gap-2 text-base font-bold uppercase">
              <span>Contact Me</span>
            </Button>
          </Link>
        </div>
      </div>


      {/* 3 Column Feature Grid (Bordered) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-[3px] border-foreground bg-background text-left relative z-10 max-w-7xl mx-auto divide-y-[3px] divide-foreground md:divide-y-0 md:divide-x-[3px]">
        <div className="p-8 hover:bg-primary hover:text-primary-foreground transition-colors group">
          <div className="flex items-center gap-3 mb-4 text-foreground group-hover:text-primary-foreground">
            <div className="p-2 border-[3px] border-foreground rounded-none bg-background text-foreground group-hover:shadow-[2px_2px_0px_0px_var(--color-foreground)] transition-shadow">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black font-heading uppercase">Full-Stack</h3>
          </div>
          <p className="text-sm font-mono font-bold leading-relaxed opacity-90">
            Building robust web applications using Python, HTML, CSS, JavaScript, and PHP with modern frameworks like Flask.
          </p>
        </div>
        <div className="p-8 hover:bg-foreground hover:text-background transition-colors group">
          <div className="flex items-center gap-3 mb-4 text-foreground group-hover:text-background">
            <div className="p-2 border-[3px] border-foreground group-hover:border-background group-hover:text-foreground rounded-none bg-background text-foreground group-hover:shadow-[2px_2px_0px_0px_var(--color-background)] transition-shadow">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black font-heading uppercase">Data-Driven</h3>
          </div>
          <p className="text-sm font-mono font-bold leading-relaxed opacity-90">
            Designing scalable backend systems, optimizing SQL databases, and engineering predictive ML models for performance.
          </p>
        </div>
        <div className="p-8 hover:bg-primary hover:text-primary-foreground transition-colors group">
          <div className="flex items-center gap-3 mb-4 text-foreground group-hover:text-primary-foreground">
            <div className="p-2 border-[3px] border-foreground rounded-none bg-background text-foreground group-hover:shadow-[2px_2px_0px_0px_var(--color-foreground)] transition-shadow">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black font-heading uppercase">Problem Solving</h3>
          </div>
          <p className="text-sm font-mono font-bold leading-relaxed opacity-90">
            Focused on improving system reliability, reducing latency, and enhancing overall user experience through creative engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
