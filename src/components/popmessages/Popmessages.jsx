import { React, useEffect, useState } from "react";
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

        const gamesWithMessages = data.results.map((game) => ({
          ...game,
          messages: Math.floor(Math.random() * 1000) + 1,
        }));

        const randomNumbers = gamesWithMessages.map((game) => game.messages);

        // Sort the games array based on the random numbers in descending order
        const sortedGames = gamesWithMessages.sort(
          (a, b) => b.messages - a.messages
        );

        setGames(sortedGames);
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
      <h1 className="pop">Popular Boards</h1>
      <ul>
        {games.map((game, index) => (
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
              {game.name}{" "}
              <small className="no-messages">{game.messages} messages</small>
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
