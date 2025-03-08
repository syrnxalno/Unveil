import React from "react";
import "./game-content.css"; // Referencing the new CSS file

function GameExplore() {
    return (
        
        <div className="explore-container">
             

            {/* Embedding Games via iFrames */}
            <div className="iframe-container">
            <div className="text-container">
        <h1>Discover Relaxing Games & Simulations</h1>
       
      </div>
                <iframe
                    src="https://paveldogreat.github.io/WebGL-Fluid-Simulation/"
                    title="Relaxing Game 1"
                    className="game-iframe"
                    allowFullScreen
                ></iframe>

                <iframe
                    src="https://www.onlinegames.io/nova-craft/"
                    title="Relaxing Game 2"
                    className="game-iframe"
                    allowFullScreen
                ></iframe>

                <iframe
                    src="https://zv1y2i8p.play.gamezop.com/g/rkWfy2pXq0r"
                    title="Relaxing Game 2"
                    className="game-iframe"
                    allowFullScreen
                ></iframe>

                <iframe
                    src="https://www.onlinegames.io/kick-the-dummy/"
                    title="Relaxing Game 2"
                    className="game-iframe"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Back Button */}
            <button className="back-button" onClick={() => window.history.back()}>
                Go Back
            </button>
        </div>
    );
}

export default GameExplore;
