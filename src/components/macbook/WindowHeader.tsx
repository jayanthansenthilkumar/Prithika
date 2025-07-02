import { X, Minimize2, Maximize2 } from 'lucide-react';

interface WindowHeaderProps {
  title: string;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  showControls?: boolean;
}

const WindowHeader = ({ 
  title, 
  onClose, 
  onMinimize, 
  onMaximize, 
  showControls = true 
}: WindowHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-200 border-b border-gray-300 select-none">
      <div className="flex items-center gap-3">
        {/* Traffic Light Controls */}
        <div className="flex gap-2">
          <button 
            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center group"
            onClick={onClose}
            title="Close"
          >
            <X size={8} className="text-red-800 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button 
            className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors flex items-center justify-center group"
            onClick={onMinimize}
            title="Minimize"
          >
            <Minimize2 size={8} className="text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button 
            className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center group"
            onClick={onMaximize}
            title="Maximize"
          >
            <Maximize2 size={8} className="text-green-800 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
        
        {/* Window Title */}
        <span className="text-sm font-medium text-gray-700">{title}</span>
      </div>
      
      {/* Additional Controls */}
      {showControls && (
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WindowHeader;
