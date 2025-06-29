import { useState, useEffect } from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Volume2, 
  Search, 
  Calendar,
  Mail,
  MessageCircle,
  Camera,
  Music,
  Settings,
  Globe,
  Code2,
  Folder,
  Image,
  Monitor,
  Terminal,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  X,
  Minus,
  Maximize2
} from 'lucide-react';

const MacBookScreen = () => {
  const [time, setTime] = useState(new Date());
  const [currentApp, setCurrentApp] = useState('desktop');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dockApps = [
    { id: 'finder', name: 'Finder', icon: Folder, color: 'bg-blue-500' },
    { id: 'safari', name: 'Safari', icon: Globe, color: 'bg-blue-400' },
    { id: 'messages', name: 'Messages', icon: MessageCircle, color: 'bg-green-500' },
    { id: 'mail', name: 'Mail', icon: Mail, color: 'bg-blue-600' },
    { id: 'music', name: 'Music', icon: Music, color: 'bg-red-500' },
    { id: 'photos', name: 'Photos', icon: Image, color: 'bg-yellow-500' },
    { id: 'vscode', name: 'VS Code', icon: Code2, color: 'bg-blue-700' },
    { id: 'terminal', name: 'Terminal', icon: Terminal, color: 'bg-gray-800' },
    { id: 'settings', name: 'System Settings', icon: Settings, color: 'bg-gray-500' }
  ];

  const musicTracks = [
    { title: 'Coding Flow', artist: 'Lo-Fi Beats', duration: '3:42' },
    { title: 'Debug Symphony', artist: 'Electronic Vibes', duration: '4:15' },
    { title: 'React Harmony', artist: 'Dev Sounds', duration: '3:28' }
  ];

  const renderDesktop = () => (
    <div 
      className="flex-1 relative"
      style={{
        backgroundImage: `linear-gradient(135deg, 
          rgba(99, 102, 241, 0.8) 0%, 
          rgba(139, 92, 246, 0.8) 25%, 
          rgba(236, 72, 153, 0.8) 50%, 
          rgba(16, 185, 129, 0.8) 75%, 
          rgba(245, 158, 11, 0.8) 100%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="3" fill="white" opacity="0.15"/><circle cx="60" cy="80" r="1" fill="white" opacity="0.2"/></svg>')`
      }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-6 right-6 space-y-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-700/80 rounded-2xl flex items-center justify-center mb-2 hover:bg-gray-600/80 transition-colors cursor-pointer">
            <Folder className="text-white" size={32} />
          </div>
          <span className="text-white text-xs font-medium">Portfolio</span>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/80 rounded-2xl flex items-center justify-center mb-2 hover:bg-red-400/80 transition-colors cursor-pointer">
            <Image className="text-white" size={32} />
          </div>
          <span className="text-white text-xs font-medium">Projects</span>
        </div>
      </div>

      {/* Floating Window - Control Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-6 w-80 shadow-2xl border border-gray-700/50">
          <h3 className="text-white font-semibold mb-4 text-center">Control Center</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500/20 rounded-2xl p-4 text-center">
              <Wifi className="text-blue-400 mx-auto mb-2" size={24} />
              <span className="text-white text-sm">Wi-Fi</span>
            </div>
            <div className="bg-green-500/20 rounded-2xl p-4 text-center">
              <Volume2 className="text-green-400 mx-auto mb-2" size={24} />
              <span className="text-white text-sm">Sound</span>
            </div>
            <div className="bg-purple-500/20 rounded-2xl p-4 text-center">
              <Monitor className="text-purple-400 mx-auto mb-2" size={24} />
              <span className="text-white text-sm">Display</span>
            </div>
            <div className="bg-yellow-500/20 rounded-2xl p-4 text-center">
              <Battery className="text-yellow-400 mx-auto mb-2" size={24} />
              <span className="text-white text-sm">Battery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSafari = () => (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900">
      {/* Safari Window */}
      <div className="bg-white dark:bg-gray-800 rounded-t-xl shadow-2xl h-full">
        {/* Window Controls */}
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-t-xl border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-2">
            <button onClick={() => setCurrentApp('desktop')} className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"></button>
            <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></button>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-gray-200 dark:bg-gray-600 rounded-lg px-4 py-2 text-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">john-doe-portfolio.com</span>
            </div>
          </div>
        </div>
        
        {/* Safari Content */}
        <div className="p-6 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Portfolio Website</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Welcome to my interactive portfolio showcase! Built with modern web technologies.
            </p>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-4">Featured Technologies</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• React.js</div>
                <div>• TypeScript</div>
                <div>• Tailwind CSS</div>
                <div>• Vite</div>
                <div>• Framer Motion</div>
                <div>• Node.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVSCode = () => (
    <div className="flex-1 bg-gray-900">
      {/* VS Code Window */}
      <div className="bg-gray-900 rounded-t-xl shadow-2xl h-full">
        {/* Window Controls */}
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-t-xl border-b border-gray-700">
          <div className="flex items-center gap-2">
            <button onClick={() => setCurrentApp('desktop')} className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></button>
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

  const renderMusic = () => (
    <div className="flex-1 bg-gradient-to-br from-red-900 via-purple-900 to-pink-900">
      {/* Music Window */}
      <div className="bg-gray-900/90 backdrop-blur-xl rounded-t-xl shadow-2xl h-full">
        {/* Window Controls */}
        <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-t-xl border-b border-gray-700/50">
          <div className="flex items-center gap-2">
            <button onClick={() => setCurrentApp('desktop')} className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"></button>
            <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></button>
          </div>
          <div className="text-gray-300 text-sm">Music</div>
        </div>
        
        {/* Music Content */}
        <div className="p-6 text-center">
          <div className="max-w-md mx-auto">
            {/* Album Art */}
            <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <Music size={64} className="text-white" />
            </div>
            
            {/* Track Info */}
            <h3 className="text-2xl font-bold text-white mb-2">{musicTracks[currentTrack].title}</h3>
            <p className="text-gray-300 mb-6">{musicTracks[currentTrack].artist}</p>
            
            {/* Progress Bar */}
            <div className="bg-gray-700 rounded-full h-1 mb-6">
              <div className="bg-white rounded-full h-1 w-1/3 transition-all duration-1000"></div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <button 
                onClick={() => setCurrentTrack(prev => prev > 0 ? prev - 1 : musicTracks.length - 1)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SkipBack size={24} />
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white text-gray-900 p-3 rounded-full hover:scale-110 transition-transform"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button 
                onClick={() => setCurrentTrack(prev => prev < musicTracks.length - 1 ? prev + 1 : 0)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SkipForward size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderApp = () => {
    switch (currentApp) {
      case 'safari':
        return renderSafari();
      case 'vscode':
        return renderVSCode();
      case 'music':
        return renderMusic();
      case 'messages':
        return (
          <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-6">
            <div className="max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <button onClick={() => setCurrentApp('desktop')} className="text-blue-500 hover:text-blue-400 transition-colors">
                  ← Back
                </button>
                <h2 className="text-gray-900 dark:text-white font-semibold">Messages</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md max-w-xs ml-auto">
                  Check out my new portfolio website! 🚀
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                  Wow, this MacBook demo is impressive! Love the dark theme.
                </div>
                <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md max-w-xs ml-auto">
                  Thanks! Built with React and lots of attention to detail ✨
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return renderDesktop();
    }
  };

  return (
    <div className="relative">
      {/* MacBook Frame */}
      <div className="w-[500px] h-[350px] bg-gray-300 rounded-t-3xl p-4 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden flex flex-col relative">
          {/* Menu Bar */}
          <div className="flex justify-between items-center px-4 py-2 bg-gray-800/80 backdrop-blur-md text-white text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">🍎</span>
                <span>Finder</span>
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Wifi size={14} />
                <Battery size={14} />
                <Volume2 size={14} />
              </div>
              <div className="font-mono">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>

          {/* App Content */}
          {renderApp()}

          {/* Dock */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-800/80 backdrop-blur-2xl rounded-2xl p-3 flex items-center gap-2 border border-gray-700/50">
              {dockApps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setCurrentApp(app.id)}
                  className={`${app.color} p-2 rounded-xl hover:scale-110 transition-all duration-200 shadow-lg ${
                    currentApp === app.id ? 'ring-2 ring-white/50' : ''
                  }`}
                  title={app.name}
                >
                  <app.icon size={16} className="text-white" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MacBook Base */}
      <div className="w-[520px] h-8 bg-gray-300 rounded-b-3xl -mt-2 mx-auto relative">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-400 rounded-full"></div>
      </div>

      {/* MacBook Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold gradient-text mb-2">MacBook Pro - macOS 15 Sequoia</h3>
        <p className="text-gray-300 text-sm">Interactive demo with real app functionality!</p>
      </div>
    </div>
  );
};

export default MacBookScreen;
