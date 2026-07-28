import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-black">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 md:mb-12 border-b-4 md:border-b-8 border-black pb-4 break-words">
          Contact
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-8">
              I'm always excited to take on new challenges and collaborate with passionate individuals and teams. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:kpprithika75@gmail.com" className="flex items-center gap-4 text-2xl font-black uppercase hover:text-primary transition-colors w-max">
                <div className="p-4 border-4 border-black bg-accent brutalist-shadow">
                  <Mail size={32} />
                </div>
                kpprithika75@gmail.com
              </a>
              <a href="https://github.com/prithikakannan" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-2xl font-black uppercase hover:text-primary transition-colors w-max">
                <div className="p-4 border-4 border-black bg-white brutalist-shadow">
                  <Github size={32} />
                </div>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-2xl font-black uppercase hover:text-primary transition-colors w-max">
                <div className="p-4 border-4 border-black bg-primary text-white brutalist-shadow">
                  <Linkedin size={32} />
                </div>
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="bg-white border-4 border-black p-6 sm:p-8 md:p-12 brutalist-shadow">
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-6 sm:mb-8 break-words">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xl font-bold uppercase mb-2">Name</label>
                <input type="text" className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:border-primary transition-colors" placeholder="YOUR NAME" />
              </div>
              <div>
                <label className="block text-xl font-bold uppercase mb-2">Email</label>
                <input type="email" className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:border-primary transition-colors" placeholder="YOUR EMAIL" />
              </div>
              <div>
                <label className="block text-xl font-bold uppercase mb-2">Message</label>
                <textarea rows={5} className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:border-primary transition-colors resize-none" placeholder="YOUR MESSAGE"></textarea>
              </div>
              <button type="button" className="w-full bg-black text-white font-black uppercase text-2xl py-4 border-4 border-black hover:bg-accent hover:text-black transition-colors brutalist-shadow">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
