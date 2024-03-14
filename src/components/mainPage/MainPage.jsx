import React from "react";
import "./MainPage.css";
import Gamepage from "./../gamepage/Gamepage";
import Popmessages from "./../popmessages/Popmessages";
import Navbar from "./../navbar/Navbar";

const MainPage = ({ username, onSignOut }) => {
  const pfp = "./images/Skull_and_Crossbones_bi.png";
  return (
    <div className="main-page">
      <Navbar username={username} pfp={pfp} onSignOut={onSignOut} />
      <div className="main-page-content">
        <div className="recent-div">
          <Popmessages username={username} />
        </div>
        <div className="gamepage-div">
          <Gamepage username={username} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
