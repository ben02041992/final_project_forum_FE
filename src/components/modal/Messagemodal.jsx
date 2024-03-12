import React, { useState, useEffect } from "react";
import "./Messagemodal.css";
import { fetchMessagesForBoard, fetchBoard } from "../../utils/fetch";

const Messagemodal = ({ game, onClose }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessagesToState();
  }, []);

  const fetchMessagesToState = async () => {
    try {
      const messageData = await fetchMessagesForBoard();
      setMessages(messageData);
    } catch (error) {
      console.error("Error setting messages:", error);
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={handleContentClick}>
        <div className="modal-header">
          <h2>{game.name}</h2>
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
          <p>Publishers: {game.publishers}</p>
        </div>
        <div className="modal-messages">
          <p>
            Messages go here:
            <br />
            {messages.map((message) => (
              <span key={message.id}>
                {message.user}: {message.content}
                <br />
              </span>
            ))}
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
