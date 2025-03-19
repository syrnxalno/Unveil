import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./YS.css";

function YS() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [mood, setMood] = useState("");
  const [ventText, setVentText] = useState("");
  const [journalEntry, setJournalEntry] = useState("");

  const handlePostSubmit = () => {
    if (post.trim()) {
      setPosts((prev) => [...prev, post]);
      setPost("");
    }
  };

  const handleVentRelease = () => {
    setVentText("");
  };

  const createRipple = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.className = "ripple";

    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="yourspace-container">
      <div className="yourspace-wrapper">
        <div className="stars-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Features List */}
        <div className="features-container">
          <h2>Your Space</h2>
          <div className="features-grid">
            {["Anonymous Posting", "Mood Tracker", "Vent & Release", "Daily Journal"].map((feature, index) => (
              <motion.div
                key={index}
                className={`feature-box ${selectedFeature === feature ? "selected" : ""}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  createRipple(e);
                  setSelectedFeature(feature);
                }}
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Display */}
        <div className="feature-display-container">
          <AnimatePresence mode="wait">
            {selectedFeature ? (
              <motion.div
                key={selectedFeature}
                className="selected-feature-container"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {selectedFeature === "Anonymous Posting" && (
                  <>
                    <h2>Anonymous Posting</h2>
                    <textarea
                      placeholder="Share something anonymously..."
                      value={post}
                      onChange={(e) => setPost(e.target.value)}
                    />
                    <button onClick={handlePostSubmit}>Post</button>
                    <div className="posts">
                      {posts.map((p, index) => (
                        <motion.p key={index}>{p}</motion.p>
                      ))}
                    </div>
                  </>
                )}

                {selectedFeature === "Mood Tracker" && (
                  <>
                    <h2>Mood Tracker</h2>
                    <div className="mood-options">
                      {["😀", "😐", "😔", "😡", "😰"].map((emoji) => (
                        <span key={emoji} onClick={() => setMood(emoji)}>
                          {emoji}
                        </span>
                      ))}
                    </div>
                    {mood && <p>Current Mood: {mood}</p>}
                  </>
                )}

                {selectedFeature === "Vent & Release" && (
                  <>
                    <h2>Vent & Release</h2>
                    <textarea
                      placeholder="Type your frustrations..."
                      value={ventText}
                      onChange={(e) => setVentText(e.target.value)}
                    />
                    <button onClick={handleVentRelease}>Burn It</button>
                  </>
                )}

                {selectedFeature === "Daily Journal" && (
                  <>
                    <h2>Daily Thought Journal</h2>
                    <textarea
                      placeholder="Write your thoughts here..."
                      value={journalEntry}
                      onChange={(e) => setJournalEntry(e.target.value)}
                    />
                  </>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                className="placeholder-message"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                Select a feature from the left
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default YS;
