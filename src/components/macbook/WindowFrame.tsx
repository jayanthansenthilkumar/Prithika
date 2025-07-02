import React from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowFrameProps {
  title: string;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  isActive?: boolean;
  children: React.ReactNode;
  className?: string;
}

const WindowFrame: React.FC<WindowFrameProps> = ({
  title,
  onClose,
  onMinimize,
  onMaximize,
  isActive = true,
  children,
  className = ''
}) => {
  return (
    <div 
      className={`bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-xl border border-gray-700/50 flex flex-col ${
        isActive ? 'ring-1 ring-white/10' : 'opacity-90'
      } ${className}`}
    >
      {/* Window Header */}
      <div className="h-9 flex items-center justify-between px-4 border-b border-gray-700/50 bg-gray-800/50">
        <div className="flex items-center gap-2 flex-1">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors group flex items-center justify-center"
            >
              <X size={8} className="text-red-900 opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={onMinimize}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors group flex items-center justify-center"
            >
              <Minus size={8} className="text-yellow-900 opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={onMaximize}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors group flex items-center justify-center"
            >
              <Square size={8} className="text-green-900 opacity-0 group-hover:opacity-100" />
            </button>
          </div>
          <span className="text-white/70 text-xs font-medium ml-2 absolute left-1/2 transform -translate-x-1/2">{title}</span>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-hidden bg-gray-900/70">
        <div className="h-full overflow-auto hide-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WindowFrame;
