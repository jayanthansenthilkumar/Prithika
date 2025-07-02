import React, { useState } from 'react';
import { Folder, ChevronRight, File, Search, Grid3X3, List, ArrowLeft, ArrowRight, Home, Star } from 'lucide-react';
import AppWindow from './AppWindow';

interface FinderAppProps {
  onClose: () => void;
}

const FinderApp = ({ onClose }: FinderAppProps) => {
  const [currentPath, setCurrentPath] = useState(['Users', 'prithika']);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const folders = [
    { name: 'Desktop', type: 'folder' },
    { name: 'Documents', type: 'folder' },
    { name: 'Downloads', type: 'folder' },
    { name: 'Pictures', type: 'folder' },
    { name: 'Music', type: 'folder' },
    { name: 'Movies', type: 'folder' }
  ];

  const files = [
    { name: 'Portfolio.pdf', type: 'file' },
    { name: 'Resume.docx', type: 'file' },
    { name: 'Project_Demo.mp4', type: 'file' },
    { name: 'Screenshot.png', type: 'file' },
    { name: 'Code_Archive.zip', type: 'file' },
    { name: 'Presentation.pptx', type: 'file' }
  ];

  const allItems = [...folders, ...files];

  const sidebarItems = [
    { name: 'Favorites', items: [
      { name: 'Applications', type: 'folder' },
      { name: 'Desktop', type: 'folder' },
      { name: 'Documents', type: 'folder' },
      { name: 'Downloads', type: 'folder' }
    ]},
    { name: 'Locations', items: [
      { name: 'Prithika MacBook', type: 'folder' },
      { name: 'Network', type: 'folder' }
    ]},
    { name: 'Tags', items: [
      { name: 'Red', type: 'tag' },
      { name: 'Orange', type: 'tag' },
      { name: 'Yellow', type: 'tag' },
      { name: 'Green', type: 'tag' }
    ]}
  ];

  return (
    <AppWindow title="Finder" onClose={onClose} className="w-full h-full">
      <div className="grid grid-cols-[220px,1fr] h-full">
        {/* Sidebar */}
        <div className="border-r border-gray-700/50 p-2">
          <div className="space-y-1">
            {sidebarItems.map((section) => (
              <div key={section.name}>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {section.name}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700/30 cursor-pointer text-white/70 text-sm"
                      >
                        {item.type === 'folder' ? (
                          <Folder size={16} className="text-blue-400" />
                        ) : (
                          <Star size={16} className={`text-${item.name.toLowerCase()}-400`} />
                        )}
                        <span>{item.name}</span>
                        <ChevronRight size={14} className="ml-auto text-gray-500" />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button className="p-1 rounded hover:bg-gray-700/30 disabled:opacity-50" disabled>
                <ArrowLeft size={16} className="text-gray-400" />
              </button>
              <button className="p-1 rounded hover:bg-gray-700/30 disabled:opacity-50" disabled>
                <ArrowRight size={16} className="text-gray-400" />
              </button>
              <div className="flex items-center gap-1 text-sm text-gray-400 ml-4">
                <Home size={14} />
                {currentPath.map((path, index) => (
                  <span key={index} className="flex items-center gap-1">
                    <span>/</span>
                    <span className="hover:text-blue-400 cursor-pointer">{path}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-8 pr-4 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
                />
              </div>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Grid3X3 size={14} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <List size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* File Browser */}
          <div className="grid grid-cols-4 gap-4">
            {allItems.map((item) => {
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedItem(item.name)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedItem === item.name ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-700/30'
                  }`}
                >
                  {item.type === 'folder' ? (
                    <Folder size={40} className="text-blue-400" />
                  ) : (
                    <File size={40} className="text-gray-400" />
                  )}
                  <span className="text-xs text-center text-white/70 leading-tight">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppWindow>
  );
};

export default FinderApp;
