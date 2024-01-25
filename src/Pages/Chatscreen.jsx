import React, { useState } from 'react';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'other' },
  ]);

  const handleNewMessage = () => {
    const newMessage = { id: messages.length + 1, text: 'New message', sender: 'user' };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-96 border border-gray-200 p-4 rounded-lg">
      <div className="flex-1 mb-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 ${
              message.sender === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-200'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-lg border border-gray-200 focus:outline-none"
        />
        <button
          onClick={handleNewMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
