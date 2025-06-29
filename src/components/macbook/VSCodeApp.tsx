
import { Folder, Search, Code2 } from 'lucide-react';

interface VSCodeAppProps {
  onClose: () => void;
}

const VSCodeApp = ({ onClose }: VSCodeAppProps) => (
  <div className="flex-1 bg-gray-900">
    {/* VS Code Window */}
    <div className="bg-gray-900 rounded-t-xl shadow-2xl h-full">
      {/* Window Controls */}
      <div className="flex items-center justify-between p-4 bg-gray-800 rounded-t-xl border-b border-gray-700">
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></button>
          <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"></button>
          <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></button>
        </div>
        <div className="text-gray-300 text-sm">portfolio.tsx - Visual Studio Code</div>
      </div>
      
      {/* VS Code Content */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 gap-4">
          <Folder className="text-gray-400 hover:text-white cursor-pointer" size={20} />
          <Search className="text-gray-400 hover:text-white cursor-pointer" size={20} />
          <Code2 className="text-blue-400" size={20} />
        </div>
        
        {/* Code Editor */}
        <div className="flex-1 bg-gray-900 p-4 font-mono text-sm">
          <div className="text-gray-300">
            <div className="mb-2">
              <span className="text-purple-400">import</span>
              <span className="text-white"> React </span>
              <span className="text-purple-400">from</span>
              <span className="text-green-400"> 'react'</span>
              <span className="text-white">;</span>
            </div>
            <div className="mb-2">
              <span className="text-purple-400">import</span>
              <span className="text-white"> </span>
              <span className="text-yellow-400">{'{ Hero, About, Resume }'}</span>
              <span className="text-purple-400"> from</span>
              <span className="text-green-400"> './components'</span>
              <span className="text-white">;</span>
            </div>
            <div className="mb-4"></div>
            <div className="mb-2">
              <span className="text-purple-400">const</span>
              <span className="text-blue-400"> Portfolio</span>
              <span className="text-white"> = () =&gt; </span>
              <span className="text-yellow-400">{'{'}</span>
            </div>
            <div className="mb-2 ml-4">
              <span className="text-purple-400">return</span>
              <span className="text-white"> (</span>
            </div>
            <div className="mb-2 ml-8">
              <span className="text-gray-500">&lt;</span>
              <span className="text-red-400">div</span>
              <span className="text-gray-500">&gt;</span>
            </div>
            <div className="mb-2 ml-12">
              <span className="text-gray-500">&lt;</span>
              <span className="text-red-400">Hero</span>
              <span className="text-gray-500"> /&gt;</span>
            </div>
            <div className="mb-2 ml-12">
              <span className="text-gray-500">&lt;</span>
              <span className="text-red-400">About</span>
              <span className="text-gray-500"> /&gt;</span>
            </div>
            <div className="mb-2 ml-12">
              <span className="text-gray-500">&lt;</span>
              <span className="text-red-400">Resume</span>
              <span className="text-gray-500"> /&gt;</span>
            </div>
            <div className="mb-2 ml-8">
              <span className="text-gray-500">&lt;/</span>
              <span className="text-red-400">div</span>
              <span className="text-gray-500">&gt;</span>
            </div>
            <div className="mb-2 ml-4">
              <span className="text-white">);</span>
            </div>
            <div className="mb-2">
              <span className="text-yellow-400">{'}'}</span>
              <span className="text-white">;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VSCodeApp;
