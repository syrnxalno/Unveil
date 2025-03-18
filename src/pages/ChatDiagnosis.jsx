import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatDiagnosis.css"; // Import scoped styles
import Chatbot from "../components/Chatbot.jsx"; // Import chatbot component
import therapyVideo from "../assets/untitled.mp4";

function ChatDiagnosis() {
  const navigate = useNavigate();

  return (
    <div className="chat-diagnosis-wrapper">
      <div className="chat-diagnosis-container">
        {/* Chatbot Component */}
        <Chatbot />
      </div>

      <div className="video-container">
        <video className="login-video" autoPlay loop muted>
          <source src={therapyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default ChatDiagnosis;
