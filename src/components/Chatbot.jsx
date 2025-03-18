import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatBoxRef = useRef(null); // ✅ Reference to chat box

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, sender: "user" }];
    setMessages(newMessages);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chatbot", {  
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("🔥 Chatbot Response:", data);

      setMessages([...newMessages, { text: data.response || "⚠️ No response!", sender: "bot" }]);
    } catch (error) {
      console.error("❌ Chatbot Request Error:", error);
      setMessages([...newMessages, { text: "❌ Error: Unable to fetch response", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Scroll to the bottom when messages update
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot-wrapper">
      <div className="chat-container">
        <h2>Zephyr 7b Alpha</h2>
        <div className="chat-box" ref={chatBoxRef}> {/* Ref applied here */}
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {loading && <div className="message bot"></div>}
        </div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
