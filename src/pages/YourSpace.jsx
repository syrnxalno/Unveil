import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./YourSpace.css";

function YourSpace() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [mood, setMood] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const [ventText, setVentText] = useState("");

  const handlePostSubmit = () => {
    if (post.trim() !== "") {
      setPosts((prevPosts) => [...prevPosts, post]);
      setPost("");
    }
  };

  const handleVentRelease = () => {
    setVentText(""); // Simulate "burning" effect
  };

  const createRipple = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
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
          ></div>
        ))}
      </div>

      <div className="features-container">
        <div className="features-grid">
          {[
            { id: "AnonymousPosting", title: "Anonymous Posting" },
            { id: "MoodTracker", title: "Mood Tracker" },
            { id: "VentRelease", title: "Vent & Release" },
            { id: "DailyJournal", title: "Daily Thought Journal" },
          ].map((feature) => (
            <motion.div
              key={feature.id}
              className={`feature-box ${
                selectedFeature === feature.id ? "selected" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                createRipple(e);
                setSelectedFeature(feature.id);
              }}
            >
              {feature.title}
            </motion.div>
          ))}
        </div>
      </div>

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
              <div className="selected-feature-content">
                {selectedFeature === "AnonymousPosting" && (
                  <>
                    <h2>Anonymous Posting</h2>
                    <textarea
                      placeholder="Share something anonymously..."
                      value={post}
                      onChange={(e) => setPost(e.target.value)}
                    ></textarea>
                    <button onClick={handlePostSubmit}>Post</button>
                    <div className="posts">
                      {posts.map((p, index) => (
                        <motion.p key={index} layoutId={`post-${index}`}>
                          {p}
                        </motion.p>
                      ))}
                    </div>
                  </>
                )}

                {selectedFeature === "MoodTracker" && (
                  <>
                    <h2>Mood Tracker</h2>
                    <div className="mood-options">
                      {["😀", "😢", "😡", "😌", "😰"].map((emoji) => (
                        <motion.span
                          key={emoji}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setMood(emoji)}
                        >
                          {emoji}
                        </motion.span>
                      ))}
                    </div>
                    {mood && <p>Your current mood: {mood}</p>}
                  </>
                )}

                {selectedFeature === "VentRelease" && (
                  <>
                    <h2>Vent & Release</h2>
                    <textarea
                      placeholder="Type your frustrations..."
                      value={ventText}
                      onChange={(e) => setVentText(e.target.value)}
                    ></textarea>
                    <button onClick={handleVentRelease}>Burn It 🔥</button>
                  </>
                )}

                {selectedFeature === "DailyJournal" && (
                  <>
                    <h2>Daily Thought Journal</h2>
                    <textarea
                      placeholder="Write your thoughts here..."
                      value={journalEntry}
                      onChange={(e) => setJournalEntry(e.target.value)}
                    ></textarea>
                  </>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              className="selected-feature-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <p>Select a feature from the left</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

export default YourSpace;
