
import { Folder, Search, Code2, FileText, GitBranch, Play, Settings, Package } from 'lucide-react';
import WindowHeader from './WindowHeader';

interface VSCodeAppProps {
  onClose: () => void;
}

const VSCodeApp = ({ onClose }: VSCodeAppProps) => (
  <div className="flex-1 bg-gray-900 h-full overflow-hidden rounded-lg">
    {/* VS Code Window */}
    <div className="bg-gray-900 shadow-2xl h-full flex flex-col">
      {/* Window Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <WindowHeader 
          title="portfolio.tsx - Visual Studio Code" 
          onClose={onClose}
          onMinimize={() => console.log('Minimize VSCode')}
          onMaximize={() => console.log('Maximize VSCode')}
        />
      </div>
      
      {/* VS Code Content */}
      <div className="flex h-full">
        {/* Activity Bar */}
        <div className="w-12 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-2 gap-3">
          <Folder className="text-white bg-gray-700 p-1 rounded" size={24} />
          <Search className="text-gray-400 hover:text-white cursor-pointer p-1" size={24} />
          <GitBranch className="text-gray-400 hover:text-white cursor-pointer p-1" size={24} />
          <Play className="text-gray-400 hover:text-white cursor-pointer p-1" size={24} />
          <Package className="text-gray-400 hover:text-white cursor-pointer p-1" size={24} />
        </div>
        
        {/* Sidebar */}
        <div className="w-56 bg-gray-800 border-r border-gray-700 flex flex-col">
          <div className="p-2 border-b border-gray-700">
            <div className="text-gray-300 text-xs font-semibold uppercase tracking-wide">Explorer</div>
          </div>
          <div className="flex-1 p-2">
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-gray-300 hover:bg-gray-700 p-1 rounded cursor-pointer">
                <span className="text-xs">▼</span>
                <Folder size={14} />
                <span className="text-sm">portfolio</span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center gap-1 text-gray-300 hover:bg-gray-700 p-1 rounded cursor-pointer">
                  <span className="text-xs">▼</span>
                  <Folder size={14} />
                  <span className="text-sm">src</span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex items-center gap-1 text-gray-300 hover:bg-gray-700 p-1 rounded cursor-pointer">
                    <span className="text-xs">▼</span>
                    <Folder size={14} />
                    <span className="text-sm">components</span>
                  </div>
                  <div className="ml-4 space-y-1">
                    <div className="flex items-center gap-1 text-blue-400 bg-gray-700 p-1 rounded">
                      <FileText size={14} />
                      <span className="text-sm">Hero.tsx</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300 hover:bg-gray-700 p-1 rounded cursor-pointer">
                      <FileText size={14} />
                      <span className="text-sm">About.tsx</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300 hover:bg-gray-700 p-1 rounded cursor-pointer">
                      <FileText size={14} />
                      <span className="text-sm">Resume.tsx</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-300 hover:bg-gray-700 p-1 rounded cursor-pointer">
                    <FileText size={14} />
                    <span className="text-sm">App.tsx</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Editor */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="bg-gray-800 border-b border-gray-700 flex">
            <div className="bg-gray-900 px-3 py-2 border-r border-gray-700 flex items-center gap-2">
              <FileText size={14} className="text-blue-400" />
              <span className="text-gray-300 text-sm">Hero.tsx</span>
              <button className="text-gray-500 hover:text-gray-300 ml-2">×</button>
            </div>
          </div>
          
          {/* Code Editor */}
          <div className="flex-1 bg-gray-900 p-4 font-mono text-sm overflow-auto">
            <div className="text-gray-300 leading-relaxed">
              <div className="flex">
                <div className="text-gray-500 text-right pr-4 select-none">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="text-purple-400">import</span>
                    <span className="text-white"> React </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400"> 'react'</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-purple-400">import</span>
                    <span className="text-white"> </span>
                    <span className="text-yellow-400">{'{ ChevronDown, Mail, Github, Linkedin }'}</span>
                    <span className="text-purple-400"> from</span>
                    <span className="text-green-400"> 'lucide-react'</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="mb-3"></div>
                  <div className="mb-1">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400"> Hero</span>
                    <span className="text-white"> = () =&gt; </span>
                    <span className="text-yellow-400">{'{'}</span>
                  </div>
                  <div className="mb-1 ml-4">
                    <span className="text-purple-400">return</span>
                    <span className="text-white"> (</span>
                  </div>
                  <div className="mb-1 ml-8">
                    <span className="text-gray-500">&lt;</span>
                    <span className="text-red-400">section</span>
                    <span className="text-blue-400"> className</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"min-h-screen flex items-center"</span>
                    <span className="text-gray-500">&gt;</span>
                  </div>
                  <div className="mb-1 ml-12">
                    <span className="text-gray-500">&lt;</span>
                    <span className="text-red-400">div</span>
                    <span className="text-blue-400"> className</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"container mx-auto px-6"</span>
                    <span className="text-gray-500">&gt;</span>
                  </div>
                  <div className="mb-1 ml-16">
                    <span className="text-gray-500">&lt;</span>
                    <span className="text-red-400">h1</span>
                    <span className="text-blue-400"> className</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"text-6xl font-bold"</span>
                    <span className="text-gray-500">&gt;</span>
                  </div>
                  <div className="mb-1 ml-20">
                    <span className="text-white">Prithika Kannan</span>
                  </div>
                  <div className="mb-1 ml-16">
                    <span className="text-gray-500">&lt;/</span>
                    <span className="text-red-400">h1</span>
                    <span className="text-gray-500">&gt;</span>
                  </div>
                  <div className="mb-1 ml-16">
                    <span className="text-gray-500">&lt;</span>
                    <span className="text-red-400">p</span>
                    <span className="text-blue-400"> className</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"text-xl text-gray-600"</span>
                    <span className="text-gray-500">&gt;</span>
                  </div>
                  <div className="mb-1 ml-20">
                    <span className="text-white">Full Stack Developer</span>
                  </div>
                  <div className="mb-1 ml-16">
                    <span className="text-gray-500">&lt;/</span>
                    <span className="text-red-400">p</span>
                    <span className="text-gray-500">&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="bg-blue-600 text-white px-4 py-1 text-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>main</span>
              <span>TypeScript React</span>
              <span>UTF-8</span>
              <span>LF</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Ln 16, Col 21</span>
              <span>Spaces: 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VSCodeApp;
