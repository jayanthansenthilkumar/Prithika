import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-black">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 md:mb-12 border-b-4 md:border-b-8 border-black pb-4">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter break-words">
            Resume
          </h1>
          <a href="/Resume_Prithika.pdf" download className="w-full md:w-auto text-center border-4 border-black bg-primary text-white font-black uppercase px-6 py-3 brutalist-shadow hover:bg-black transition-colors">
            Download PDF
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Experience Section */}
            <section>
              <h2 className="text-4xl font-black uppercase mb-8 inline-block bg-accent px-4 py-2 border-4 border-black">Industrial Experience</h2>
              
              <div className="bg-white border-4 border-black p-8 brutalist-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 border-b-4 border-black pb-4">
                  <div>
                    <h3 className="text-3xl font-black uppercase">Backend Developer</h3>
                    <p className="text-xl font-bold mt-1 text-primary">RSUN Technologies, Madurai</p>
                  </div>
                  <span className="bg-black text-white px-4 py-2 font-bold uppercase mt-4 sm:mt-0 border-2 border-black">June 2026</span>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start font-medium text-lg">
                    <div className="w-3 h-3 bg-black mt-2 flex-shrink-0"></div>
                    <span>Built scalable distributed backend with PHP & SQL, reducing latency by 30% and throughput.</span>
                  </li>
                  <li className="flex gap-4 items-start font-medium text-lg">
                    <div className="w-3 h-3 bg-black mt-2 flex-shrink-0"></div>
                    <span>Developed RESTful APIs to improve communication and system reliability by 40%.</span>
                  </li>
                  <li className="flex gap-4 items-start font-medium text-lg">
                    <div className="w-3 h-3 bg-black mt-2 flex-shrink-0"></div>
                    <span>Optimized queries and indexing, cutting processing time by 35% and enhancing performance.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-4xl font-black uppercase mb-8 inline-block bg-primary text-white px-4 py-2 border-4 border-black">Key Projects</h2>
              
              <div className="space-y-8">
                {/* Project 1 */}
                <div className="bg-white border-4 border-black p-8 brutalist-shadow">
                  <h3 className="text-2xl font-black uppercase mb-2">PLANGO - AI Trip Planner</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Flask', 'Python-ML', 'SQLite', 'JS'].map(t => (
                      <span key={t} className="bg-gray-100 border-2 border-black px-2 py-1 text-xs font-bold uppercase">{t}</span>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start font-medium text-lg">
                      <div className="w-2 h-2 bg-primary mt-2.5 flex-shrink-0"></div>
                      <span>Built a scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%.</span>
                    </li>
                    <li className="flex gap-3 items-start font-medium text-lg">
                      <div className="w-2 h-2 bg-primary mt-2.5 flex-shrink-0"></div>
                      <span>Engineered predictive models for traffic and time optimization, boosting user satisfaction by 35%.</span>
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="bg-white border-4 border-black p-8 brutalist-shadow">
                  <h3 className="text-2xl font-black uppercase mb-2">Geo Tagging Issue Reporting System</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Google Maps API'].map(t => (
                      <span key={t} className="bg-gray-100 border-2 border-black px-2 py-1 text-xs font-bold uppercase">{t}</span>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start font-medium text-lg">
                      <div className="w-2 h-2 bg-primary mt-2.5 flex-shrink-0"></div>
                      <span>Developed a geo-tagged issue reporting platform enabling users to submit location-based complaints with real-time map integration, reducing issue reporting time by 50%.</span>
                    </li>
                    <li className="flex gap-3 items-start font-medium text-lg">
                      <div className="w-2 h-2 bg-primary mt-2.5 flex-shrink-0"></div>
                      <span>Implemented role-based dashboards, status tracking, and database optimization, improving complaint resolution efficiency by 40%.</span>
                    </li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="bg-white border-4 border-black p-8 brutalist-shadow">
                  <h3 className="text-2xl font-black uppercase mb-2">Rock Paper Scissors Game</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-100 border-2 border-black px-2 py-1 text-xs font-bold uppercase">Python</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start font-medium text-lg">
                      <div className="w-2 h-2 bg-primary mt-2.5 flex-shrink-0"></div>
                      <span>Built an interactive command-line Rock Paper Scissors game using Python with randomized game logic, delivering accurate gameplay and win/loss tracking.</span>
                    </li>
                    <li className="flex gap-3 items-start font-medium text-lg">
                      <div className="w-2 h-2 bg-primary mt-2.5 flex-shrink-0"></div>
                      <span>Designed modular game logic and input validation, improving code maintainability by 35% and enhancing user experience.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar Column */}
          <div className="space-y-12">
            
            {/* Summary */}
            <section>
              <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Summary</h2>
              <p className="text-lg font-medium leading-relaxed bg-accent p-6 border-4 border-black brutalist-shadow">
                Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions. Skilled in distributed systems and full-stack development, I blend analytical focus with creative problem-solving to build scalable, client-centric applications aligned with AI-driven transformation goals.
              </p>
            </section>

            {/* Technical Highlights */}
            <section>
              <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Skills</h2>
              <div className="bg-white border-4 border-black p-6 brutalist-shadow space-y-6">
                <div>
                  <h4 className="text-xl font-bold uppercase mb-3 text-primary">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'HTML', 'CSS', 'JavaScript'].map(skill => (
                      <span key={skill} className="bg-black text-white px-3 py-1 font-bold uppercase">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-3 text-primary">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-black text-white px-3 py-1 font-bold uppercase">Flask</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-3 text-primary">Tools & Tech</h4>
                  <div className="flex flex-wrap gap-2">
                    {['GitHub', 'Git', 'MySQL', 'REST APIs'].map(skill => (
                      <span key={skill} className="bg-black text-white px-3 py-1 font-bold uppercase">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Education</h2>
              <div className="bg-white border-4 border-black p-6 brutalist-shadow">
                <h3 className="text-xl font-black uppercase">M. Kumarasamy College of Engineering</h3>
                <p className="text-lg font-bold mt-2 text-primary">B.Tech - Information Technology</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t-2 border-black font-bold">
                  <span>2024 - 2028</span>
                  <span>CGPA: 7.900</span>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Certifications</h2>
              <ul className="bg-white border-4 border-black p-6 brutalist-shadow space-y-4 font-bold text-lg">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent border-2 border-black"></div>
                  GitHub Foundations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary border-2 border-black"></div>
                  Finalist - SRMIST Hackathon
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resume;
