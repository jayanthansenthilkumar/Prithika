
import { Search, Phone, Video, Info, Send, Smile } from 'lucide-react';
import WindowHeader from './WindowHeader';

interface MessagesAppProps {
  onClose: () => void;
}

const MessagesApp = ({ onClose }: MessagesAppProps) => {
  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'That looks amazing! 🎉',
      time: '2:15 PM',
      unread: 2,
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Dev Team',
      lastMessage: 'Meeting at 3 PM today',
      time: '1:45 PM',
      unread: 0,
      avatar: 'DT'
    },
    {
      id: 3,
      name: 'Mom',
      lastMessage: 'How\'s work going?',
      time: '12:30 PM',
      unread: 1,
      avatar: 'M'
    }
  ];

  const messages = [
    {
      id: 1,
      text: 'Hey! Just saw your new portfolio website',
      sender: 'other',
      time: '2:10 PM'
    },
    {
      id: 2,
      text: 'Check out my new portfolio website! 🚀',
      sender: 'me',
      time: '2:12 PM'
    },
    {
      id: 3,
      text: 'Wow, this MacBook demo is impressive! Love the attention to detail.',
      sender: 'other',
      time: '2:14 PM'
    },
    {
      id: 4,
      text: 'Thanks! Built with React and lots of love ✨',
      sender: 'me',
      time: '2:15 PM'
    },
    {
      id: 5,
      text: 'That looks amazing! 🎉',
      sender: 'other',
      time: '2:15 PM'
    }
  ];

  return (
    <div className="flex-1 bg-gray-100 h-full overflow-hidden rounded-lg">
      {/* Messages Window */}
      <div className="bg-white shadow-2xl h-full flex flex-col">
        {/* Window Header */}
        <div className="border-b border-gray-200">
          <WindowHeader 
            title="Messages" 
            onClose={onClose}
            onMinimize={() => console.log('Minimize Messages')}
            onMaximize={() => console.log('Maximize Messages')}
          />
        </div>
        
        {/* Messages Content */}
        <div className="flex-1 flex">
          {/* Sidebar */}
          <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search conversations"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div 
                  key={conv.id}
                  className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-100 ${conv.id === 1 ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''}`}
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {conv.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">{conv.name}</h3>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center ml-2">
                      <span className="text-xs text-white font-bold">{conv.unread}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  SJ
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Sarah Johnson</h2>
                  <p className="text-sm text-green-600">Active now</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Phone size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Video size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Info size={20} />
                </button>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.sender === 'me' 
                      ? 'bg-blue-500 text-white rounded-br-md' 
                      : 'bg-gray-200 text-gray-900 rounded-bl-md'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Smile size={20} />
                </button>
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-full transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesApp;
