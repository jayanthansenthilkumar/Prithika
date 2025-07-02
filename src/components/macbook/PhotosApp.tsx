import { useState } from 'react';
import { X, Minimize2, Maximize2, Search, Play, Pause, Heart, Share, Download, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

interface PhotosAppProps {
  onClose: () => void;
}

const PhotosApp = ({ onClose }: PhotosAppProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'slideshow'>('grid');
  const [isPlaying, setIsPlaying] = useState(false);

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Mountain Landscape',
      date: 'July 1, 2025',
      location: 'Rocky Mountains, CO',
      size: '4.2 MB'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
      title: 'Forest Path',
      date: 'June 28, 2025',
      location: 'Pacific Northwest',
      size: '3.8 MB'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      title: 'Ocean View',
      date: 'June 25, 2025',
      location: 'Malibu, CA',
      size: '5.1 MB'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      title: 'Desert Sunset',
      date: 'June 20, 2025',
      location: 'Arizona',
      size: '3.5 MB'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop',
      title: 'Alpine Lake',
      date: 'June 15, 2025',
      location: 'Switzerland',
      size: '4.7 MB'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
      title: 'City Skyline',
      date: 'June 10, 2025',
      location: 'San Francisco, CA',
      size: '3.9 MB'
    }
  ];

  const albums = [
    { name: 'All Photos', count: 156, active: true },
    { name: 'Favorites', count: 23 },
    { name: 'Recent', count: 45 },
    { name: 'Screenshots', count: 12 },
    { name: 'Travel', count: 67 },
    { name: 'Nature', count: 89 },
    { name: 'Projects', count: 34 }
  ];

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
          <span className="ml-4 text-sm font-medium text-gray-700">Photos</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setViewMode(viewMode === 'grid' ? 'slideshow' : 'grid')}
            className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {viewMode === 'grid' ? 'Slideshow' : 'Grid'}
          </button>
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
        <div className="w-48 bg-gray-50 border-r border-gray-200 p-3">
          <div className="mb-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            {albums.map((album) => (
              <div 
                key={album.name}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  album.active ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                <span className="text-sm">{album.name}</span>
                <span className="text-xs text-gray-500">{album.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white">
          {viewMode === 'grid' ? (
            /* Grid View */
            <div className="p-4">
              <div className="grid grid-cols-4 gap-3">
                {photos.map((photo, index) => (
                  <div 
                    key={photo.id}
                    onClick={() => {
                      setSelectedPhoto(index);
                      setViewMode('slideshow');
                    }}
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-sm"
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Slideshow View */
            <div className="h-full flex flex-col">
              {/* Slideshow Controls */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                  <span className="text-sm text-gray-600">
                    {selectedPhoto + 1} of {photos.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Heart size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Share size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Download size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <RotateCcw size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ZoomIn size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ZoomOut size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Main Photo Display */}
              <div className="flex-1 flex items-center justify-center bg-black relative">
                <img 
                  src={photos[selectedPhoto]?.src} 
                  alt={photos[selectedPhoto]?.title}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={() => setSelectedPhoto(prev => prev > 0 ? prev - 1 : photos.length - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ←
                </button>
                <button 
                  onClick={() => setSelectedPhoto(prev => prev < photos.length - 1 ? prev + 1 : 0)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  →
                </button>
              </div>

              {/* Photo Info */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-lg mb-2">{photos[selectedPhoto]?.title}</h3>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Date:</span> {photos[selectedPhoto]?.date}
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> {photos[selectedPhoto]?.location}
                  </div>
                  <div>
                    <span className="font-medium">Size:</span> {photos[selectedPhoto]?.size}
                  </div>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="flex gap-2 overflow-x-auto">
                  {photos.map((photo, index) => (
                    <button
                      key={photo.id}
                      onClick={() => setSelectedPhoto(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedPhoto === index ? 'border-blue-500' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosApp;
