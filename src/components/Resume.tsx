
import { GraduationCap, Briefcase, Award } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600">My professional journey and achievements</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">Master of Computer Science</h4>
              <p className="text-gray-600">Stanford University</p>
              <p className="text-sm text-gray-500">2018 - 2020</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">Senior Frontend Developer</h4>
              <p className="text-gray-600">Tech Corp Inc.</p>
              <p className="text-sm text-gray-500">2020 - Present</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
