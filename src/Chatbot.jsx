import { useState } from "react";
 import { getBotReply } from "./utils/botLogic";
// import "../chatbot.css";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([
    { from: "bot", text: "Hey there 👋 How can I help you today?" },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMsg = { from: "user", text: message };
    const botReply = getBotReply(message);

    setChats(prev => [
      ...prev,
      userMsg,
      { from: "bot", text: botReply },
    ]);

    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">🤖 Chatbot</div>

      <div className="chat-body">
        {chats.map((chat, i) => (
          <div key={i} className={chat.from}>
            {chat.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Message..."
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}
