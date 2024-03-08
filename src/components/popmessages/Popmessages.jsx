import React, { useEffect, useState } from "react";
import "./Popmessages.css";
import Messagemodal from "../modal/Messagemodal";

const Recentmessages = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${apiKey}`
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, []);

  const openRecentMessages = (game) => {
    setSelectedGame(game);
  };

  const closeRecentMessages = () => {
    setSelectedGame(null);
  };

  return (
    <div>
      <h1>Popular Boards</h1>
      <ul>
        {games.map((game) => (
          <div
            className="recent-box"
            key={game.id}
            onClick={() => openRecentMessages(game)}
          >
            <div className="gradient-overlay-recent"></div>
            <img
              className="recent-image"
              src={game.background_image}
              alt={game.name}
            />
            <p className="game-text">
              {" "}
              {game.name} <small className="no-messages">X messages</small>
            </p>
          </div>
        ))}
      </ul>

      {selectedGame && (
        <Messagemodal game={selectedGame} onClose={closeRecentMessages} />
      )}
    </div>
  );
};

export default Recentmessages;
