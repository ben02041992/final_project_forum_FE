import React from "react";
import "./Messagemodal.css";

const Messagemodal = ({ game, onClose }) => {
  const handleContentClick = (e) => {
    // Prevent event propagation to the overlay, which triggers the modal closure
    e.stopPropagation();
  };

  const handleRefresh = () => {
    fetchMessagesToState();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={handleContentClick}>
        <div className="modal-header">
          <h2>{game.name}</h2>
          <button onClick={handleRefresh}>Refresh</button>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-content">
          <p>Released: {game.released}</p>
          <p>Rating: {game.rating}</p>
          <p>Genres: {game.genres.map((genre) => genre.name).join(", ")}</p>
          <p>
            Platforms:{" "}
            {game.platforms
              .map((platform) => platform.platform.name)
              .join(", ")}
          </p>
          <p>{game.publishers}</p>
        </div>
        <div className="modal-messages">
          <p>
            Messages go here <br /> User: Message
          </p>
        </div>
        <div className="messenger">
          <input
            className="input"
            type="text"
            placeholder="Write message here"
          />
          <button className="send-but">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messagemodal;
