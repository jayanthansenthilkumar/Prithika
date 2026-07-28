import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Terminal, Briefcase, Code, GraduationCap, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen text-black font-sans selection:bg-yellow selection:text-black">
      <Navbar />
      
      <main className="pt-20">
        
        {/* Section 1: Hero */}
        <section className="section-padding min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
          
          {/* Decorative Neo-Brutalist Shapes */}
          <div className="absolute top-20 right-10 md:right-32 w-24 h-24 bg-green border-[3px] border-black brutalist-shadow rounded-3xl -z-10 animate-bounce delay-75">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
          </div>
          <div className="absolute bottom-20 left-10 md:left-24 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-blue drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] -z-10 transform -rotate-12">
            <div className="absolute top-10 -left-12 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-black -z-20"></div>
          </div>
          <div className="absolute top-1/2 right-1/4 w-16 h-32 bg-red border-[3px] border-black rounded-r-full brutalist-shadow -z-10 hidden lg:block"></div>
          <div className="absolute top-10 left-10 opacity-30 -z-10 hidden md:block">
            <div className="w-32 h-32 grid grid-cols-4 grid-rows-4 gap-1">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="border border-black bg-yellow"></div>
              ))}
            </div>
          </div>

          <div className="z-10 max-w-5xl relative">
            <div className="inline-block bg-white border-[3px] border-black rounded-full px-6 py-2 mb-6 brutalist-shadow transform -rotate-2">
              <span className="text-xl font-bold">Hello, I am</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tight leading-none mb-6 break-words">
              Prithika <br/> <span className="text-red">Kannan</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-bold max-w-2xl mb-10 bg-white border-[3px] border-black p-4 rounded-3xl brutalist-shadow">
              Product-focused Software Engineer crafting <span className="text-blue">data-driven experiences</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-yellow text-black font-bold text-xl border-[3px] border-black rounded-full brutalist-shadow hover:bg-white hover:-translate-y-1 transition-all text-center">
                Let's Talk!
              </Link>
              <Link to="/resume" className="px-8 py-4 bg-white text-black font-bold text-xl border-[3px] border-black rounded-full brutalist-shadow hover:bg-green hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                See what I did
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: About */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red border-[3px] border-black rounded-full brutalist-shadow">
                <Terminal size={32} className="text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">About Me</h2>
            </div>
            
            <div className="bg-white border-[3px] border-black p-6 sm:p-8 md:p-12 rounded-3xl brutalist-shadow">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                I am a Software Engineer grounded in proven engineering traditions, currently pursuing my B.Tech in Information Technology. 
              </p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                I blend analytical focus with creative problem-solving to build scalable, client-centric applications aligned with AI-driven transformation goals.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 font-bold text-lg bg-yellow px-6 py-2 border-[3px] border-black rounded-full brutalist-shadow hover:-translate-y-1 transition-all">
                Read My Full Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Experience */}
        <section className="section-padding">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue border-[3px] border-black rounded-full brutalist-shadow">
              <Briefcase size={32} className="text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">Experience</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="bg-white border-[3px] border-black p-8 rounded-3xl brutalist-shadow hover:-translate-y-2 transition-transform">
              <div className="flex flex-col gap-4 mb-6 relative z-10">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-black">Backend Developer</h3>
                  <span className="bg-yellow px-4 py-1 font-bold rounded-full border-[3px] border-black brutalist-shadow text-sm transform rotate-3">June 2026</span>
                </div>
                <p className="text-xl font-bold text-red">RSUN Technologies</p>
              </div>
              <ul className="space-y-4 mb-8 relative z-10">
                <li className="flex gap-4 items-start font-medium text-lg">
                  <div className="w-3 h-3 bg-blue rounded-full mt-2 flex-shrink-0 border-2 border-black"></div>
                  <span>Built scalable distributed backend with PHP & SQL, reducing latency by 30%.</span>
                </li>
                <li className="flex gap-4 items-start font-medium text-lg">
                  <div className="w-3 h-3 bg-green rounded-full mt-2 flex-shrink-0 border-2 border-black"></div>
                  <span>Developed RESTful APIs to improve communication and system reliability by 40%.</span>
                </li>
              </ul>
              <Link to="/resume" className="inline-flex items-center gap-2 font-bold bg-white border-[3px] border-black px-6 py-3 rounded-full hover:bg-blue hover:text-white brutalist-shadow transition-colors">
                Full Resume <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="bg-green border-[3px] border-black p-8 rounded-3xl brutalist-shadow flex flex-col justify-center items-center text-center">
              <h3 className="text-4xl font-black text-black mb-6">Looking for new opportunities?</h3>
              <Link to="/contact" className="px-8 py-4 bg-white text-black border-[3px] border-black rounded-full font-bold text-xl brutalist-shadow hover:bg-yellow transition-colors transform -rotate-2">
                Hire Me Now
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Projects */}
        <section className="section-padding">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-yellow border-[3px] border-black rounded-full brutalist-shadow">
              <Code size={32} className="text-black" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <div className="bg-white border-[3px] border-black rounded-3xl brutalist-shadow flex flex-col overflow-hidden hover:-translate-y-2 transition-transform">
              <div className="h-48 border-b-[3px] border-black bg-blue p-6 flex flex-col justify-between relative">
                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow border-2 border-black"></div>
                </div>
                <h3 className="text-3xl font-black text-white leading-tight">PLANGO</h3>
                <span className="bg-white text-black font-bold px-4 py-1 rounded-full border-[3px] border-black w-max brutalist-shadow">AI Trip Planner</span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <p className="text-lg font-medium mb-6">
                  Scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Flask', 'Python', 'SQLite'].map(tech => (
                    <span key={tech} className="bg-cream border-[2px] border-black rounded-full px-3 py-1 text-sm font-bold">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white border-[3px] border-black rounded-3xl brutalist-shadow flex flex-col overflow-hidden hover:-translate-y-2 transition-transform">
              <div className="h-48 border-b-[3px] border-black bg-red p-6 flex flex-col justify-between relative">
                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                  <div className="w-3 h-3 rounded-full bg-green border-2 border-black"></div>
                </div>
                <h3 className="text-3xl font-black text-white leading-tight">Geo Tagging</h3>
                <span className="bg-white text-black font-bold px-4 py-1 rounded-full border-[3px] border-black w-max brutalist-shadow">Issue Reporter</span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <p className="text-lg font-medium mb-6">
                  Location-based complaint platform with real-time map integration, reducing issue reporting time by 50%.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'MySQL', 'Maps API'].map(tech => (
                    <span key={tech} className="bg-cream border-[2px] border-black rounded-full px-3 py-1 text-sm font-bold">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white border-[3px] border-black rounded-3xl brutalist-shadow flex flex-col overflow-hidden hover:-translate-y-2 transition-transform">
              <div className="h-48 border-b-[3px] border-black bg-green p-6 flex flex-col justify-between relative">
                 <div className="absolute top-2 right-2 flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                  <div className="w-3 h-3 rounded-full bg-red border-2 border-black"></div>
                </div>
                <h3 className="text-3xl font-black text-black leading-tight">Rock Paper Scissors</h3>
                <span className="bg-white text-black font-bold px-4 py-1 rounded-full border-[3px] border-black w-max brutalist-shadow">Game</span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <p className="text-lg font-medium mb-6">
                  Interactive command-line game with randomized logic and accurate win/loss tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'CLI'].map(tech => (
                    <span key={tech} className="bg-cream border-[2px] border-black rounded-full px-3 py-1 text-sm font-bold">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/blogs" className="inline-flex items-center gap-2 font-bold text-xl border-[3px] border-black rounded-full px-8 py-4 bg-yellow brutalist-shadow hover:-translate-y-1 transition-transform">
              View All Projects <ArrowRight size={24} />
            </Link>
          </div>
        </section>

        {/* Section 5: Education & Skills */}
        <section className="section-padding">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red border-[3px] border-black rounded-full brutalist-shadow">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">Education & Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 bg-blue border-[3px] border-black rounded-3xl brutalist-shadow p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-black text-white mb-6">Education</h3>
              <div className="bg-white border-[3px] border-black rounded-3xl p-6 brutalist-shadow transform rotate-1">
                <h4 className="text-2xl font-bold mb-2">B.Tech - IT</h4>
                <p className="text-lg font-medium mb-4">M. Kumarasamy College</p>
                <div className="flex justify-between items-center font-bold border-t-[3px] border-black pt-4">
                  <span>2024 - 2028</span>
                  <span className="bg-yellow px-3 py-1 rounded-full border-[2px] border-black brutalist-shadow text-sm">CGPA: 7.9</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7 bg-white border-[3px] border-black rounded-3xl brutalist-shadow p-8">
              <h3 className="text-3xl font-black mb-6 border-b-[3px] border-black pb-4">Tech Arsenal</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-red">Languages</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'HTML', 'CSS', 'JavaScript'].map(skill => (
                      <span key={skill} className="bg-white border-[3px] border-black rounded-full px-4 py-2 font-bold text-lg brutalist-shadow hover:bg-yellow transition-colors">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Flask', 'GitHub', 'Git', 'MySQL', 'REST APIs'].map(skill => (
                      <span key={skill} className="bg-cream border-[3px] border-black rounded-full px-4 py-2 font-bold text-lg hover:bg-green transition-colors">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center border-[3px] border-black rounded-[3rem] bg-yellow p-8 sm:p-12 md:p-20 brutalist-shadow">
            <div className="inline-block p-6 bg-white border-[3px] border-black rounded-full mb-6 brutalist-shadow transform -rotate-6">
              <Mail size={48} className="text-black" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 break-words">Let's Build Something!</h2>
            <p className="text-lg sm:text-xl font-medium mb-10 bg-white border-[3px] border-black rounded-3xl p-4 inline-block brutalist-shadow">
              Ready to turn ideas into reality? Drop me a line!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a href="mailto:kpprithika75@gmail.com" className="px-6 sm:px-10 py-4 bg-red text-white font-bold text-xl sm:text-2xl border-[3px] border-black rounded-full brutalist-shadow hover:bg-white hover:text-black transition-colors transform rotate-2">
                Email Me
              </a>
              <Link to="/contact" className="px-6 sm:px-10 py-4 bg-white text-black font-bold text-xl sm:text-2xl border-[3px] border-black rounded-full brutalist-shadow hover:bg-blue hover:text-white transition-colors transform -rotate-2">
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
