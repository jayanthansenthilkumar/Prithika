
import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Share, Bookmark, Plus, Search, Shield, Download } from 'lucide-react';
import WindowHeader from './WindowHeader';

interface SafariAppProps {
  onClose: () => void;
}

const SafariApp = ({ onClose }: SafariAppProps) => {
  const [currentUrl, setCurrentUrl] = useState('https://prithika-kannan-portfolio.com');
  const [loading, setLoading] = useState(false);

  const bookmarks = [
    'GitHub', 'LinkedIn', 'Dribbble', 'Behance', 'Stack Overflow'
  ];

  return (
    <div className="flex-1 bg-gray-100 relative">
      <WindowHeader 
        title="Safari" 
        onClose={onClose}
        onMinimize={() => console.log('Minimize')}
        onMaximize={() => console.log('Maximize')}
      />

      {/* Navigation Bar */}
      <div className="flex items-center gap-3 px-4 py-2 bg-white border-b border-gray-200">
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-50" disabled>
            <ArrowLeft size={16} className="text-gray-600" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-50" disabled>
            <ArrowRight size={16} className="text-gray-600" />
          </button>
          <button 
            className="p-1 rounded hover:bg-gray-100"
            onClick={() => setLoading(true)}
          >
            <RotateCcw size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex-1 relative">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <Shield size={14} className="text-green-500 mr-2" />
            <input
              type="text"
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none text-gray-700"
            />
            <Search size={14} className="text-gray-400 ml-2" />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-gray-100">
            <Bookmark size={16} className="text-gray-600" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <Share size={16} className="text-gray-600" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <Download size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Bookmarks Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border-b border-gray-200">
        <button className="p-1 rounded hover:bg-gray-200">
          <Plus size={14} className="text-gray-600" />
        </button>
        {bookmarks.map((bookmark) => (
          <button
            key={bookmark}
            className="px-3 py-1 text-xs bg-white rounded border hover:bg-gray-100 transition-colors"
          >
            {bookmark}
          </button>
        ))}
      </div>
      
      {/* Website Content */}
      <div className="flex-1 bg-white overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">PK</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Prithika Kannan</h1>
            <p className="text-xl text-gray-600 mb-8">Full Stack Developer & UI/UX Designer</p>
            
            <div className="flex justify-center gap-4 mb-8">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                View Projects
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Download Resume
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Frontend</h3>
              <div className="space-y-2">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Backend</h3>
              <div className="space-y-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Design</h3>
              <div className="space-y-2">
                {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">Full-stack e-commerce solution with React, Node.js, and PostgreSQL.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">PostgreSQL</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">Collaborative task management with real-time updates and team features.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Vue.js</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariApp;
