import { useState, useEffect } from 'react';
import { 
  Folder, 
  Image, 
  Wifi, 
  Volume2, 
  Monitor, 
  Battery, 
  Calendar, 
  Clock, 
  CloudRain,
  Code2,
  Globe,
  FileText,
  Terminal,
  Search,
  Settings
} from 'lucide-react';

interface DesktopIcon {
  id: string;
  name: string;
  icon: any;
  color: string;
  onClick: () => void;
}

interface DesktopAppProps {
  onLaunchApp: (appId: string) => void;
}

const DesktopApp = ({ onLaunchApp }: DesktopAppProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState({ temp: '72°F', condition: 'Partly Cloudy' });
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [systemStatus, setSystemStatus] = useState({
    cpu: 45,
    memory: { used: 8.5, total: 16 },
    storage: { free: 234, total: 512 }
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate real-time system status updates
    const statusTimer = setInterval(() => {
      setSystemStatus(prev => ({
        cpu: Math.min(100, Math.max(0, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: {
          ...prev.memory,
          used: Math.min(prev.memory.total, Math.max(0, prev.memory.used + (Math.random() - 0.5) * 0.5))
        },
        storage: prev.storage
      }));
    }, 2000);

    // Handle Command + Space for Spotlight
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.code === 'Space') {
        e.preventDefault();
        setIsSpotlightOpen(prev => !prev);
      } else if (e.code === 'Escape') {
        setIsSpotlightOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(statusTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Click outside to close Spotlight
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isSpotlightOpen && !(e.target as Element).closest('.spotlight-search')) {
        setIsSpotlightOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSpotlightOpen]);

  return (
  <div 
    className="flex-1 relative"
    style={{
      backgroundImage: `
        radial-gradient(circle at 50% 0%, 
          rgba(88, 28, 135, 0.8) 0%, 
          rgba(124, 58, 237, 0.8) 25%,
          rgba(167, 139, 250, 0.8) 50%, 
          rgba(196, 181, 253, 0.8) 75%,
          rgba(221, 214, 254, 0.8) 100%
        ),
        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" stop-color="white" stop-opacity=".1"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs><circle cx="100" cy="100" r="100" fill="url(%23a)" opacity=".15"/></svg>')
      `,
      backgroundSize: 'cover, 200px 200px',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat, repeat'
    }}
  >
    {/* Desktop Icons - Organized in columns */}
    <div className="absolute top-4 right-4 grid grid-cols-2 gap-4">
      {[
        [
          {
            id: 'finder',
            name: 'Home',
            icon: Folder,
            color: 'bg-blue-500/80',
            onClick: () => onLaunchApp('finder')
          },
          {
            id: 'vscode',
            name: 'Projects',
            icon: Code2,
            color: 'bg-blue-600/80',
            onClick: () => onLaunchApp('vscode')
          },
          {
            id: 'safari',
            name: 'Portfolio',
            icon: Globe,
            color: 'bg-purple-500/80',
            onClick: () => onLaunchApp('safari')
          }
        ],
        [
          {
            id: 'photos',
            name: 'Screenshots',
            icon: Image,
            color: 'bg-red-500/80',
            onClick: () => onLaunchApp('photos')
          },
          {
            id: 'notes',
            name: 'Documents',
            icon: FileText,
            color: 'bg-yellow-500/80',
            onClick: () => onLaunchApp('notes')
          },
          {
            id: 'terminal',
            name: 'Terminal',
            icon: Terminal,
            color: 'bg-gray-700/80',
            onClick: () => onLaunchApp('terminal')
          }
        ]
      ].map((column, columnIndex) => (
        <div key={columnIndex} className="space-y-3">
          {column.map((item) => (
            <div key={item.id} className="text-center group">
              <div
                onClick={item.onClick}
                className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-1 
                  hover:bg-opacity-90 transition-all cursor-pointer backdrop-blur-xl 
                  group-hover:scale-105 transform duration-200 
                  active:scale-95 active:bg-opacity-100`}
              >
                <item.icon className="text-white" size={28} />
              </div>
              <span className="text-white text-xs font-medium drop-shadow-lg px-2 py-0.5 rounded 
                bg-black/30 backdrop-blur-sm group-hover:bg-black/40 transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Spotlight Search */}
    {isSpotlightOpen && (
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px]">
        <div className="bg-gray-900/80 backdrop-blur-2xl rounded-xl shadow-2xl border border-gray-700/30">
          <div className="flex items-center p-4">
            <Search className="text-gray-400 mr-3" size={20} />
            <input
              type="text"
              placeholder="Search apps, files, and system preferences..."
              className="w-full bg-transparent text-white border-none outline-none placeholder-gray-400"
              autoFocus
            />
          </div>
          <div className="border-t border-gray-700/30 p-2">
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Safari', icon: Globe, color: 'bg-blue-500' },
                { name: 'Messages', icon: Terminal, color: 'bg-green-500' },
                { name: 'VS Code', icon: Code2, color: 'bg-blue-600' },
                { name: 'Settings', icon: Settings, color: 'bg-gray-600' }
              ].map((app) => (
                <button
                  key={app.name}
                  onClick={() => {
                    setIsSpotlightOpen(false);
                    onLaunchApp(app.name.toLowerCase());
                  }}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <div className={`w-8 h-8 ${app.color} rounded-lg flex items-center justify-center mr-3`}>
                    <app.icon className="text-white" size={16} />
                  </div>
                  <span className="text-white text-sm">{app.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Left Side - Widget Area */}
    <div className="absolute top-4 left-4 space-y-4 w-72">
      {/* Clock & Calendar Widget */}
      <div className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-700/30">
        <div className="text-center">
          <div className="text-white text-3xl font-light mb-1">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-gray-300 text-sm">
            {currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </div>
        {/* Mini Calendar */}
        <div className="mt-4 pt-4 border-t border-gray-700/50">
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-gray-400">{day}</div>
            ))}
            {Array.from({ length: 31 }, (_, i) => (
              <div 
                key={i} 
                className={`p-1 rounded-full ${
                  i + 1 === currentTime.getDate() 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-300 hover:bg-gray-800/50 cursor-pointer'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weather Widget */}
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-blue-400/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-white text-2xl font-light">{weather.temp}</div>
            <div className="text-blue-200 text-sm">{weather.condition}</div>
            <div className="text-blue-200/80 text-xs mt-1">San Francisco, CA</div>
          </div>
          <div className="bg-blue-500/20 p-3 rounded-2xl">
            <CloudRain className="text-blue-300" size={32} />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-blue-400/20">
          {['Now', '2PM', '3PM', '4PM'].map((time, i) => (
            <div key={i} className="text-center">
              <div className="text-blue-200 text-xs mb-1">{time}</div>
              <CloudRain className="text-blue-300 mx-auto mb-1" size={16} />
              <div className="text-white text-xs">72°</div>
            </div>
          ))}
        </div>
      </div>

      {/* System Status Widget */}
      <div className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-700/30">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <div className="text-gray-300">CPU Usage</div>
              <div className="text-white">{systemStatus.cpu}%</div>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-1.5">
              <div 
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${systemStatus.cpu}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <div className="text-gray-300">Memory</div>
              <div className="text-white">
                {systemStatus.memory.used} GB / {systemStatus.memory.total} GB
              </div>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-1.5">
              <div 
                className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${(systemStatus.memory.used / systemStatus.memory.total) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <div className="text-gray-300">Storage</div>
              <div className="text-white">
                {systemStatus.storage.free} GB free of {systemStatus.storage.total} GB
              </div>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-1.5">
              <div 
                className="bg-purple-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${((systemStatus.storage.total - systemStatus.storage.free) / systemStatus.storage.total) * 100}%` }}
              ></div>
            </div>
          </div>

          <button
            onClick={() => onLaunchApp('activity')}
            className="w-full mt-2 py-1.5 px-3 bg-gray-800/50 hover:bg-gray-700/50 
              rounded-lg text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Monitor size={12} />
            Open Activity Monitor
          </button>
        </div>
      </div>
    </div>

    {/* Control Center */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/30">
        {/* Quick Settings */}
        <div className="p-4 grid grid-cols-2 gap-4">
          {/* Wi-Fi Panel */}
          <div className="bg-gray-800/50 rounded-xl p-3 hover:bg-gray-700/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Wifi className="text-white" size={20} />
                <span className="text-white text-sm font-medium">Wi-Fi</span>
              </div>
              <div className="w-8 h-4 bg-blue-500 rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-gray-300 text-xs">Connected to "Home Network"</div>
          </div>

          {/* Bluetooth Panel */}
          <div className="bg-gray-800/50 rounded-xl p-3 hover:bg-gray-700/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                  <path d="M10 6l2 2-2 2V6z"/>
                </svg>
                <span className="text-white text-sm font-medium">Bluetooth</span>
              </div>
              <div className="w-8 h-4 bg-gray-600 rounded-full relative">
                <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-gray-400 text-xs">No Devices Connected</div>
          </div>

          {/* Sound Control */}
          <div className="bg-gray-800/50 rounded-xl p-3 hover:bg-gray-700/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="text-white" size={20} />
              <span className="text-white text-sm font-medium">Sound</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="range" className="w-full accent-white" defaultValue={75} />
              <span className="text-white text-xs">75%</span>
            </div>
          </div>

          {/* Display & Battery */}
          <div className="bg-gray-800/50 rounded-xl p-3 hover:bg-gray-700/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Battery className="text-white" size={20} />
                <span className="text-white text-sm font-medium">Battery</span>
              </div>
              <span className="text-white text-xs font-medium">85%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full w-[85%]"></div>
            </div>
          </div>
        </div>

        {/* Additional Controls */}
        <div className="border-t border-gray-700/30 p-3 flex items-center justify-between">
          <button 
            onClick={() => onLaunchApp('settings')}
            className="text-white text-xs hover:text-gray-300 transition-colors flex items-center gap-1"
          >
            <Settings size={14} />
            System Preferences
          </button>
          <button 
            onClick={() => setIsSpotlightOpen(true)}
            className="text-white text-xs hover:text-gray-300 transition-colors flex items-center gap-1"
          >
            <Search size={14} />
            Spotlight Search
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DesktopApp;
