import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen text-black font-sans selection:bg-yellow selection:text-black">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-8 md:mb-12 border-b-[3px] border-black pb-4 break-words">
          Contact
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-8">
              I'm always excited to take on new challenges and collaborate with passionate individuals and teams. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:kpprithika75@gmail.com" className="flex items-center gap-4 text-xl sm:text-2xl font-black hover:-translate-y-1 transition-transform w-max group">
                <div className="p-4 border-[3px] border-black bg-yellow rounded-full brutalist-shadow group-hover:bg-white transition-colors">
                  <Mail size={32} />
                </div>
                kpprithika75@gmail.com
              </a>
              <a href="https://github.com/prithikakannan" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl sm:text-2xl font-black hover:-translate-y-1 transition-transform w-max group">
                <div className="p-4 border-[3px] border-black bg-white rounded-full brutalist-shadow group-hover:bg-blue group-hover:text-white transition-colors">
                  <Github size={32} />
                </div>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl sm:text-2xl font-black hover:-translate-y-1 transition-transform w-max group">
                <div className="p-4 border-[3px] border-black bg-blue text-white rounded-full brutalist-shadow group-hover:bg-red transition-colors">
                  <Linkedin size={32} />
                </div>
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="bg-white border-[3px] border-black p-6 sm:p-8 md:p-12 rounded-3xl brutalist-shadow relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-green border-[3px] border-black rounded-full brutalist-shadow animate-pulse"></div>
            
            <h2 className="text-3xl font-black mb-8 break-words">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xl font-bold mb-2">Name</label>
                <input type="text" className="w-full bg-cream border-[3px] border-black rounded-2xl p-4 text-lg font-medium focus:outline-none focus:bg-white transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xl font-bold mb-2">Email</label>
                <input type="email" className="w-full bg-cream border-[3px] border-black rounded-2xl p-4 text-lg font-medium focus:outline-none focus:bg-white transition-colors" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-xl font-bold mb-2">Message</label>
                <textarea rows={5} className="w-full bg-cream border-[3px] border-black rounded-2xl p-4 text-lg font-medium focus:outline-none focus:bg-white transition-colors resize-none" placeholder="Your Message"></textarea>
              </div>
              <button type="button" className="w-full bg-red text-white font-black text-2xl py-4 rounded-full border-[3px] border-black hover:bg-yellow hover:text-black transition-colors brutalist-shadow hover:-translate-y-1">
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
