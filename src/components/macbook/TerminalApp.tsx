import { useState, useEffect, useRef } from 'react';
import { X, Minimize2, Maximize2 } from 'lucide-react';

interface TerminalAppProps {
  onClose: () => void;
}

const TerminalApp = ({ onClose }: TerminalAppProps) => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Last login: Wed Jul 2 14:30:25 on ttys000',
    'MacBook-Pro:~ user$ '
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const systemCommands = {
    'ls': () => 'Desktop    Documents    Downloads    Pictures    Music    Movies    Applications',
    'pwd': () => '/Users/user',
    'whoami': () => 'user',
    'date': () => new Date().toString(),
    'uptime': () => '14:30  up 2 days,  3:42, 2 users, load averages: 1.85 2.04 2.12',
    'ps': () => 'PID   COMMAND\n1234  Safari\n5678  VS Code\n9012  Terminal\n3456  Music',
    'top': () => 'Processes: 345 total, 2 running, 343 sleeping, 1872 threads\nLoad Avg: 1.85, 2.04, 2.12  CPU usage: 15.2% user, 8.4% sys, 76.4% idle',
    'df': () => 'Filesystem     512-blocks      Used Available Capacity   Mounted on\n/dev/disk1s1   976490576 456789012 519701564    47%    /',
    'clear': () => 'CLEAR_TERMINAL',
    'help': () => 'Available commands: ls, pwd, whoami, date, uptime, ps, top, df, clear, help, git, npm, node, python3, cat, mkdir, touch, rm, mv, cp',
    'git status': () => 'On branch main\nYour branch is up to date with \'origin/main\'.\n\nnothing to commit, working tree clean',
    'git log --oneline': () => 'a1b2c3d Add new features\nb4c5d6e Fix styling issues\nc7d8e9f Initial commit',
    'npm version': () => '8.19.2',
    'node --version': () => 'v18.17.0',
    'python3 --version': () => 'Python 3.11.4',
    'cat package.json': () => '{\n  "name": "portfolio-app",\n  "version": "1.0.0",\n  "scripts": {\n    "dev": "vite",\n    "build": "vite build"\n  }\n}',
    'mkdir test': () => '',
    'touch test.txt': () => '',
    'echo "Hello World"': () => 'Hello World',
    'echo $HOME': () => '/Users/user',
    'echo $PATH': () => '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin'
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    // Add command to history
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Add command to display
    setHistory(prev => [...prev, `MacBook-Pro:~ user$ ${trimmedCmd}`]);

    // Process command
    if (systemCommands[trimmedCmd as keyof typeof systemCommands]) {
      const result = systemCommands[trimmedCmd as keyof typeof systemCommands]();
      if (result === 'CLEAR_TERMINAL') {
        setHistory(['MacBook-Pro:~ user$ ']);
      } else if (result) {
        setHistory(prev => [...prev, result, 'MacBook-Pro:~ user$ ']);
      } else {
        setHistory(prev => [...prev, 'MacBook-Pro:~ user$ ']);
      }
    } else if (trimmedCmd.startsWith('echo ')) {
      const text = trimmedCmd.substring(5).replace(/"/g, '');
      setHistory(prev => [...prev, text, 'MacBook-Pro:~ user$ ']);
    } else if (trimmedCmd.startsWith('cd ')) {
      setHistory(prev => [...prev, 'MacBook-Pro:~ user$ ']);
    } else {
      setHistory(prev => [...prev, `zsh: command not found: ${trimmedCmd}`, 'MacBook-Pro:~ user$ ']);
    }

    setCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(command);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCommand('');
        } else {
          setHistoryIndex(newIndex);
          setCommand(commandHistory[newIndex] || '');
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple autocomplete for common commands
      const availableCommands = Object.keys(systemCommands);
      const matches = availableCommands.filter(cmd => cmd.startsWith(command));
      if (matches.length === 1) {
        setCommand(matches[0]);
      }
    }
  };

  return (
    <div className="flex-1 bg-black relative">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600" onClick={onClose}></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600"></button>
            <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600"></button>
          </div>
          <span className="ml-4 text-sm font-medium text-gray-300">Terminal</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-700 rounded">
            <Minimize2 size={14} className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-700 rounded">
            <Maximize2 size={14} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="h-full p-4 overflow-y-auto bg-black text-green-400 font-mono text-sm leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
        
        {/* Current Command Line */}
        <div className="flex items-center">
          <span className="text-green-400">MacBook-Pro:~ user$ </span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 outline-none font-mono caret-green-400"
            autoFocus
          />
        </div>

        {/* Cursor Blink */}
        <div className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></div>
      </div>

      {/* Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 px-4 py-1 text-xs text-gray-400 border-t border-gray-700">
        <div className="flex justify-between">
          <span>Terminal — zsh — 80×24</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalApp;
