import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  from: 'user' | 'bot';
  text: string;
  options?: string[];
  timestamp: Date;
}

const botResponses: Record<string, Omit<Message, 'from'>> = {
  'Our Services': {
    text: `Welcome to HANDYKRUU – Let’s make things easier, together! 🚧
Our Services Include:
✍️ Architectural and Planning Services
⚒️ Home & Office Construction & Repairs
⚒️ Roofing & Flooring Services
🏊‍♀️ Swimming Pool Construction
🛁 Bathroom Fittings Services
🛋️ Furniture, Aluminium and Metal Works
👨‍🔧 Plumbing & Electrical Fixes
👨‍🔧 AC & CCTV Installations
👨‍🔧 Building Renovations
📞 Contact us: 0777 627 835 / 0777 627 836`,
    options: ['Get a Quote', 'Contact Info', 'Portfolio'],
    timestamp: new Date(),
  },
  'Get a Quote': {
    text: "Great! I'd love to help you get a quote. Please provide project details or contact our team directly.",
    options: ['Call Us: 0777 627 835', 'Email: info@handykruu.lk', 'Fill Contact Form'],
    timestamp: new Date(),
  },
  'Contact Info': {
    text: `📍 Address: 123 Galle Road, Colombo 03
📞 Phone: 0777 627 835 / 0777 627 836
📧 Email: info@handykruu.lk
🕒 Hours: Mon-Fri 8AM-6PM, Sat 9AM-4PM`,
    timestamp: new Date(),
  },
  'Portfolio': {
    text: "Check out our amazing portfolio! We've completed 500+ projects including luxury villas, office renovations, and commercial buildings.",
    timestamp: new Date(),
  },
};

const ChatPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: 'Hello! Welcome to HANDYKRUU. How can I help you today?',
      timestamp: new Date(),
      options: ['Our Services', 'Get a Quote', 'Contact Info', 'Portfolio'],
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      from: 'user',
      text: input,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lowerMsg = input.toLowerCase();

      let response: Omit<Message, 'from'>;

      // Simple keyword matching for typed input
      if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
        response = {
          text: "Hello! How can I assist you today?",
          options: ['Our Services', 'Get a Quote', 'Contact Info', 'Portfolio'],
          timestamp: new Date(),
        };
      } else if (lowerMsg.includes('service')) {
        response = botResponses['Our Services'];
      } else if (lowerMsg.includes('quote')) {
        response = botResponses['Get a Quote'];
      } else if (lowerMsg.includes('contact')) {
        response = botResponses['Contact Info'];
      } else if (lowerMsg.includes('portfolio')) {
        response = botResponses['Portfolio'];
      } else {
        response = {
          text: "I can help you! Please select one of the options below.",
          options: ['Our Services', 'Get a Quote', 'Contact Info', 'Portfolio'],
          timestamp: new Date(),
        };
      }

      setMessages(prev => [...prev, { from: 'bot', ...response }]);
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      from: 'user',
      text: option,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const response = botResponses[option] || {
        text: "Sorry, I didn't understand that. Please choose an option from the menu.",
        options: ['Our Services', 'Get a Quote', 'Contact Info', 'Portfolio'],
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, { from: 'bot', ...response }]);
    }, 800);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col mb-4 border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-[#FFB302] to-[#FFB302] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#FFB302] font-bold text-sm">H</span>
              </div>
              <div>
                <h3 className="font-semibold">Handykruu Support</h3>
                <p className="text-xs text-[#FFB302]/70">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${msg.from === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`flex items-start space-x-2 ${msg.from === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${msg.from === 'user' ? 'bg-[#FFB302]' : 'bg-gray-600'}`}>
                      {msg.from === 'user' ? <User size={12} className="text-white" /> : <Bot size={12} className="text-white" />}
                    </div>
                    <div>
                      <div className={`rounded-2xl px-4 py-2 ${msg.from === 'user' ? 'bg-[#FFB302] text-white rounded-br-md' : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'}`}>
                        <p className="text-sm whitespace-pre-line">{msg.text}</p>
                      </div>
                      <p className={`text-xs text-gray-500 mt-1 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                  {msg.options && (
                    <div className="mt-3 space-y-2">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="block w-full text-left px-3 py-2 text-sm bg-white border border-[#FFB302]/40 rounded-lg hover:bg-[#FFB302]/10 hover:border-[#FFB302]/60 transition-colors text-gray-700"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-2 shadow-sm border">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB302] focus:border-[#FFB302] outline-none text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-[#FFB302] text-white p-2 rounded-lg hover:bg-[#e6a800] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-[#FFB302] hover:bg-[#e6a800] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group animate-in slide-in-from-bottom-4"
        >
          <MessageCircle size={24} />
          <span className="font-medium">Chat with us</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </button>
      )}
    </div>
  );
};

export default ChatPopup;
