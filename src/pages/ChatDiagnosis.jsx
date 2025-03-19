import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatDiagnosis.css"; // Import scoped styles
import Chatbot from "../components/Chatbot.jsx"; // Import chatbot component
import gif from "../assets/gif1.gif";

function ChatDiagnosis() {
  const navigate = useNavigate();

  return (
    <div className="chat-diagnosis-wrapper">
      <div className="chat-diagnosis-container">
        {/* Chatbot Component */}
        <Chatbot />
      </div>

      <div className="gif-container">
        <img className="diagnosis-gif" src={gif} alt="Diagnosis GIF" />
      </div>
    </div>
  );
}

export default ChatDiagnosis;
