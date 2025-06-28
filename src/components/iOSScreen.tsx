
import { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, MessageCircle, Phone, Mail, Camera, Music, Settings, Store, Globe, Image } from 'lucide-react';

const iOSScreen = () => {
  const [time, setTime] = useState(new Date());
  const [currentApp, setCurrentApp] = useState('home');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    { id: 'messages', name: 'Messages', icon: MessageCircle, color: 'bg-green-500' },
    { id: 'phone', name: 'Phone', icon: Phone, color: 'bg-green-400' },
    { id: 'mail', name: 'Mail', icon: Mail, color: 'bg-blue-500' },
    { id: 'camera', name: 'Camera', icon: Camera, color: 'bg-gray-600' },
    { id: 'music', name: 'Music', icon: Music, color: 'bg-red-500' },
    { id: 'safari', name: 'Safari', icon: Globe, color: 'bg-blue-400' },
    { id: 'photos', name: 'Photos', icon: Image, color: 'bg-yellow-500' },
    { id: 'settings', name: 'Settings', icon: Settings, color: 'bg-gray-500' },
    { id: 'appstore', name: 'App Store', icon: Store, color: 'bg-blue-600' }
  ];

  const renderHomeScreen = () => (
    <div className="flex-1 p-6 pt-4">
      <div className="grid grid-cols-3 gap-6 mt-8">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => setCurrentApp(app.id)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className={`${app.color} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-200`}>
              <app.icon size={24} className="text-white" />
            </div>
            <span className="text-white text-xs font-medium">{app.name}</span>
          </button>
        ))}
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 flex justify-center gap-6">
          <button onClick={() => setCurrentApp('phone')} className="bg-green-400 p-3 rounded-2xl hover:scale-110 transition-transform">
            <Phone size={20} className="text-white" />
          </button>
          <button onClick={() => setCurrentApp('messages')} className="bg-green-500 p-3 rounded-2xl hover:scale-110 transition-transform">
            <MessageCircle size={20} className="text-white" />
          </button>
          <button onClick={() => setCurrentApp('safari')} className="bg-blue-400 p-3 rounded-2xl hover:scale-110 transition-transform">
            <Globe size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderApp = () => {
    switch (currentApp) {
      case 'messages':
        return (
          <div className="flex-1 bg-gray-900 p-4">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setCurrentApp('home')} className="text-blue-400 hover:text-blue-300 transition-colors">
                ← Back
              </button>
              <h2 className="text-white font-semibold">Messages</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md max-w-xs ml-auto">
                Hey! Check out my new portfolio website
              </div>
              <div className="bg-gray-700 text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                Looks amazing! The design is stunning 🌟
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md max-w-xs ml-auto">
                Thanks! I used some cool animations too
              </div>
            </div>
          </div>
        );
      case 'safari':
        return (
          <div className="flex-1 bg-gray-900">
            <div className="bg-gray-800 p-3 flex items-center gap-3">
              <button onClick={() => setCurrentApp('home')} className="text-blue-400 hover:text-blue-300 transition-colors">
                ← Back
              </button>
              <div className="flex-1 bg-gray-700 rounded-lg p-2 text-gray-300 text-sm">
                john-doe-portfolio.com
              </div>
            </div>
            <div className="p-4 text-center space-y-4">
              <div className="text-white text-lg font-bold">My Portfolio</div>
              <div className="text-gray-400 text-sm">Welcome to my interactive portfolio!</div>
              <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                <div className="text-white font-semibold">Features:</div>
                <div className="text-gray-300 text-sm">• Responsive Design</div>
                <div className="text-gray-300 text-sm">• Interactive Elements</div>
                <div className="text-gray-300 text-sm">• Modern Animations</div>
              </div>
            </div>
          </div>
        );
      case 'camera':
        return (
          <div className="flex-1 bg-black relative">
            <div className="absolute top-4 left-4 z-10">
              <button onClick={() => setCurrentApp('home')} className="text-white bg-black/50 rounded-full p-2">
                ← Back
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Camera size={64} className="text-white mx-auto mb-4" />
                <div className="text-white">Camera View</div>
                <div className="text-gray-400 text-sm mt-2">Tap to take a photo</div>
              </div>
            </div>
          </div>
        );
      case 'music':
        return (
          <div className="flex-1 bg-gradient-to-br from-red-900 to-pink-900 p-4">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setCurrentApp('home')} className="text-white bg-white/20 rounded-full p-2">
                ← Back
              </button>
              <h2 className="text-white font-semibold">Music</h2>
            </div>
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-white/20 rounded-2xl mx-auto flex items-center justify-center">
                <Music size={48} className="text-white" />
              </div>
              <div className="text-white font-bold">Now Playing</div>
              <div className="text-white/80">Coding Playlist</div>
              <div className="bg-white/20 rounded-full h-1 mx-8">
                <div className="bg-white rounded-full h-1 w-1/3"></div>
              </div>
            </div>
          </div>
        );
      default:
        return renderHomeScreen();
    }
  };

  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="w-80 h-[600px] bg-black rounded-[3rem] p-4 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden flex flex-col relative">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-10"></div>
          
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-4 pb-2 text-white text-sm">
            <div className="font-semibold">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="flex items-center gap-1">
              <Signal size={16} />
              <Wifi size={16} />
              <Battery size={16} />
            </div>
          </div>

          {/* App Content */}
          {renderApp()}
        </div>
      </div>

      {/* iOS Features Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold gradient-text mb-2">Interactive iOS Demo</h3>
        <p className="text-gray-300 text-sm">Tap the apps to see them in action!</p>
      </div>
    </div>
  );
};

export default iOSScreen;
