import React, { useState } from 'react';
import axios from 'axios';
import { MessageCircle, X } from 'lucide-react';

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! How can I help you today?' }]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');

    try {
        const context = {
            role: 'system',
            content: `You are a helpful assistant for Venugi Perera. You help users understand his profile, experience, and work. If someone asks "Who is Venugi Perera?", respond that he is a 21-year-old full-stack developer based on the MERN stack, with experience in AI projects. She specializes in building intelligent applications and modern web solutions. Reply only to questions related to Venugi Perera. For unrelated queries, respond with: "Sorry, I'm not able to answer your questions.`,
          };
          
          const response = await axios.post(
            'https://api.mistral.ai/v1/chat/completions',
            {
              model: 'mistral-small-latest',
              messages: [context, ...updatedMessages],
            },
            {
              headers: {
                'Authorization': `Bearer s9AVaAgGKb0iGgqjiHC2NO7ELwb0reLo`,
                'Content-Type': 'application/json',
              },
            }
          );          

      const assistantMessage = response.data.choices[0].message;
      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="w-80 h-96 bg-white text-black rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span>Chatbot</span>
            <button onClick={() => setOpen(false)}><X size={20} /></button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-1 p-2 rounded ${msg.role === 'user' ? 'bg-gray-200 self-end text-right' : 'bg-gray-100'}`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-l"
            />
            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-r">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatbot;
