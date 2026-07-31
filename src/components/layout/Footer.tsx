import { Code2, Briefcase, Mail } from "lucide-react";

export function Footer() {
  return (
    <>
      <div
        className="w-full relative overflow-hidden bg-background flex items-center justify-center py-4 select-none border-t-[3px] border-foreground"
      >
        <div
          className="font-heading font-black text-transparent text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] tracking-tighter leading-none whitespace-nowrap"
          style={{ WebkitTextStroke: '4px var(--color-foreground)' }}
        >
          Prithika Kannan
        </div>
      </div>
      <footer className="bg-background border-t-[3px] border-foreground pt-16 pb-8 relative overflow-hidden">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <div className="flex items-center text-foreground mb-4">
              <span className="text-3xl font-black font-heading uppercase tracking-tighter">Prithika Kannan</span>
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-6 max-w-md font-mono font-bold">
              Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions.
            </p>
            <div className="flex gap-6">
              <a href="mailto:kpprithika75@gmail.com" className="p-3 border-[3px] border-foreground bg-primary rounded-none text-foreground hover:-translate-y-1 hover:shadow-brutal transition-all">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer" className="p-3 border-[3px] border-foreground bg-primary rounded-none text-foreground hover:-translate-y-1 hover:shadow-brutal transition-all">
                <Code2 className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer" className="p-3 border-[3px] border-foreground bg-primary rounded-none text-foreground hover:-translate-y-1 hover:shadow-brutal transition-all">
                <Briefcase className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t-[3px] border-foreground flex flex-col items-center justify-center font-mono font-bold text-sm text-foreground uppercase">
            <p>&copy; {new Date().getFullYear()} Prithika Kannan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
