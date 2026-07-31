import { Briefcase, GraduationCap, Award } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section id="experience" className="py-24 border-b-4 border-foreground bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-4xl font-black text-foreground mb-6 font-heading uppercase tracking-tighter">
              Experience & <span className="bg-background px-2 border-2 border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)]">Background</span>
            </h2>
            <p className="text-sm font-mono font-bold text-foreground mb-12">
              A blend of academic foundation and practical industry experience building scalable systems.
            </p>
            
            <div className="flex flex-col gap-10">
              {/* Experience */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 border-2 border-foreground bg-background group-hover:shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-shadow">
                    <Briefcase className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground font-heading uppercase">RSUN Technologies</h3>
                    <p className="text-xs font-mono font-bold text-foreground bg-background inline-block px-2 py-0.5 border-2 border-foreground">Madurai | June 2026</p>
                  </div>
                </div>
                <ul className="list-disc text-sm font-mono font-bold text-foreground leading-relaxed pl-14 space-y-2">
                  <li>Built scalable distributed backend with PHP & SQL, reducing latency by 30% and throughput.</li>
                  <li>Developed RESTful APIs to improve communication and system reliability by 40%.</li>
                  <li>Optimized queries and indexing, cutting processing time by 35% and enhancing performance.</li>
                </ul>
              </div>

              {/* Education */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 border-2 border-foreground bg-background group-hover:shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-shadow">
                    <GraduationCap className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground font-heading uppercase leading-tight">M. Kumarasamy College of Engineering</h3>
                    <p className="text-xs font-mono font-bold text-foreground bg-background inline-block px-2 py-0.5 border-2 border-foreground mt-2">2024 - 2028</p>
                  </div>
                </div>
                <p className="text-sm font-mono font-bold text-foreground leading-relaxed pl-14">
                  B. Tech - Information Technology <br />
                  CGPA – 7.900 as of 3rd semester
                </p>
              </div>
            </div>
          </div>
          
          {/* Terminal / Certifications Box */}
          <div className="rounded-none border-4 border-foreground bg-background shadow-brutal-lg font-mono text-xs h-full min-h-[400px] flex flex-col overflow-hidden hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_var(--color-foreground)] transition-all">
            <div className="px-4 py-3 bg-foreground text-background flex justify-between font-bold uppercase tracking-widest border-b-4 border-foreground">
              <span>certifications.json</span>
              <span>100%</span>
            </div>
            <div className="p-6 text-foreground space-y-4 overflow-auto flex-grow bg-background font-bold">
              <div className="text-primary bg-foreground inline-block px-2 font-black">$ cat certifications.json</div>
              <pre className="text-foreground font-mono text-xs whitespace-pre-wrap font-bold">
{`{
  "certifications": [
    {
      "name": "GitHub Foundations",
      "status": "Completed",
      "verified": true
    },
    {
      "name": "SRMIST Hackathon",
      "award": "Finalist",
      "category": "Innovation"
    }
  ],
  "learning_path": {
    "current_focus": "Advanced Distributed Systems",
    "next_goal": "Cloud Architect Certification"
  }
}`}
              </pre>
              <div className="mt-4 flex items-center">
                <span className="text-foreground bg-primary px-2 font-black mr-2">$</span>
                <span className="w-2 h-4 bg-foreground animate-pulse" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
