
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Briefcase, Award, Heart, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Award },
    { id: "volunteering", label: "Volunteering", icon: Heart },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Senior Frontend Developer</h3>
                  <p className="text-lg text-blue-600 font-semibold">Tech Corp Inc.</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span>2020 - Present</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Led a team of 5 developers in building responsive web applications</li>
                <li>Implemented modern React patterns and best practices</li>
                <li>Improved application performance by 40% through optimization</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Frontend Developer</h3>
                  <p className="text-lg text-green-600 font-semibold">Digital Solutions Ltd.</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span>2018 - 2020</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Developed and maintained multiple client websites</li>
                <li>Collaborated with designers to implement pixel-perfect UIs</li>
                <li>Integrated RESTful APIs and third-party services</li>
                <li>Participated in agile development processes</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Junior Web Developer</h3>
                  <p className="text-lg text-purple-600 font-semibold">StartUp Hub</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span>2017 - 2018</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Built responsive websites using HTML, CSS, and JavaScript</li>
                <li>Learned modern development tools and frameworks</li>
                <li>Assisted in debugging and testing applications</li>
                <li>Participated in team meetings and project planning</li>
              </ul>
            </div>
          </div>
        );
        
      case "education":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Master of Computer Science</h3>
                  <p className="text-lg text-blue-600 font-semibold">Stanford University</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span>2018 - 2020</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Specialized in Software Engineering and Human-Computer Interaction. 
                Graduated Magna Cum Laude with a GPA of 3.8/4.0.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Algorithms</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Structures</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">HCI</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bachelor of Science in Computer Engineering</h3>
                  <p className="text-lg text-green-600 font-semibold">University of California, Berkeley</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span>2014 - 2018</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Foundation in computer science fundamentals, software development, 
                and engineering principles. Dean's List for 6 semesters.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Programming</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Software Engineering</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Database Systems</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Computer Networks</span>
              </div>
            </div>
          </div>
        );
        
      case "skills":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Frontend Technologies</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">React.js</span>
                      <span className="text-blue-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">TypeScript</span>
                      <span className="text-blue-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">Tailwind CSS</span>
                      <span className="text-blue-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Backend Technologies</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">Node.js</span>
                      <span className="text-green-600">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">Python</span>
                      <span className="text-green-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">PostgreSQL</span>
                      <span className="text-green-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Git</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Docker</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">AWS</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Figma</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Jest</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Webpack</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Redux</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">GraphQL</span>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "volunteering":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Volunteering & Community</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Code Mentor</h3>
                  <p className="text-lg text-red-600 font-semibold">CodePath.org</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span>2019 - Present</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Mentoring underrepresented students in software engineering, 
                helping them prepare for technical interviews and career opportunities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Conducted weekly 1-on-1 mentoring sessions</li>
                <li>Reviewed resumes and provided career guidance</li>
                <li>Hosted coding workshops and technical talks</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Open Source Contributor</h3>
                  <p className="text-lg text-blue-600 font-semibold">Various Projects</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span>2018 - Present</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Active contributor to open source projects, focusing on 
                accessibility improvements and documentation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>50+ merged pull requests across various repositories</li>
                <li>Maintained accessibility-focused React component library</li>
                <li>Improved documentation for developer tools</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Tech Workshop Instructor</h3>
                  <p className="text-lg text-green-600 font-semibold">Local Community Center</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span>2020 - Present</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Teaching basic web development skills to community members 
                looking to transition into tech careers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Designed curriculum for beginner web development</li>
                <li>Taught HTML, CSS, and JavaScript fundamentals</li>
                <li>Helped 20+ students build their first websites</li>
              </ul>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Resume</h1>
            <p className="text-xl text-gray-600 mb-8">My professional journey and qualifications</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download size={16} className="mr-2" />
              Download PDF Resume
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          activeTab === tab.id
                            ? "bg-blue-600 text-white shadow-lg"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="animate-fade-in">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resume;
