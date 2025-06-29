
import { Folder, Image } from 'lucide-react';

const DesktopApp = () => (
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

export default DesktopApp;
