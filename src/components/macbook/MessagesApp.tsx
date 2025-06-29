
interface MessagesAppProps {
  onClose: () => void;
}

const MessagesApp = ({ onClose }: MessagesAppProps) => (
  <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-6">
    <div className="max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onClose} className="text-blue-500 hover:text-blue-400 transition-colors">
          ← Back
        </button>
        <h2 className="text-gray-900 dark:text-white font-semibold">Messages</h2>
      </div>
      <div className="space-y-4">
        <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md max-w-xs ml-auto">
          Check out my new portfolio website! 🚀
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
          Wow, this MacBook demo is impressive! Love the dark theme.
        </div>
        <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md max-w-xs ml-auto">
          Thanks! Built with React and lots of attention to detail ✨
        </div>
      </div>
    </div>
  </div>
);

export default MessagesApp;
