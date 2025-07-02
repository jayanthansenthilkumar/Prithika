
import { Music, Play, Pause, SkipForward, SkipBack, Volume2, Repeat, Shuffle } from 'lucide-react';
import WindowHeader from './WindowHeader';

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
  <div className="flex-1 bg-gradient-to-br from-red-900 via-purple-900 to-pink-900 h-full overflow-hidden rounded-lg">
    {/* Music Window */}
    <div className="bg-gray-900/90 backdrop-blur-xl shadow-2xl h-full flex flex-col">
      {/* Window Header */}
      <div className="bg-gray-800/50 border-b border-gray-700/50">
        <WindowHeader 
          title="Music" 
          onClose={onClose}
          onMinimize={() => console.log('Minimize Music')}
          onMaximize={() => console.log('Maximize Music')}
        />
      </div>
      
      {/* Music Content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-48 bg-gray-800/30 border-r border-gray-700/50 p-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-300 font-semibold mb-2">Library</h3>
              <ul className="space-y-1">
                <li className="text-gray-400 hover:text-white cursor-pointer py-1">Recently Played</li>
                <li className="text-gray-400 hover:text-white cursor-pointer py-1">Made for You</li>
                <li className="text-gray-400 hover:text-white cursor-pointer py-1">Recently Added</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-300 font-semibold mb-2">Playlists</h3>
              <ul className="space-y-1">
                <li className="text-white bg-gray-700/50 rounded px-2 py-1">Coding Vibes</li>
                <li className="text-gray-400 hover:text-white cursor-pointer py-1">Favorites</li>
                <li className="text-gray-400 hover:text-white cursor-pointer py-1">Workout</li>
                <li className="text-gray-400 hover:text-white cursor-pointer py-1">Chill</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-md mx-auto text-center">
            {/* Album Art */}
            <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <Music size={64} className="text-white" />
            </div>
            
            {/* Track Info */}
            <h3 className="text-2xl font-bold text-white mb-2">{musicTracks[currentTrack].title}</h3>
            <p className="text-gray-300 mb-6">{musicTracks[currentTrack].artist}</p>
            
            {/* Progress Bar */}
            <div className="mb-2">
              <div className="bg-gray-700 rounded-full h-1 mb-2">
                <div className="bg-white rounded-full h-1 w-1/3 transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>1:23</span>
                <span>{musicTracks[currentTrack].duration}</span>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Shuffle size={20} />
              </button>
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
              <button className="text-gray-400 hover:text-white transition-colors">
                <Repeat size={20} />
              </button>
            </div>
            
            {/* Volume */}
            <div className="flex items-center justify-center gap-2">
              <Volume2 size={16} className="text-gray-400" />
              <div className="w-24 bg-gray-700 rounded-full h-1">
                <div className="bg-white rounded-full h-1 w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MusicApp;
