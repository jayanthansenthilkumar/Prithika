import { Helmet } from "react-helmet-async";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Terminal } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Helmet>
        <title>About Prithika Kannan | Background, Education & Skills</title>
        <meta name="description" content="Learn about Prithika Kannan's background as a Product-focused Software Engineer, her education at M. Kumarasamy College of Engineering, and her industrial experience at RSUN Technologies." />
        <meta name="keywords" content="About Prithika Kannan, Software Engineer Background, M. Kumarasamy College of Engineering, RSUN Technologies Madurai, Tech Certifications, GitHub Foundations" />
      </Helmet>
      
      <section className="pt-24 pb-12 border-b-[3px] border-foreground bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border-[3px] border-foreground rounded-none bg-primary text-xs font-mono font-bold uppercase text-foreground shadow-brutal-lg hover:-translate-y-1 hover:-translate-x-1 transition-transform">
              <Terminal className="w-4 h-4" />
              <span>prithika/about</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tighter font-heading uppercase leading-tight">
              Bridging analytical focus with creative <span className="bg-primary px-2 border-[3px] border-foreground rounded-none shadow-[4px_4px_0px_0px_var(--color-foreground)] inline-block">problem-solving.</span>
            </h1>
            
            <p className="text-lg text-foreground font-mono font-bold leading-relaxed border-l-[3px] border-foreground pl-4">
              I am a product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions. Skilled in distributed systems and full-stack development, I build scalable, client-centric applications aligned with AI-driven transformation goals.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      
      {/* Spacer before footer */}
      <div className="py-12"></div>
    </div>
  );
}
