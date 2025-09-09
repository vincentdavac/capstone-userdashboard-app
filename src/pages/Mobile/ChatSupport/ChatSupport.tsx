import { useState } from 'react';
import { Send } from 'lucide-react';

const ChatSupport = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! How can I help you today?',
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);

    // Example: fake bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: "Thanks for your message! We'll get back shortly.",
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <div
      className="flex flex-col 
    w-full max-w-md  /* max width 400px */
    h-[660px] sm:h-[600px] md:h-[650px] /* taller on larger screens */
    border rounded-2xl shadow-lg 
    bg-white dark:bg-gray-900 
    border-gray-200 dark:border-gray-700
    mx-auto"
    >
      {/* Header */}
      <div className="p-3 bg-blue-600 text-white font-semibold rounded-t-2xl">
        Chat Support
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col max-w-[80%] ${
              msg.sender === 'user' ? 'ml-auto items-end' : 'items-start'
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
              }`}
            >
              {msg.text}
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              {msg.time}
            </span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 flex items-center gap-2 border-t border-gray-200 dark:border-gray-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none 
        border-gray-300 dark:border-gray-600 
        bg-white dark:bg-gray-800 
        text-gray-900 dark:text-gray-100
        placeholder-gray-400 dark:placeholder-gray-500"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatSupport;
