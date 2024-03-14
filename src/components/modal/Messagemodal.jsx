import React, { useState, useEffect } from "react";
import "./Messagemodal.css";
import {
  fetchMessagesForBoard,
  fetchBoardByName,
  postMessageToBoard,
  createBoard,
} from "../../utils/fetch";

const Messagemodal = ({ game, onClose, username }) => {
  const [messages, setMessages] = useState([{}]);

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchMessagesToState();
  }, [game]);

  const fetchMessagesToState = async () => {
    try {
      let boardData = await fetchBoardByName(game.name);
      const boardId = boardData.id;
      const messageData = await fetchMessagesForBoard(boardId);
      setMessages(messageData);
    } catch (error) {
      if (error.message.includes("Status: 404")) {
        //board has not been found
        try {
          let boardData = await createBoard(game.name);
          const boardId = boardData.board.id;
          const messageData = await fetchMessagesForBoard(boardId);
          setMessages(messageData);
        } catch (createError) {
          console.error("Error creating board: ", createError);
        }
      } else {
        console.error("Error setting messages: ", error);
      }
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleRefresh = () => {
    fetchMessagesToState();
  };

  const handleSendMessage = async () => {
    try {
      let boardData = await fetchBoardByName(game.name);
      const boardId = boardData.id;
      await postMessageToBoard(username, boardId, newMessage); //"user" should be replaced with logged in user username. stored in state
      await fetchMessagesToState();
      setNewMessage("");
    } catch (error) {
      if (error.message.includes("Status: 404")) {
        //board has not been found
        try {
          let boardData = await createBoard(game.name);
          const boardId = boardData.board.id;
          await postMessageToBoard(boardId, newMessage);
          await fetchMessagesToState();
          setNewMessage("");
        } catch (createError) {
          console.error("Error creating board: ", createError);
        }
      } else {
        console.error("Error sending messages: ", error);
      }
    }
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
        </div>
        <div className="modal-messages">
          {/* <h3>Messages go here:</h3> */}
          <ul>
            {messages.map((message) => (
              <li key={message.id}>
                <strong>{message.username}:</strong> {message.content}
              </li>
            ))}
          </ul>
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
