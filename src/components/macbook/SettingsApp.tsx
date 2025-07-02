import { useState } from 'react';
import { X, Minimize2, Maximize2, Search, Wifi, Bluetooth, Battery, Monitor, Volume2, Shield, Users, Globe, Palette, Bell, Lock } from 'lucide-react';

interface SettingsAppProps {
  onClose: () => void;
}

const SettingsApp = ({ onClose }: SettingsAppProps) => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');

  const settingsCategories = [
    { id: 'general', name: 'General', icon: Monitor },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'network', name: 'Network', icon: Wifi },
    { id: 'bluetooth', name: 'Bluetooth', icon: Bluetooth },
    { id: 'sound', name: 'Sound', icon: Volume2 },
    { id: 'battery', name: 'Battery', icon: Battery },
    { id: 'security', name: 'Security & Privacy', icon: Shield },
    { id: 'users', name: 'Users & Groups', icon: Users },
    { id: 'accessibility', name: 'Accessibility', icon: Globe }
  ];

  const renderContent = () => {
    switch (selectedCategory) {
      case 'general':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">General</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <h3 className="font-medium">About This Mac</h3>
                  <p className="text-sm text-gray-600">MacBook Pro (13-inch, M2, 2023)</p>
                </div>
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  More Info...
                </button>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <h3 className="font-medium">Software Update</h3>
                  <p className="text-sm text-gray-600">macOS Sonoma 14.5</p>
                </div>
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Check for Updates
                </button>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <h3 className="font-medium">Storage</h3>
                  <p className="text-sm text-gray-600">512 GB SSD</p>
                </div>
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Manage...
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'appearance':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Appearance</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-3">Appearance</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="light" name="appearance" defaultChecked />
                    <label htmlFor="light" className="text-sm">Light</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="dark" name="appearance" />
                    <label htmlFor="dark" className="text-sm">Dark</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="auto" name="appearance" />
                    <label htmlFor="auto" className="text-sm">Auto</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Accent Color</h3>
                <div className="flex gap-2">
                  {['blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'gray'].map(color => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full bg-${color}-500 border-2 border-white shadow-md hover:scale-110 transition-transform`}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Sidebar Icon Size</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="small" name="iconSize" />
                    <label htmlFor="small" className="text-sm">Small</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="medium" name="iconSize" defaultChecked />
                    <label htmlFor="medium" className="text-sm">Medium</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="large" name="iconSize" />
                    <label htmlFor="large" className="text-sm">Large</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'network':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Network</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <h3 className="font-medium">Wi-Fi</h3>
                      <p className="text-sm text-gray-600">Connected to "HomeNetwork"</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded transition-colors">
                    Advanced...
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <p>IP Address: 192.168.1.104</p>
                  <p>Router: 192.168.1.1</p>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div>
                      <h3 className="font-medium">Ethernet</h3>
                      <p className="text-sm text-gray-600">Not connected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'battery':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Battery</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-green-800">Battery</h3>
                  <span className="text-2xl font-bold text-green-800">85%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-sm text-green-700">Power Adapter: Connected</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Low Power Mode</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Battery Health Management</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold capitalize">{selectedCategory}</h2>
            <p className="text-gray-600">Settings for {selectedCategory} will be displayed here.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-gray-100 relative">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-200 border-b">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600" onClick={onClose}></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600"></button>
            <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600"></button>
          </div>
          <span className="ml-4 text-sm font-medium text-gray-700">System Settings</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-300 rounded">
            <Minimize2 size={14} className="text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-300 rounded">
            <Maximize2 size={14} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
          <div className="mb-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search settings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            {settingsCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                    selectedCategory === category.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <IconComponent size={16} />
                  <span className="text-sm">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-6 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsApp;
