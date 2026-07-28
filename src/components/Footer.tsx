import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-4 border-black bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-black uppercase text-2xl">
            <span>Prithika</span>
            <span className="text-primary">Kannan</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/prithikakannan" target="_blank" rel="noreferrer" className="p-3 border-4 border-black hover:bg-accent brutalist-shadow transition-all bg-white">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noreferrer" className="p-3 border-4 border-black hover:bg-accent brutalist-shadow transition-all bg-white">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kpprithika75@gmail.com" className="p-3 border-4 border-black hover:bg-accent brutalist-shadow transition-all bg-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold uppercase">
          <p>© {new Date().getFullYear()} PRITHIKA KANNAN. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            <span className="bg-primary text-white px-2 py-1 border-2 border-black">BUILT WITH REACT & TAILWIND</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
