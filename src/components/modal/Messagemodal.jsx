import React, { useState, useEffect } from "react";
import "./Messagemodal.css";
import {
  fetchMessagesForBoard,
  fetchBoard,
  postMessageToBoard,
  createBoard,
} from "../../utils/fetch";

const Messagemodal = ({ game, onClose }) => {
  const [messages, setMessages] = useState([
    // {
    //   id: 2,
    //   username: "Greg",
    //   content: "so this is gamer4rum? i love the look",
    //   createdAt: "2024-03-12T18:55:17.000Z",
    //   updatedAt: "2024-03-12T19:44:43.000Z",
    //   boardId: 1,
    // },
    // {
    //   id: 3,
    //   username: "Greg",
    //   content: "yo whattup",
    //   createdAt: "2024-03-12T19:46:40.000Z",
    //   updatedAt: "2024-03-12T19:46:40.000Z",
    //   boardId: 1,
    // },
    // {
    //   id: 4,
    //   username: "Greg",
    //   content: "its me greg",
    //   createdAt: "2024-03-12T19:46:46.000Z",
    //   updatedAt: "2024-03-12T19:46:46.000Z",
    //   boardId: 1,
    // },
    // {
    //   id: 5,
    //   username: "Greg",
    //   content: "hows it going",
    //   createdAt: "2024-03-12T19:46:52.000Z",
    //   updatedAt: "2024-03-12T19:46:52.000Z",
    //   boardId: 1,
    // },
  ]);

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchMessagesToState();
  }, [game]);

  const fetchMessagesToState = async () => {
    try {
      let boardData = await fetchBoard(game.name);
      if (!boardData) {
        boardData = await createBoard(game.name);
      }
      const boardId = boardData.id;

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
      if (newMessage.trim() !== "") {
        let boardData = await fetchBoard(game.name);
        if (!boardData) {
          boardData = await createBoard(game.name);
        }
        const boardId = boardData.id;

        await postMessageToBoard(boardId, newMessage);
        await fetchMessagesToState();
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
