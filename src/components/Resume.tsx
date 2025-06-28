
import { GraduationCap, Briefcase, Award } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-300">My professional journey and achievements</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-white">Master of Computer Science</h4>
              <p className="text-gray-300">Stanford University</p>
              <p className="text-sm text-gray-400">2018 - 2020</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-white">Senior Frontend Developer</h4>
              <p className="text-gray-300">Tech Corp Inc.</p>
              <p className="text-sm text-gray-400">2020 - Present</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
