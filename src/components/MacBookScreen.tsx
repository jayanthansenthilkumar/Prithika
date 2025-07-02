
import { useState, useEffect } from 'react';
import { 
  Wifi, 
  Battery, 
  Volume2, 
  MessageCircle,
  Mail,
  Music,
  Settings,
  Globe,
  Code2,
  Folder,
  Image,
  Terminal
} from 'lucide-react';
import DesktopApp from './macbook/DesktopApp';
import SafariApp from './macbook/SafariApp';
import VSCodeApp from './macbook/VSCodeApp';
import MusicApp from './macbook/MusicApp';
import MessagesApp from './macbook/MessagesApp';

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

  const handleCloseApp = () => setCurrentApp('desktop');
  
  const handleTogglePlay = () => setIsPlaying(!isPlaying);
  
  const handlePreviousTrack = () => {
    setCurrentTrack(prev => prev > 0 ? prev - 1 : musicTracks.length - 1);
  };
  
  const handleNextTrack = () => {
    setCurrentTrack(prev => prev < musicTracks.length - 1 ? prev + 1 : 0);
  };

  const renderApp = () => {
    switch (currentApp) {
      case 'safari':
        return <SafariApp onClose={handleCloseApp} />;
      case 'vscode':
        return <VSCodeApp onClose={handleCloseApp} />;
      case 'music':
        return (
          <MusicApp 
            onClose={handleCloseApp}
            isPlaying={isPlaying}
            currentTrack={currentTrack}
            musicTracks={musicTracks}
            onTogglePlay={handleTogglePlay}
            onPreviousTrack={handlePreviousTrack}
            onNextTrack={handleNextTrack}
          />
        );
      case 'messages':
        return <MessagesApp onClose={handleCloseApp} />;
      default:
        return <DesktopApp />;
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Screen Only - No Laptop Frame */}
      <div className="w-full aspect-[16/10] bg-gray-900 rounded-2xl overflow-hidden flex flex-col relative shadow-2xl border border-gray-700">
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

      {/* Screen Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold gradient-text mb-2">Interactive macOS Demo</h3>
        <p className="text-gray-300 text-sm">Click the dock icons to explore different apps!</p>
      </div>
    </div>
  );
};

export default MacBookScreen;
