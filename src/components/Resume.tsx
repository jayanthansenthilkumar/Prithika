
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Trophy, Code2, BookOpen } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="text-purple-400" size={36} />
            <h2 className="text-5xl font-bold gradient-text">Journey Book</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey, achievements, and the path that led me to where I am today
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="gradient-border card-hover">
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="text-left">
                    <h4 className="font-semibold text-white text-lg">Master of Computer Science</h4>
                    <p className="text-purple-400 font-medium">Stanford University</p>
                    <div className="flex items-center gap-2 text-gray-400 mt-2">
                      <Calendar size={16} />
                      <span>2018 - 2020</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                      <MapPin size={16} />
                      <span>California, USA</span>
                    </div>
                    <p className="text-gray-300 mt-3 text-sm">
                      Specialized in Software Engineering and AI. Graduated Magna Cum Laude.
                    </p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-white text-lg">Bachelor of Science</h4>
                    <p className="text-blue-400 font-medium">MIT</p>
                    <div className="flex items-center gap-2 text-gray-400 mt-2">
                      <Calendar size={16} />
                      <span>2014 - 2018</span>
                    </div>
                    <p className="text-gray-300 mt-3 text-sm">
                      Computer Science with focus on Web Technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="gradient-border card-hover">
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-gradient-to-br from-green-600 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-6">Experience</h3>
                <div className="space-y-6">
                  <div className="text-left">
                    <h4 className="font-semibold text-white text-lg">Senior Full Stack Developer</h4>
                    <p className="text-green-400 font-medium">Tech Corp Inc.</p>
                    <div className="flex items-center gap-2 text-gray-400 mt-2">
                      <Calendar size={16} />
                      <span>2021 - Present</span>
                    </div>
                    <p className="text-gray-300 mt-3 text-sm">
                      Lead development of enterprise applications serving 1M+ users.
                    </p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-white text-lg">Frontend Developer</h4>
                    <p className="text-teal-400 font-medium">Digital Agency</p>
                    <div className="flex items-center gap-2 text-gray-400 mt-2">
                      <Calendar size={16} />
                      <span>2020 - 2021</span>
                    </div>
                    <p className="text-gray-300 mt-3 text-sm">
                      Developed responsive web applications for Fortune 500 clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="gradient-border card-hover">
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-6">Skills & Awards</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full text-sm font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full text-sm font-medium">AWS</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full text-sm font-medium">Docker</span>
                  </div>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-center gap-2 text-left">
                      <Trophy size={16} className="text-yellow-400" />
                      <span className="text-gray-300 text-sm">Developer of the Year 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-left">
                      <Code2 size={16} className="text-blue-400" />
                      <span className="text-gray-300 text-sm">AWS Certified Solutions Architect</span>
                    </div>
                    <div className="flex items-center gap-2 text-left">
                      <Award size={16} className="text-purple-400" />
                      <span className="text-gray-300 text-sm">Google Cloud Professional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold gradient-text text-center mb-12">Career Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right">
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <h4 className="font-bold text-white text-lg">Started Programming</h4>
                      <p className="text-gray-400">2014</p>
                      <p className="text-gray-300 mt-2">Wrote my first "Hello World" in Python</p>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full border-4 border-gray-900 z-10"></div>
                <div className="w-5/12 text-left">
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <h4 className="font-bold text-white text-lg">First Job</h4>
                      <p className="text-gray-400">2020</p>
                      <p className="text-gray-300 mt-2">Junior Developer at Digital Agency</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right">
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <h4 className="font-bold text-white text-lg">Senior Role</h4>
                      <p className="text-gray-400">2023</p>
                      <p className="text-gray-300 mt-2">Promoted to Senior Full Stack Developer</p>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-teal-600 rounded-full border-4 border-gray-900 z-10"></div>
                <div className="w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
