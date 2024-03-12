import React, { useState, useEffect } from "react";
import "./Messagemodal.css";
import {
  fetchMessagesForBoard,
  fetchBoard,
  postMessageToBoard,
} from "../../utils/fetch";

const Messagemodal = ({ game, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchMessagesToState();
  }, []);

  const fetchMessagesToState = async () => {
    try {
      // Fetch the board
      const boardData = await fetchBoard(game.name);
      const boardId = boardData.id;

      // Fetch messages
      const messageData = await fetchMessagesForBoard(boardId);
      setMessages(messageData.messages);
    } catch (error) {
      console.error("Error setting messages:", error);
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleSendMessage = async () => {
    try {
      // Ensure there is a message
      if (newMessage.trim() !== "") {
        // Fetch or create the board for the selected game
        const boardData = await fetchBoard(game.name);
        const boardId = boardData.id;

        // Send the new message to the backend
        await postMessageToBoard(boardId, newMessage);

        // Fetch updated messages
        await fetchMessagesToState();

        // Clear the input field
        setNewMessage("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
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
          {/* <p>Publishers: {game.publishers}</p> */}
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
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="send-but" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messagemodal;
