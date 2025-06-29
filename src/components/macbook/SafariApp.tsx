
interface SafariAppProps {
  onClose: () => void;
}

const SafariApp = ({ onClose }: SafariAppProps) => (
  <div className="flex-1 bg-gray-100 dark:bg-gray-900">
    {/* Safari Window */}
    <div className="bg-white dark:bg-gray-800 rounded-t-xl shadow-2xl h-full">
      {/* Window Controls */}
      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-t-xl border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></button>
          <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"></button>
          <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></button>
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-gray-200 dark:bg-gray-600 rounded-lg px-4 py-2 text-center">
            <span className="text-gray-600 dark:text-gray-300 text-sm">john-doe-portfolio.com</span>
          </div>
        </div>
      </div>
      
      {/* Safari Content */}
      <div className="p-6 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Portfolio Website</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Welcome to my interactive portfolio showcase! Built with modern web technologies.
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="font-bold mb-4">Featured Technologies</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>• React.js</div>
              <div>• TypeScript</div>
              <div>• Tailwind CSS</div>
              <div>• Vite</div>
              <div>• Framer Motion</div>
              <div>• Node.js</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SafariApp;
