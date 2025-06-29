
import { Music, Play, Pause, SkipForward, SkipBack } from 'lucide-react';

interface MusicAppProps {
  onClose: () => void;
  isPlaying: boolean;
  currentTrack: number;
  musicTracks: Array<{ title: string; artist: string; duration: string }>;
  onTogglePlay: () => void;
  onPreviousTrack: () => void;
  onNextTrack: () => void;
}

const MusicApp = ({ 
  onClose, 
  isPlaying, 
  currentTrack, 
  musicTracks, 
  onTogglePlay, 
  onPreviousTrack, 
  onNextTrack 
}: MusicAppProps) => (
  <div className="flex-1 bg-gradient-to-br from-red-900 via-purple-900 to-pink-900">
    {/* Music Window */}
    <div className="bg-gray-900/90 backdrop-blur-xl rounded-t-xl shadow-2xl h-full">
      {/* Window Controls */}
      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-t-xl border-b border-gray-700/50">
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></button>
          <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"></button>
          <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></button>
        </div>
        <div className="text-gray-300 text-sm">Music</div>
      </div>
      
      {/* Music Content */}
      <div className="p-6 text-center">
        <div className="max-w-md mx-auto">
          {/* Album Art */}
          <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <Music size={64} className="text-white" />
          </div>
          
          {/* Track Info */}
          <h3 className="text-2xl font-bold text-white mb-2">{musicTracks[currentTrack].title}</h3>
          <p className="text-gray-300 mb-6">{musicTracks[currentTrack].artist}</p>
          
          {/* Progress Bar */}
          <div className="bg-gray-700 rounded-full h-1 mb-6">
            <div className="bg-white rounded-full h-1 w-1/3 transition-all duration-1000"></div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={onPreviousTrack}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack size={24} />
            </button>
            <button 
              onClick={onTogglePlay}
              className="bg-white text-gray-900 p-3 rounded-full hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button 
              onClick={onNextTrack}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MusicApp;
