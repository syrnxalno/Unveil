import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatDiagnosis.css"; // Import styles
import Chatbot from "../components/Chatbot.jsx"; // Import chatbot component

function ChatDiagnosis() {
  const navigate = useNavigate();

  return (
    <div className="chat-diagnosis-wrapper">
      <div className="chat-diagnosis-container">
        {/* Chatbot Component */}
        <Chatbot />

        {/* Back Button */}
        <button className="back-button" onClick={() => navigate("/get-support")}>
          Back to Support
        </button>
      </div>
    </div>
  );
}

export default ChatDiagnosis;
