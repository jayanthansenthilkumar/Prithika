
import { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, MessageCircle, Phone, Mail, Camera, Music, Settings, AppStore, Safari, Photos } from 'lucide-react';

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
    { id: 'safari', name: 'Safari', icon: Safari, color: 'bg-blue-400' },
    { id: 'photos', name: 'Photos', icon: Photos, color: 'bg-yellow-500' },
    { id: 'settings', name: 'Settings', icon: Settings, color: 'bg-gray-500' },
    { id: 'appstore', name: 'App Store', icon: AppStore, color: 'bg-blue-600' }
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
          <div className="bg-blue-500 p-3 rounded-2xl">
            <Phone size={20} className="text-white" />
          </div>
          <div className="bg-green-500 p-3 rounded-2xl">
            <MessageCircle size={20} className="text-white" />
          </div>
          <div className="bg-blue-400 p-3 rounded-2xl">
            <Safari size={20} className="text-white" />
          </div>
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
              <button onClick={() => setCurrentApp('home')} className="text-blue-400">
                ← Back
              </button>
              <h2 className="text-white font-semibold">Messages</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md max-w-xs ml-auto">
                Hey! Check out my new portfolio website
              </div>
              <div className="bg-gray-700 text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                Looks amazing! The nebula effects are stunning 🌌
              </div>
            </div>
          </div>
        );
      case 'safari':
        return (
          <div className="flex-1 bg-gray-900">
            <div className="bg-gray-800 p-3 flex items-center gap-3">
              <button onClick={() => setCurrentApp('home')} className="text-blue-400">
                ← Back
              </button>
              <div className="flex-1 bg-gray-700 rounded-lg p-2 text-gray-300 text-sm">
                john-doe-portfolio.com
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="text-white text-lg font-bold mb-2">Portfolio</div>
              <div className="text-gray-400 text-sm">This is where my portfolio would load!</div>
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
