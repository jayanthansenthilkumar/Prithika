import { Link } from "react-router-dom";
import { ArrowRight, Code, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 md:mt-32 border-t border-black/5 dark:border-white/10 pt-16 pb-8 transition-colors duration-500">
      <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
        
        {/* Call to Action Section */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-950 dark:text-white mb-6 text-balance">
            Ready to build something extraordinary?
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-md text-balance leading-relaxed">
            I'm currently open for new opportunities. Let's collaborate to engineer elegant, scalable solutions for your next big challenge.
          </p>
          <Button asChild size="lg" className="rounded-full h-14 px-8 text-base md:text-lg">
            <Link to="/contact">
              Start a conversation <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 lg:gap-16 pt-2">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg text-zinc-950 dark:text-white mb-2">Navigation</h4>
            <Link to="/" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">Home</Link>
            <Link to="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">Work</Link>
            <Link to="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">About</Link>
            <Link to="/skills" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">Skills</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg text-zinc-950 dark:text-white mb-2">Connect</h4>
            <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium flex items-center gap-2">
              <Code size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium flex items-center gap-2">
              <Briefcase size={18} /> LinkedIn
            </a>
            <a href="mailto:kpprithika75@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium flex items-center gap-2">
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/5 dark:border-white/10 text-sm font-medium text-zinc-500 transition-colors">
        <p>© {currentYear} Prithika Kannan. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Designed with precision. Built for scale.
        </p>
      </div>
    </footer>
  );
}
