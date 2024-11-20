import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]); // Stores chat messages
  const [newMessage, setNewMessage] = useState(""); // Stores the new message input
  const [username, setUsername] = useState("User1"); // Hardcoded for simplicity, replace with actual user logic

  // Fetch chat messages from the server
  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/chats");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Add a new chat message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return; // Don't allow empty messages

    try {
      const response = await axios.post("http://localhost:5000/api/chats", {
        from: username,
        to: "Everyone", // Replace with logic for specific recipient
        msg: newMessage,
      });
      setMessages([response.data, ...messages]); // Add the new message to the list
      setNewMessage(""); // Clear the input
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Load messages on component mount
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-orange-100">
      {/* Chat Header */}
      <div className="bg-orange-300 py-4 text-center text-white font-bold text-2xl">
        Chat Room
      </div>

      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((msg) => (
          <div key={msg._id} className={`mb-3 ${msg.from === username ? "text-right" : "text-left"}`}>
            <div className="inline-block px-4 py-2 bg-white rounded-md shadow-md">
              <p className="font-bold text-gray-800">{msg.from}</p>
              <p className="text-gray-600">{msg.msg}</p>
              <p className="text-xs text-gray-400">{new Date(msg.created_at).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <form onSubmit={sendMessage} className="p-4 bg-white">
        <div className="flex">
          <input
            type="text"
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 bg-orange-500 text-white font-semibold rounded-r-md hover:bg-orange-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
