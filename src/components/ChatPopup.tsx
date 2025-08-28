import React, { useState } from 'react';
import './ChatPopup.css';

const ChatPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{from: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'This is a demo reply.' }]);
    }, 500);
    setInput('');
  };

  return (
    <div className="chat-popup-container">
      {open && (
        <div className="chat-popup">
          <div className="chat-header">
            <img src="/h.png" alt="Chat Logo" className="chat-logo" />
            <span>Live Chat</span>
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      {!open && (
        <button className="chat-open-btn" onClick={() => setOpen(true)}>
          <img src="/h.png" alt="Chat Logo" className="chat-logo-btn" /> Chat
        </button>
      )}
    </div>
  );
};

export default ChatPopup;
