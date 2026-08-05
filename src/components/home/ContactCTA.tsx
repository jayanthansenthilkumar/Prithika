import { Terminal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-24 w-full">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden bg-gradient-to-br from-indigo-900/40 via-zinc-900/40 to-purple-900/40 border border-white/10">
          
          {/* Background glow effects */}
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mb-8 backdrop-blur-md">
              <Terminal size={16} className="text-indigo-400" />
              <span className="text-sm font-medium tracking-wide">~/initiate-contact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
              Ready to scale your <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">intelligence?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed text-balance">
              Speak with an architect to discuss your use case, review our secure posture, and get a technical assessment of your requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg bg-white text-zinc-950 hover:bg-zinc-200">
                  Book Consultation <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg border-white/20 hover:bg-white/10 hover:text-white">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}