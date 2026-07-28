import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Terminal, Briefcase, Code, GraduationCap, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-black">
      <Navbar />
      
      <main className="pt-20">
        
        {/* Section 1: Hero */}
        <section className="section-padding min-h-[90vh] flex flex-col justify-center border-b-4 border-black relative overflow-hidden bg-white">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full border-4 border-black brutalist-shadow -z-10 animate-bounce"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary rounded-none border-4 border-black brutalist-shadow -z-10 transform rotate-12"></div>
          
          <div className="z-10 max-w-5xl">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase mb-4 border-4 border-black inline-block px-4 sm:px-6 py-2 bg-white brutalist-shadow">
              Hello, I am
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-8 break-words">
              Prithika <br/> <span className="text-primary text-outline">Kannan</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl font-bold max-w-3xl mb-10 border-l-4 sm:border-l-8 border-accent pl-4 sm:pl-6 bg-white py-2">
              Product-focused Software Engineer crafting data-driven experiences.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-black font-black uppercase text-lg sm:text-xl border-4 border-black brutalist-shadow hover:bg-black hover:text-white transition-colors text-center">
                Let's Talk
              </Link>
              <Link to="/resume" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-black uppercase text-lg sm:text-xl border-4 border-black brutalist-shadow hover:bg-primary transition-colors flex items-center justify-center gap-2">
                View Resume <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: About */}
        <section className="section-padding border-b-4 border-black bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <Terminal size={48} className="text-primary hidden sm:block" />
              <Terminal size={36} className="text-primary sm:hidden" />
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter break-words">About Me</h2>
            </div>
            
            <div className="bg-white border-4 border-black p-6 sm:p-8 md:p-12 brutalist-shadow">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                I am a Software Engineer grounded in proven engineering traditions, currently pursuing my B.Tech in Information Technology. 
              </p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                I blend analytical focus with creative problem-solving to build scalable, client-centric applications aligned with AI-driven transformation goals. My focus is on creating tools that perform flawlessly and look exceptional.
              </p>
              <div className="mt-10">
                <Link to="/about" className="inline-flex items-center gap-2 font-black uppercase text-lg border-b-4 border-primary hover:text-primary transition-colors pb-1">
                  Read My Full Story <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Experience Highlights */}
        <section className="section-padding border-b-4 border-black bg-white">
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <Briefcase size={48} className="text-accent hidden sm:block" />
            <Briefcase size={36} className="text-accent sm:hidden" />
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter break-words">Experience</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white border-4 border-black p-8 brutalist-shadow hover:bg-accent transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white border-b-4 border-l-4 border-black transform translate-x-16 -translate-y-16 rotate-45 group-hover:bg-primary transition-colors"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h3 className="text-3xl font-black uppercase">Backend Developer</h3>
                  <p className="text-xl font-bold mt-2">RSUN Technologies</p>
                </div>
                <span className="bg-black text-white px-4 py-2 font-bold uppercase text-sm border-2 border-black">June 2026</span>
              </div>
              <ul className="space-y-4 mb-8 relative z-10">
                <li className="flex gap-4 items-start font-medium text-lg">
                  <div className="w-3 h-3 bg-black mt-2 flex-shrink-0"></div>
                  <span>Built scalable distributed backend with PHP & SQL, reducing latency by 30%.</span>
                </li>
                <li className="flex gap-4 items-start font-medium text-lg">
                  <div className="w-3 h-3 bg-black mt-2 flex-shrink-0"></div>
                  <span>Developed RESTful APIs to improve communication and system reliability by 40%.</span>
                </li>
              </ul>
              <Link to="/resume" className="inline-flex items-center gap-2 font-black uppercase bg-white border-4 border-black px-6 py-3 hover:bg-black hover:text-white transition-colors relative z-10">
                See Full Resume <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="bg-primary border-4 border-black p-8 brutalist-shadow flex flex-col justify-center items-center text-center">
              <h3 className="text-4xl font-black uppercase text-white mb-6">Looking for new opportunities?</h3>
              <Link to="/contact" className="px-8 py-4 bg-white text-black border-4 border-black font-black uppercase text-xl hover:bg-accent transition-colors">
                Hire Me Now
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Featured Projects */}
        <section className="section-padding border-b-4 border-black bg-gray-50">
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <Code size={48} className="text-primary hidden sm:block" />
            <Code size={36} className="text-primary sm:hidden" />
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter break-words">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <div className="bg-white border-4 border-black brutalist-shadow flex flex-col group">
              <div className="h-48 border-b-4 border-black bg-accent p-6 flex flex-col justify-between">
                <h3 className="text-3xl font-black uppercase line-clamp-2">PLANGO</h3>
                <span className="bg-white text-black font-bold uppercase px-3 py-1 border-2 border-black w-max">AI Trip Planner</span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-lg font-medium mb-6">
                  Scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Flask', 'Python-ML', 'SQLite'].map(tech => (
                    <span key={tech} className="bg-gray-200 border-2 border-black px-2 py-1 text-xs font-bold uppercase">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white border-4 border-black brutalist-shadow flex flex-col group">
              <div className="h-48 border-b-4 border-black bg-primary p-6 flex flex-col justify-between">
                <h3 className="text-3xl font-black uppercase text-white line-clamp-2">Geo Tagging System</h3>
                <span className="bg-white text-black font-bold uppercase px-3 py-1 border-2 border-black w-max">Issue Reporter</span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-lg font-medium mb-6">
                  Location-based complaint platform with real-time map integration, reducing issue reporting time by 50%.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'MySQL', 'Google Maps API'].map(tech => (
                    <span key={tech} className="bg-gray-200 border-2 border-black px-2 py-1 text-xs font-bold uppercase">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white border-4 border-black brutalist-shadow flex flex-col group">
              <div className="h-48 border-b-4 border-black bg-black p-6 flex flex-col justify-between">
                <h3 className="text-3xl font-black uppercase text-white line-clamp-2">Rock Paper Scissors</h3>
                <span className="bg-white text-black font-bold uppercase px-3 py-1 border-2 border-black w-max">Game</span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-lg font-medium mb-6">
                  Interactive command-line game with randomized logic and accurate win/loss tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'CLI'].map(tech => (
                    <span key={tech} className="bg-gray-200 border-2 border-black px-2 py-1 text-xs font-bold uppercase">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/blogs" className="inline-flex items-center gap-2 font-black uppercase text-2xl border-4 border-black px-8 py-4 bg-white brutalist-shadow hover:bg-accent transition-colors">
              View All Projects <ArrowRight size={24} />
            </Link>
          </div>
        </section>

        {/* Section 5: Education & Skills */}
        <section className="section-padding border-b-4 border-black bg-white">
          <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <GraduationCap size={48} className="text-accent hidden sm:block" />
            <GraduationCap size={36} className="text-accent sm:hidden" />
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter break-words">Education & Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 bg-primary border-4 border-black brutalist-shadow p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-black uppercase text-white mb-8 border-b-4 border-white pb-4">Education</h3>
              <div className="bg-white border-4 border-black p-6">
                <h4 className="text-2xl font-bold uppercase mb-2">B.Tech - Information Technology</h4>
                <p className="text-xl font-medium mb-4">M. Kumarasamy College of Engineering</p>
                <div className="flex justify-between items-center font-bold uppercase border-t-2 border-black pt-4">
                  <span>2024 - 2028</span>
                  <span className="bg-accent px-3 py-1 border-2 border-black">CGPA: 7.9</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7 bg-white border-4 border-black brutalist-shadow p-8">
              <h3 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-4">Tech Arsenal</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold uppercase mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'HTML', 'CSS', 'JavaScript'].map(skill => (
                      <span key={skill} className="bg-accent border-4 border-black px-4 py-2 font-bold uppercase text-lg">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-3">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Flask', 'GitHub', 'Git', 'MySQL', 'REST APIs'].map(skill => (
                      <span key={skill} className="bg-gray-100 border-4 border-black px-4 py-2 font-bold uppercase text-lg">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-black text-white border-4 border-black px-4 py-2 font-bold uppercase text-lg">GitHub Foundations</span>
                    <span className="bg-black text-white border-4 border-black px-4 py-2 font-bold uppercase text-lg">Finalist - SRMIST Hackathon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact / CTA */}
        <section className="section-padding bg-accent">
          <div className="max-w-4xl mx-auto text-center border-4 border-black bg-white p-6 sm:p-12 md:p-20 brutalist-shadow">
            <Mail size={64} className="mx-auto mb-6 sm:mb-8 text-primary" />
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 sm:mb-6 break-words">Let's Build Something Great</h2>
            <p className="text-lg sm:text-2xl font-medium mb-8 sm:mb-12">
              Ready to turn ideas into reality? Drop me a line and let's collaborate on your next project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a href="mailto:kpprithika75@gmail.com" className="px-6 sm:px-10 py-4 sm:py-5 bg-primary text-white font-black uppercase text-xl sm:text-2xl border-4 border-black brutalist-shadow hover:bg-black hover:text-white transition-colors">
                Email Me
              </a>
              <Link to="/contact" className="px-10 py-5 bg-white text-black font-black uppercase text-2xl border-4 border-black brutalist-shadow hover:bg-accent transition-colors">
                Contact Form
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
