
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Briefcase, Award, Heart, Download, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold gradient-text mb-6">Resume</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A comprehensive overview of my professional journey, skills, and achievements in software development.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </div>
          
          {/* Main Content with Tabs */}
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <TabsTrigger 
                value="experience" 
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                <Briefcase size={16} />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger 
                value="education"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                <GraduationCap size={16} />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger 
                value="skills"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                <Award size={16} />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
              <TabsTrigger 
                value="projects"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                <Heart size={16} />
                <span className="hidden sm:inline">Projects</span>
              </TabsTrigger>
            </TabsList>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-8 animate-fade-in">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">Professional Experience</h2>
                
                <div className="space-y-8">
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">Senior Full Stack Developer</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl text-blue-400 font-semibold">Tech Innovation Corp</span>
                            <ExternalLink size={16} className="text-gray-400" />
                          </div>
                          <div className="flex items-center gap-4 text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>Jan 2022 - Present</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>San Francisco, CA</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                          Leading a team of 8 developers in building scalable web applications using modern technologies. 
                          Responsible for architecture decisions, code reviews, and mentoring junior developers.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Increased application performance by 60% through optimization</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Led migration from legacy systems to modern React architecture</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Implemented CI/CD pipelines reducing deployment time by 80%</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-medium">React</span>
                              <span className="px-3 py-1.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-sm font-medium">Node.js</span>
                              <span className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-sm font-medium">TypeScript</span>
                              <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full text-sm font-medium">AWS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl text-green-400 font-semibold">Digital Solutions Inc</span>
                            <ExternalLink size={16} className="text-gray-400" />
                          </div>
                          <div className="flex items-center gap-4 text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>Jun 2020 - Dec 2021</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>Remote</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                          Developed responsive web applications for various clients, focusing on user experience 
                          and modern design principles. Collaborated closely with design teams and backend developers.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Responsibilities:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Built 15+ client websites using React and Vue.js</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Implemented responsive designs with Tailwind CSS</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span>Integrated third-party APIs and payment systems</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full text-sm font-medium">Vue.js</span>
                              <span className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-full text-sm font-medium">JavaScript</span>
                              <span className="px-3 py-1.5 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full text-sm font-medium">Sass</span>
                              <span className="px-3 py-1.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full text-sm font-medium">Firebase</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-8 animate-fade-in">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">Education</h2>
                
                <div className="space-y-8">
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">Master of Science in Computer Science</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl text-blue-400 font-semibold">Stanford University</span>
                          </div>
                          <div className="flex items-center gap-4 text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>2018 - 2020</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>Stanford, CA</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold gradient-text">3.8 GPA</div>
                          <div className="text-sm text-gray-400">Magna Cum Laude</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                          Specialized in Software Engineering and Human-Computer Interaction. 
                          Focused on modern web technologies, distributed systems, and user experience design.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">Algorithms</span>
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">Data Structures</span>
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">Machine Learning</span>
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">HCI Design</span>
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">Distributed Systems</span>
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">Database Systems</span>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Thesis Project:</h4>
                            <div className="bg-gray-700/30 rounded-lg p-4">
                              <h5 className="font-semibold text-white mb-2">"Optimizing User Interfaces for Accessibility"</h5>
                              <p className="text-gray-300 text-sm">
                                Research on improving web accessibility through automated testing 
                                and AI-powered design suggestions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Science in Computer Engineering</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl text-green-400 font-semibold">University of California, Berkeley</span>
                          </div>
                          <div className="flex items-center gap-4 text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>2014 - 2018</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>Berkeley, CA</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold gradient-text">3.7 GPA</div>
                          <div className="text-sm text-gray-400">Dean's List - 6 semesters</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                          Strong foundation in computer science fundamentals, software development, 
                          and engineering principles with focus on practical applications.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Core Subjects:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">Programming</span>
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">Software Engineering</span>
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">Computer Networks</span>
                              <span className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm text-center">Operating Systems</span>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Capstone Project:</h4>
                            <div className="bg-gray-700/30 rounded-lg p-4">
                              <h5 className="font-semibold text-white mb-2">"Real-time Chat Application"</h5>
                              <p className="text-gray-300 text-sm">
                                Built a full-stack chat application with real-time messaging, 
                                user authentication, and file sharing capabilities.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-8 animate-fade-in">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">Technical Skills</h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></span>
                        Frontend Development
                      </h3>
                      <div className="space-y-6">
                        {[
                          { name: "React.js", level: 95, color: "from-blue-500 to-blue-600" },
                          { name: "TypeScript", level: 90, color: "from-blue-600 to-indigo-600" },
                          { name: "Next.js", level: 85, color: "from-gray-600 to-gray-700" },
                          { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-teal-500" },
                          { name: "Vue.js", level: 80, color: "from-green-500 to-emerald-500" }
                        ].map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-300">{skill.name}</span>
                              <span className="text-sm text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-3 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded"></span>
                        Backend Development
                      </h3>
                      <div className="space-y-6">
                        {[
                          { name: "Node.js", level: 88, color: "from-green-500 to-green-600" },
                          { name: "Python", level: 85, color: "from-yellow-500 to-yellow-600" },
                          { name: "PostgreSQL", level: 82, color: "from-blue-700 to-indigo-700" },
                          { name: "MongoDB", level: 78, color: "from-green-600 to-green-700" },
                          { name: "GraphQL", level: 80, color: "from-pink-500 to-rose-500" }
                        ].map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-300">{skill.name}</span>
                              <span className="text-sm text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gradient-border card-hover">
                  <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></span>
                      Tools & Technologies
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {[
                        "Git", "Docker", "AWS", "Figma", "Jest", "Webpack", 
                        "Redux", "Vite", "Jenkins", "Kubernetes", "Linux", "VS Code"
                      ].map((tool) => (
                        <div key={tool} className="group">
                          <div className="bg-gray-700/50 hover:bg-gray-600/50 transition-all duration-300 rounded-lg p-4 text-center border border-gray-600/30 hover:border-purple-500/50">
                            <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{tool}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                      <div className="text-gray-300">Projects Completed</div>
                    </div>
                  </div>
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                      <div className="text-gray-300">Years Experience</div>
                    </div>
                  </div>
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                      <div className="text-gray-300">Technologies Mastered</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-8 animate-fade-in">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">Featured Projects</h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">E-Commerce Platform</h3>
                        <ExternalLink size={20} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        A full-stack e-commerce solution with real-time inventory management, 
                        payment processing, and admin dashboard. Built for scalability and performance.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Real-time inventory tracking</li>
                            <li>• Stripe payment integration</li>
                            <li>• Advanced search and filtering</li>
                            <li>• Admin analytics dashboard</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-xs">React</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-xs">Node.js</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-xs">MongoDB</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full text-xs">Stripe</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">Task Management App</h3>
                        <ExternalLink size={20} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        A collaborative project management tool with real-time updates, 
                        team collaboration features, and advanced reporting capabilities.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Real-time collaboration</li>
                            <li>• Drag & drop task management</li>
                            <li>• Team chat integration</li>
                            <li>• Progress analytics</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full text-xs">Vue.js</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-xs">Laravel</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-xs">MySQL</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-xs">Socket.io</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">Weather Analytics Dashboard</h3>
                        <ExternalLink size={20} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        A comprehensive weather data visualization platform with predictive analytics, 
                        historical data comparison, and custom reporting features.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Interactive data visualizations</li>
                            <li>• ML-powered predictions</li>
                            <li>• Custom alert system</li>
                            <li>• Historical data analysis</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full text-xs">React</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full text-xs">Python</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-xs">D3.js</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-full text-xs">TensorFlow</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border card-hover">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">Portfolio Website</h3>
                        <ExternalLink size={20} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        A modern, responsive portfolio website showcasing my work with smooth animations, 
                        dark mode support, and optimized performance.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Responsive design</li>
                            <li>• Smooth animations</li>
                            <li>• SEO optimized</li>
                            <li>• Fast loading performance</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full text-xs">Next.js</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-xs">TypeScript</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full text-xs">Tailwind</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-xs">Framer Motion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resume;
