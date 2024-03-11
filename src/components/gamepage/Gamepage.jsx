import React, { useEffect, useState } from "react";
import "./Gamepage.css";
import Messagemodal from "../modal/Messagemodal";

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [hoveredGame, setHoveredGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
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

  const fetchScreenshots = async (gameId) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.rawg.io/api/games/${gameId}/screenshots?key=${apiKey}`
      );
      const data = await response.json();
      setScreenshots(data.results);
    } catch (error) {
      console.error("Error fetching screenshots:", error);
    }
  };

  const handleMouseEnter = (gameId) => {
    setHoveredGame(gameId);
    fetchScreenshots(gameId);
    setCurrentScreenshot(0);
    startSlideshow();
  };

  const handleMouseLeave = () => {
    setHoveredGame(null);
    stopSlideshow();
  };

  const startSlideshow = () => {
    const intervalId = setInterval(() => {
      setCurrentScreenshot((prevIndex) => {
        if (screenshots.length > 0) {
          return (prevIndex + 1) % screenshots.length;
        } else {
          return prevIndex;
        }
      });
    }, 1000);

    // Save the intervalId in state to later clear the interval
    setSlideshowIntervalId(intervalId);
  };

  const stopSlideshow = () => {
    // Clear the interval when the mouse leaves the gradient overlay
    clearInterval(slideshowIntervalId);
  };

  const openModal = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  const [slideshowIntervalId, setSlideshowIntervalId] = useState(null);

  return (
    <div>
      <h1 className="title">Games List</h1>
      <ul>
        {games.map((game) => (
          <div
            className="game-box"
            key={game.id}
            onMouseEnter={() => handleMouseEnter(game.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => openModal(game)}
          >
            <div className="gradient-overlay"></div>
            <img
              className="game-image"
              src={
                hoveredGame === game.id && screenshots.length > 0
                  ? screenshots[currentScreenshot]?.image
                  : game.background_image
              }
              alt={game.name}
            />
            <p className="game-text"> {game.name}</p>
          </div>
        ))}
      </ul>

      {selectedGame && (
        <Messagemodal game={selectedGame} onClose={closeModal} />
      )}
    </div>
  );
};

export default GamesList;
