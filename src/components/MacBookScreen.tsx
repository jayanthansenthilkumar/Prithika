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
  Terminal,
  Bell,
  X,
  Minimize2,
  Maximize2,
  FileText,
  Calendar
} from 'lucide-react';
import DesktopApp from './macbook/DesktopApp';
import FinderApp from './macbook/FinderApp';
import SafariApp from './macbook/SafariApp';
import VSCodeApp from './macbook/VSCodeApp';
import MusicApp from './macbook/MusicApp';
import MessagesApp from './macbook/MessagesApp';
import MailApp from './macbook/MailApp';
import PhotosApp from './macbook/PhotosApp';
import TerminalApp from './macbook/TerminalApp';
import SettingsApp from './macbook/SettingsApp';
import NotesApp from './macbook/NotesApp';
import CalendarApp from './macbook/CalendarApp';
import WindowFrame from './macbook/WindowFrame';

interface Notification {
  id: number;
  title: string;
  message: string;
  icon: string;
}

const MacBookScreen = () => {
  const [time, setTime] = useState(new Date());
  const [currentApp, setCurrentApp] = useState('desktop');
  const [activeWindows, setActiveWindows] = useState<string[]>(['desktop']);
  const [windowStates, setWindowStates] = useState<Record<string, { minimized: boolean; maximized: boolean; }>>({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [wifiStrength, setWifiStrength] = useState(3);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate real-time system changes
  useEffect(() => {
    const systemTimer = setInterval(() => {
      // Simulate battery drain
      setBatteryLevel(prev => Math.max(20, prev - Math.random() * 0.5));
      
      // Simulate WiFi fluctuation
      setWifiStrength(prev => Math.max(1, Math.min(4, prev + (Math.random() - 0.5))));
      
      // Simulate CPU usage
      setCpuUsage(prev => Math.max(10, Math.min(90, prev + (Math.random() - 0.5) * 10)));
      
      // Simulate memory usage
      setMemoryUsage(prev => Math.max(30, Math.min(95, prev + (Math.random() - 0.5) * 5)));
      
      // Random notifications
      if (Math.random() < 0.1) { // 10% chance every 3 seconds
        const notificationTypes: Omit<Notification, 'id'>[] = [
          { title: 'Slack', message: 'New message from team', icon: '💬' },
          { title: 'GitHub', message: 'Pull request approved', icon: '✅' },
          { title: 'VS Code', message: 'Extension updated', icon: '🔄' },
          { title: 'System', message: 'Backup completed', icon: '💾' },
          { title: 'Calendar', message: 'Meeting in 15 minutes', icon: '📅' }
        ];
        const randomNotif = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
        setNotifications(prev => [...prev.slice(-2), { ...randomNotif, id: Date.now() }]);
      }
    }, 3000);

    return () => clearInterval(systemTimer);
  }, []);

  // Auto-dismiss notifications
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        setNotifications(prev => prev.slice(1));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notifications]);

  const dockApps = [
    { id: 'finder', name: 'Finder', icon: Folder, color: 'bg-blue-500' },
    { id: 'safari', name: 'Safari', icon: Globe, color: 'bg-blue-400' },
    { id: 'messages', name: 'Messages', icon: MessageCircle, color: 'bg-green-500' },
    { id: 'mail', name: 'Mail', icon: Mail, color: 'bg-blue-600' },
    { id: 'music', name: 'Music', icon: Music, color: 'bg-red-500' },
    { id: 'photos', name: 'Photos', icon: Image, color: 'bg-yellow-500' },
    { id: 'notes', name: 'Notes', icon: FileText, color: 'bg-yellow-400' },
    { id: 'calendar', name: 'Calendar', icon: Calendar, color: 'bg-red-600' },
    { id: 'vscode', name: 'VS Code', icon: Code2, color: 'bg-blue-700' },
    { id: 'terminal', name: 'Terminal', icon: Terminal, color: 'bg-gray-800' },
    { id: 'settings', name: 'System Settings', icon: Settings, color: 'bg-gray-500' }
  ];

  const musicTracks = [
    { title: 'Coding Flow', artist: 'Lo-Fi Beats', duration: '3:42' },
    { title: 'Debug Symphony', artist: 'Electronic Vibes', duration: '4:15' },
    { title: 'React Harmony', artist: 'Dev Sounds', duration: '3:28' }
  ];

  const getBatteryIcon = () => {
    if (batteryLevel > 50) return '🔋';
    if (batteryLevel > 20) return '🪫';
    return '🔴';
  };

  const getWifiIcon = () => {
    const strength = Math.floor(wifiStrength);
    return strength >= 3 ? '📶' : strength >= 2 ? '📶' : '📶';
  };

  const handleAppClick = (appId: string) => {
    if (!activeWindows.includes(appId)) {
      setActiveWindows(prev => [...prev, appId]);
    }
    setCurrentApp(appId);
    // Unminimize if minimized
    setWindowStates(prev => ({
      ...prev,
      [appId]: { ...prev[appId], minimized: false }
    }));
  };

  const handleCloseApp = (appId: string) => {
    setActiveWindows(prev => prev.filter(id => id !== appId));
    if (currentApp === appId) {
      setCurrentApp(activeWindows[activeWindows.length - 2] || 'desktop');
    }
    setWindowStates(prev => {
      const { [appId]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleMinimizeApp = (appId: string) => {
    setWindowStates(prev => ({
      ...prev,
      [appId]: { ...prev[appId], minimized: true }
    }));
  };

  const handleMaximizeApp = (appId: string) => {
    setWindowStates(prev => ({
      ...prev,
      [appId]: { ...prev[appId], maximized: !prev[appId]?.maximized }
    }));
  };

  const handleTogglePlay = () => setIsPlaying(!isPlaying);
  
  const handlePreviousTrack = () => {
    setCurrentTrack(prev => prev > 0 ? prev - 1 : musicTracks.length - 1);
  };
  
  const handleNextTrack = () => {
    setCurrentTrack(prev => prev < musicTracks.length - 1 ? prev + 1 : 0);
  };

  const renderApp = () => {
    if (currentApp === 'desktop') {
      return (
        <div className="w-full h-full">
          <DesktopApp onLaunchApp={handleAppClick} />
        </div>
      );
    }

    return (
      <div className="relative w-full h-full">
        {activeWindows.map((appId) => {
          if (appId === 'desktop') return null;
          if (windowStates[appId]?.minimized) return null;

          const isMaximized = windowStates[appId]?.maximized;
          const isActive = currentApp === appId;

          return (
            <div
              key={appId}
              className={`absolute ${
                isMaximized ? 'inset-0' : 'w-[95%] h-[90%] left-[2.5%] top-[5%]'
              } transition-all duration-200 ease-out ${
                isActive ? 'z-10' : 'z-0'
              }`}
              style={{
                transform: `scale(${isActive ? 1 : 0.98})`,
                opacity: isActive ? 1 : 0.8,
              }}
              onClick={() => !isActive && handleAppClick(appId)}
            >
              <WindowFrame
                title={dockApps.find(app => app.id === appId)?.name || ''}
                onClose={() => handleCloseApp(appId)}
                onMinimize={() => handleMinimizeApp(appId)}
                onMaximize={() => handleMaximizeApp(appId)}
                isActive={isActive}
                className="w-full h-full flex flex-col"
              >
                <div className="flex-1 overflow-auto hide-scrollbar">
                  {(() => {
                    switch (appId) {
                      case 'finder':
                        return <FinderApp onClose={() => handleCloseApp(appId)} />;
                      case 'safari':
                        return <SafariApp onClose={() => handleCloseApp(appId)} />;
                      case 'vscode':
                        return <VSCodeApp onClose={() => handleCloseApp(appId)} />;
                      case 'music':
                        return (
                          <MusicApp 
                            onClose={() => handleCloseApp(appId)}
                            isPlaying={isPlaying}
                            currentTrack={currentTrack}
                            musicTracks={musicTracks}
                            onTogglePlay={handleTogglePlay}
                            onPreviousTrack={handlePreviousTrack}
                            onNextTrack={handleNextTrack}
                          />
                        );
                      case 'messages':
                        return <MessagesApp onClose={() => handleCloseApp(appId)} />;
                      case 'mail':
                        return <MailApp onClose={() => handleCloseApp(appId)} />;
                      case 'photos':
                        return <PhotosApp onClose={() => handleCloseApp(appId)} />;
                      case 'terminal':
                        return <TerminalApp onClose={() => handleCloseApp(appId)} />;
                      case 'notes':
                        return <NotesApp onClose={() => handleCloseApp(appId)} />;
                      case 'calendar':
                        return <CalendarApp onClose={() => handleCloseApp(appId)} />;
                      case 'settings':
                        return <SettingsApp onClose={() => handleCloseApp(appId)} />;
                      default:
                        return null;
                    }
                  })()}
                </div>
              </WindowFrame>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="w-full h-[60vh] bg-gray-900 rounded-2xl overflow-hidden flex flex-col relative shadow-2xl border border-gray-700">
        {/* Menu Bar */}
        <div className="flex justify-between items-center h-8 px-4 bg-gray-800/80 backdrop-blur-md text-white text-xs z-30 border-b border-gray-700/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">🍎</span>
              <span className="hover:bg-gray-700/50 px-1.5 py-0.5 rounded cursor-pointer transition-colors">
                {currentApp === 'desktop' ? 'Finder' : dockApps.find(app => app.id === currentApp)?.name}
              </span>
              <span className="hover:bg-gray-700/50 px-1.5 py-0.5 rounded cursor-pointer transition-colors">File</span>
              <span className="hover:bg-gray-700/50 px-1.5 py-0.5 rounded cursor-pointer transition-colors">Edit</span>
              <span className="hover:bg-gray-700/50 px-1.5 py-0.5 rounded cursor-pointer transition-colors">View</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* System Stats */}
              <div className="text-xs text-gray-300 hidden xl:block">
                CPU: {Math.floor(cpuUsage)}% | RAM: {Math.floor(memoryUsage)}%
              </div>
              
              {/* Notification Bell */}
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="hover:bg-gray-700/50 p-0.5 rounded transition-colors relative"
              >
                <Bell size={12} />
                {notifications.length > 0 && (
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                    {notifications.length}
                  </div>
                )}
              </button>
              
              {/* WiFi with strength indicator */}
              <div className="flex items-center gap-1">
                <Wifi size={12} className={`${wifiStrength >= 3 ? 'text-green-400' : wifiStrength >= 2 ? 'text-yellow-400' : 'text-red-400'}`} />
                <span className="text-xs">{getWifiIcon()}</span>
              </div>
              
              {/* Battery with percentage */}
              <div className="flex items-center gap-1">
                <Battery size={12} className={`${batteryLevel > 50 ? 'text-green-400' : batteryLevel > 20 ? 'text-yellow-400' : 'text-red-400'}`} />
                <span className="text-xs">{Math.floor(batteryLevel)}%</span>
              </div>
              
              <Volume2 size={12} />
            </div>
            <div className="font-mono text-xs">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0">
            {renderApp()}
          </div>

          {/* Notifications Panel */}
          {showNotifications && (
            <div className="absolute right-4 top-2 z-50 w-80 bg-gray-800/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-700/50">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold">Notifications</h3>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="space-y-2 max-h-[40vh] overflow-y-auto hide-scrollbar">
                {notifications.length === 0 ? (
                  <p className="text-gray-400 text-sm text-center py-4">No new notifications</p>
                ) : (
                  notifications.map((notif) => (
                    <div key={notif.id} className="bg-gray-700/50 rounded-lg p-3 hover:bg-gray-700/70 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">{notif.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium text-sm">{notif.title}</div>
                          <div className="text-gray-300 text-xs mt-1">{notif.message}</div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Toast Notifications */}
          {!showNotifications && notifications.length > 0 && (
            <div className="absolute right-4 top-2 z-50 space-y-2">
              {notifications.slice(-2).map((notif) => (
                <div 
                  key={notif.id} 
                  className="w-72 bg-gray-800/95 backdrop-blur-xl rounded-xl p-3 shadow-lg border border-gray-700/50 animate-slide-in-right"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg">{notif.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm">{notif.title}</div>
                      <div className="text-gray-300 text-xs mt-1">{notif.message}</div>
                    </div>
                    <button 
                      onClick={() => setNotifications(prev => prev.filter(n => n.id !== notif.id))}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dock */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-gray-800/80 backdrop-blur-2xl rounded-xl p-2 flex items-center gap-1.5 border border-gray-700/50 shadow-lg">
            {dockApps.map((app) => (
              <button
                key={app.id}
                onClick={() => setCurrentApp(app.id)}
                className={`${app.color} p-2 rounded-lg hover:scale-110 transition-all duration-200 shadow-lg relative ${
                  currentApp === app.id ? 'ring-1 ring-white/50 scale-105' : ''
                }`}
                title={app.name}
              >
                <app.icon size={16} className="text-white" />
                {currentApp === app.id && (
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
                {activeWindows.includes(app.id) && currentApp !== app.id && (
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-50" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookScreen;