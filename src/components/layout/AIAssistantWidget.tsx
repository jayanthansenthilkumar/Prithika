
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Terminal, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Message {
  role: "bot" | "user";
  text: string;
}

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! I'm the Austral AI technical assistant. How can I help you architect your intelligence infrastructure today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = message.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setMessage("");
    setIsTyping(true);

    // Mock an AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { 
          role: "bot", 
          text: `I've analyzed your request regarding "${userMsg}". As a mock AI assistant for this enterprise platform, I can confirm our infrastructure is designed to handle this at scale.` 
        }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div >
      
      {/* Chat Window */}
      <div 
        
      >
        {/* Header */}
        <div >
          <div >
            <Terminal  />
            <span >austral-assistant</span>
          </div>
          <button 
            onClick={handleToggle}
            
          >
            <X  />
          </button>
        </div>
        
        {/* Messages Area */}
        <div >
          {messages.map((msg, idx) => (
            <div key={idx} >
              {msg.role === "bot" ? (
                <div >
                  <Sparkles  />
                </div>
              ) : (
                <div >
                  <span >U</span>
                </div>
              )}
              
              <div >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div >
              <div >
                <Sparkles  />
              </div>
              <div >
                <span  style={{ animationDelay: '0ms' }} />
                <span  style={{ animationDelay: '150ms' }} />
                <span  style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <div >
          <form 
            
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Query austral-assistant..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              
            />
            <Button 
              type="submit" 
              size="icon" 
              
              disabled={!message.trim() || isTyping}
            >
              <Send  />
            </Button>
          </form>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
      >
        <div  />
        
        <div >
          {isOpen ? (
            <X  />
          ) : (
            <MessageSquare  />
          )}
        </div>
        
        {!isOpen && (
          <span >
            <span ></span>
            <span ></span>
          </span>
        )}
      </button>

    </div>
  );
}
