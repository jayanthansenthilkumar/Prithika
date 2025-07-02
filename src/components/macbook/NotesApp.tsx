import { useState } from 'react';
import { FileText, Plus, Search, Pin, Share, Trash2, Bold, Italic, List, AlignLeft } from 'lucide-react';
import WindowHeader from './WindowHeader';

interface NotesAppProps {
  onClose: () => void;
}

const NotesApp = ({ onClose }: NotesAppProps) => {
  const [selectedNote, setSelectedNote] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const notes = [
    {
      id: 1,
      title: 'Project Ideas',
      content: `# New Project Ideas

## Portfolio Enhancement
- Add dark mode toggle
- Implement smooth animations
- Add project case studies
- Create blog section

## Learning Goals
- Master TypeScript advanced patterns
- Learn Three.js for 3D animations
- Dive deeper into React Server Components
- Explore AI/ML integration

## Side Projects
- Weather app with location services
- Task management with team collaboration
- Real-time chat application
- Code snippet manager`,
      date: new Date().toLocaleDateString(),
      pinned: true
    },
    {
      id: 2,
      title: 'Meeting Notes - Team Sync',
      content: `# Team Sync Meeting Notes

**Date:** ${new Date().toLocaleDateString()}
**Attendees:** Sarah, Mike, Alex, Prithika

## Agenda
1. Sprint review
2. Upcoming deadlines
3. Technical challenges
4. Next sprint planning

## Key Points
- Portfolio project deadline: End of month
- Code review scheduled for Friday
- New design system implementation
- Performance optimization needed

## Action Items
- [ ] Complete user authentication module
- [ ] Review API documentation
- [ ] Update project timeline
- [ ] Schedule client demo`,
      date: new Date().toLocaleDateString(),
      pinned: false
    },
    {
      id: 3,
      title: 'Learning Resources',
      content: `# Development Learning Resources

## React & TypeScript
- React TypeScript best practices
- Advanced hooks patterns
- State management solutions
- Testing strategies

## Design & UX
- Figma design principles
- Color theory and accessibility
- Modern UI patterns
- Animation guidelines

## Tools & Productivity
- VS Code extensions
- Git workflow optimization
- Docker containerization
- CI/CD pipeline setup

## Inspiration
- Portfolio websites for reference
- Design trend analysis
- Open source project contributions`,
      date: new Date(Date.now() - 86400000).toLocaleDateString(),
      pinned: false
    }
  ];

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 bg-white h-full overflow-hidden rounded-lg">
      <div className="bg-white shadow-2xl h-full flex flex-col">
        {/* Window Header */}
        <div className="border-b border-gray-200">
          <WindowHeader 
            title="Notes" 
            onClose={onClose}
            onMinimize={() => console.log('Minimize Notes')}
            onMaximize={() => console.log('Maximize Notes')}
          />
        </div>
        
        {/* Notes Content */}
        <div className="flex-1 flex">
          {/* Sidebar */}
          <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
            {/* Search and New Note */}
            <div className="p-4 border-b border-gray-200">
              <button className="w-full bg-yellow-400 text-gray-800 py-2 px-4 rounded-lg flex items-center justify-center gap-2 mb-3 hover:bg-yellow-500 transition-colors">
                <Plus size={16} />
                New Note
              </button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
            
            {/* Notes List */}
            <div className="flex-1 overflow-y-auto">
              {filteredNotes.map((note, index) => (
                <div 
                  key={note.id}
                  onClick={() => setSelectedNote(index)}
                  className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                    selectedNote === index ? 'bg-yellow-50 border-l-4 border-l-yellow-400' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 truncate flex-1">{note.title}</h3>
                    <div className="flex items-center gap-1 ml-2">
                      {note.pinned && <Pin size={14} className="text-yellow-500" />}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {note.content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.substring(0, 100)}...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">{note.date}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Main Editor */}
          <div className="flex-1 flex flex-col">
            {/* Editor Toolbar */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                    <Bold size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                    <Italic size={16} className="text-gray-600" />
                  </button>
                  <div className="w-px h-6 bg-gray-300 mx-2"></div>
                  <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                    <List size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                    <AlignLeft size={16} className="text-gray-600" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                    <Pin size={16} className={`${filteredNotes[selectedNote]?.pinned ? 'text-yellow-500' : 'text-gray-600'}`} />
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                    <Share size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                    <Trash2 size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              {filteredNotes[selectedNote] && (
                <div className="max-w-4xl mx-auto">
                  <div className="mb-4">
                    <input 
                      type="text" 
                      value={filteredNotes[selectedNote].title}
                      className="w-full text-2xl font-bold border-none outline-none bg-transparent"
                      placeholder="Note title..."
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Last modified: {filteredNotes[selectedNote].date}
                    </p>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                      {filteredNotes[selectedNote].content}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
