import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  from: 'user' | 'bot';
  text: string;
  options?: string[];
  timestamp: Date;
}

const ChatPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: 'Hello! Welcome to Handykruu. How can I help you today?',
      timestamp: new Date()
    }
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
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const msg = input.toLowerCase();
      let botResponse: Message;

      if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        botResponse = {
          from: 'bot',
          text: 'Hello! I\'m here to help you with Handykruu services. What would you like to know about?',
          options: ['Our Services', 'Get a Quote', 'Contact Info', 'Portfolio'],
          timestamp: new Date()
        };
      } else if (msg.includes('service') || msg === 'our services') {
        botResponse = {
          from: 'bot',
          text: 'We offer comprehensive construction services:\n\n🏗️ Construction & Building\n🔨 Renovation & Remodeling\n🎨 Interior Design\n🏠 Flooring Solutions\n\nWhich service interests you most?',
          options: ['Construction', 'Renovation', 'Interior Design', 'Flooring'],
          timestamp: new Date()
        };
      } else if (msg.includes('quote') || msg === 'get a quote') {
        botResponse = {
          from: 'bot',
          text: 'Great! I\'d love to help you get a quote. Please provide some details about your project, or would you prefer to speak with our team directly?',
          options: ['Call Us: +94 11 234 5678', 'Email: info@handykruu.lk', 'Fill Contact Form'],
          timestamp: new Date()
        };
      } else if (msg.includes('contact') || msg === 'contact info') {
        botResponse = {
          from: 'bot',
          text: '📍 Address: 123 Galle Road, Colombo 03, Sri Lanka\n📞 Phone: +94 11 234 5678\n📧 Email: info@handykruu.lk\n🕒 Hours: Mon-Fri 8AM-6PM, Sat 9AM-4PM',
          timestamp: new Date()
        };
      } else if (msg === 'portfolio') {
        botResponse = {
          from: 'bot',
          text: 'Check out our amazing portfolio! We\'ve completed 500+ projects including luxury villas, office renovations, and commercial buildings. Scroll up to see our Portfolio section on the website.',
          timestamp: new Date()
        };
      } else if (msg.includes('construction')) {
        botResponse = {
          from: 'bot',
          text: 'Our construction services include:\n\n• New home construction\n• Commercial buildings\n• Extensions & additions\n• Infrastructure projects\n\nWe handle everything from foundation to finishing!',
          options: ['Get Construction Quote', 'View Projects', 'Contact Team'],
          timestamp: new Date()
        };
      } else if (msg.includes('renovation')) {
        botResponse = {
          from: 'bot',
          text: 'Transform your space with our renovation services:\n\n• Home renovations\n• Office remodeling\n• Kitchen & bathroom upgrades\n• Complete makeovers\n\nLet\'s discuss your renovation ideas!',
          options: ['Renovation Quote', 'Before/After Gallery', 'Schedule Consultation'],
          timestamp: new Date()
        };
      } else if (msg.includes('price') || msg.includes('cost')) {
        botResponse = {
          from: 'bot',
          text: 'Pricing depends on your specific requirements. We offer competitive rates and free consultations. Would you like to discuss your project for an accurate quote?',
          options: ['Yes, let\'s discuss', 'Email me details', 'Call me back'],
          timestamp: new Date()
        };
      } else {
        botResponse = {
          from: 'bot',
          text: 'I\'m here to help! You can ask me about our services, get quotes, or contact information. What would you like to know?',
          options: ['Our Services', 'Get a Quote', 'Contact Info', 'Portfolio'],
          timestamp: new Date()
        };
      }

      setMessages(prev => [...prev, botResponse]);
    }, 1000 + Math.random() * 1000);
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      from: 'user',
      text: option,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botResponse: Message;

      if (option.includes('Call Us') || option === 'Call me back') {
        botResponse = {
          from: 'bot',
          text: 'Perfect! Our team is available at +94 11 234 5678. We\'re open Mon-Fri 8AM-6PM and Sat 9AM-4PM. Looking forward to hearing from you!',
          timestamp: new Date()
        };
      } else if (option.includes('Email') || option === 'Email me details') {
        botResponse = {
          from: 'bot',
          text: 'Great! Send us your project details at info@handykruu.lk and we\'ll get back to you within 24 hours with a detailed proposal.',
          timestamp: new Date()
        };
      } else if (option === 'Fill Contact Form') {
        botResponse = {
          from: 'bot',
          text: 'Excellent! Please scroll down to our Contact section on the website to fill out the form. We\'ll respond quickly with all the information you need.',
          timestamp: new Date()
        };
      } else if (option.includes('Quote')) {
        botResponse = {
          from: 'bot',
          text: 'Fantastic! For an accurate quote, we\'ll need to understand your project better. Please contact us directly or fill out our contact form with project details.',
          options: ['Call Now', 'Email Details', 'Contact Form'],
          timestamp: new Date()
        };
      } else {
        botResponse = {
          from: 'bot',
          text: 'Thank you for your interest! Is there anything else I can help you with today?',
          options: ['Get a Quote', 'Contact Info', 'Other Services'],
          timestamp: new Date()
        };
      }

      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col mb-4 border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${msg.from === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`flex items-start space-x-2 ${msg.from === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.from === 'user' ? 'bg-[#FFB302]' : 'bg-gray-600'
                    }`}>
                      {msg.from === 'user' ? (
                        <User size={12} className="text-white" />
                      ) : (
                        <Bot size={12} className="text-white" />
                      )}
                    </div>
                    <div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        msg.from === 'user'
                          ? 'bg-[#FFB302] text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{msg.text}</p>
                      </div>
                      <p className={`text-xs text-gray-500 mt-1 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Options */}
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
            
            {/* Typing Indicator */}
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

          {/* Input */}
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

      {/* Open Button */}
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
