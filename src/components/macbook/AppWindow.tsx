import React from 'react';
import { X, Minus, Square } from 'lucide-react';

interface AppWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const AppWindow: React.FC<AppWindowProps> = ({ title, onClose, children, className = '' }) => {
  return (
    <div className={`bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-xl border border-gray-700/50 flex flex-col ${className}`}>
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50 bg-gray-800/50">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            >
              <X size={8} className="text-red-900 opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={() => console.log('Minimize')}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            >
              <Minus size={8} className="text-yellow-900 opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={() => console.log('Maximize')}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
            >
              <Square size={8} className="text-green-900 opacity-0 group-hover:opacity-100" />
            </button>
          </div>
          <span className="text-white/70 text-xs font-medium ml-2">{title}</span>
        </div>
      </div>

      {/* Window Content - Scrollable */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 overflow-auto hide-scrollbar">
          <div className="min-h-full p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWindow;
