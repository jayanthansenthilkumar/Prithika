import { useState, useEffect } from 'react';
import { X, Minimize2, Maximize2, Search, Archive, Trash2, Reply, Forward, Star, Paperclip } from 'lucide-react';

interface MailAppProps {
  onClose: () => void;
}

const MailApp = ({ onClose }: MailAppProps) => {
  const [selectedEmail, setSelectedEmail] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const emails = [
    {
      id: 1,
      sender: 'GitHub',
      subject: 'Security alert: New login from Chrome',
      preview: 'We noticed a new sign-in to your GitHub account from a new device...',
      time: '2:30 PM',
      read: false,
      starred: false,
      content: `Hi there,\n\nWe noticed a new sign-in to your GitHub account from a new device or location.\n\nDevice: Chrome on macOS\nLocation: San Francisco, CA\nTime: Today at 2:30 PM\n\nIf this was you, you can safely ignore this email. If you don't recognize this activity, please secure your account immediately.\n\nBest regards,\nGitHub Security Team`
    },
    {
      id: 2,
      sender: 'Apple Developer',
      subject: 'App Store Connect: New app review',
      preview: 'Your app submission has been reviewed and is ready for sale...',
      time: '11:45 AM',
      read: true,
      starred: true,
      content: `Dear Developer,\n\nGreat news! Your app submission "Portfolio App" has been reviewed and approved.\n\nYour app is now available on the App Store. You can view your app's status and analytics in App Store Connect.\n\nThank you for being part of the Apple Developer community.\n\nBest regards,\nApp Store Review Team`
    },
    {
      id: 3,
      sender: 'Stack Overflow',
      subject: 'Weekly Developer Newsletter',
      preview: 'This week: New React features, TypeScript updates, and more...',
      time: 'Yesterday',
      read: true,
      starred: false,
      content: `Hello Developer,\n\nHere's what's trending in the developer community this week:\n\n• React 18.3 introduces new features\n• TypeScript 5.0 performance improvements\n• New JavaScript proposals\n• Best practices for modern web development\n\nCheck out the full articles on Stack Overflow.\n\nHappy coding!\nStack Overflow Team`
    },
    {
      id: 4,
      sender: 'LinkedIn',
      subject: 'You have 3 new connection requests',
      preview: 'John Doe, Sarah Smith, and Mike Johnson want to connect...',
      time: 'Monday',
      read: false,
      starred: false,
      content: `Hi there,\n\nYou have new connection requests waiting for your response:\n\n• John Doe - Senior Developer at TechCorp\n• Sarah Smith - UI/UX Designer at DesignStudio\n• Mike Johnson - Product Manager at StartupXYZ\n\nView and respond to these requests in your LinkedIn inbox.\n\nBest regards,\nLinkedIn Team`
    }
  ];

  const folders = [
    { name: 'Inbox', count: 4, active: true },
    { name: 'Sent', count: 12 },
    { name: 'Drafts', count: 2 },
    { name: 'Archive', count: 156 },
    { name: 'Spam', count: 0 },
    { name: 'Trash', count: 8 }
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
          <span className="ml-4 text-sm font-medium text-gray-700">Mail</span>
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
        <div className="w-48 bg-gray-50 border-r border-gray-200 p-3">
          <button className="w-full bg-blue-500 text-white rounded-lg py-2 px-4 text-sm font-medium hover:bg-blue-600 transition-colors mb-4">
            Compose
          </button>
          
          <div className="space-y-1">
            {folders.map((folder) => (
              <div 
                key={folder.name}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  folder.active ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                <span className="text-sm">{folder.name}</span>
                {folder.count > 0 && (
                  <span className="text-xs bg-gray-300 text-gray-700 px-2 py-0.5 rounded-full">
                    {folder.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Email List */}
        <div className="w-80 border-r border-gray-200 bg-white">
          {/* Search Bar */}
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search emails..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email List */}
          <div className="overflow-y-auto">
            {emails.map((email, index) => (
              <div 
                key={email.id}
                onClick={() => setSelectedEmail(index)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                  selectedEmail === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                } ${!email.read ? 'bg-blue-25 border-l-4 border-blue-400' : ''}`}
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${!email.read ? 'font-semibold' : 'font-medium'}`}>
                      {email.sender}
                    </span>
                    {email.starred && <Star size={12} className="text-yellow-500 fill-current" />}
                  </div>
                  <span className="text-xs text-gray-500">{email.time}</span>
                </div>
                <h3 className={`text-sm mb-1 ${!email.read ? 'font-semibold' : ''}`}>
                  {email.subject}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2">{email.preview}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Email Content */}
        <div className="flex-1 bg-white">
          {emails[selectedEmail] && (
            <div className="h-full flex flex-col">
              {/* Email Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h1 className="text-lg font-semibold">{emails[selectedEmail].subject}</h1>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Archive size={16} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Trash2 size={16} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Reply size={16} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Forward size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{emails[selectedEmail].sender}</p>
                    <p className="text-sm text-gray-500">to me</p>
                  </div>
                  <span className="text-sm text-gray-500">{emails[selectedEmail].time}</span>
                </div>
              </div>

              {/* Email Body */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="prose prose-sm max-w-none">
                  {emails[selectedEmail].content.split('\n').map((line, index) => (
                    <p key={index} className="mb-2">{line}</p>
                  ))}
                </div>
              </div>

              {/* Reply Section */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                    Reply
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Reply All
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Forward
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MailApp;
