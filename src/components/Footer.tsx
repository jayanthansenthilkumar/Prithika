import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-background relative overflow-hidden pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-white font-bold">prithika</span>
            <span className="text-primary">.dev</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/prithikakannan" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kpprithika75@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Prithika Kannan. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/prithikakannan" className="hover:text-primary transition-colors">Built with React & Tailwind</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
