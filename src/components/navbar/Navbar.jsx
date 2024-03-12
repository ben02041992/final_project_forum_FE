import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({user}) => {
  const username=user?.username;
  console.log("user in Navbar:", user);
  console.log("nav username: ", user.username);
  const [burgerVisibility, setBurgerVisibility] = useState(false);

  const handleBurger = () => {
    setBurgerVisibility(!burgerVisibility);
  };

  return (
    <div className="nav">
      <div className="logoName">
        <img
          className="picLogo"
          alt="Gamer4Rum logo"
          src="./images/Skull_and_Crossbones_bi.png"
        />
        <img
          className="textLogo"
          alt="Gamer4Rum"
          src="./images/textlogo-bi.png"
        />
      </div>
      <div className="userSettings nomobile">
        <img alt="LoggedInPFP" src={user.pfp} />
        <div className="userInfo">
          <h2>
            Logged in as <a className="username">{username}</a>
          </h2>
          <div className="userOptions">
            <ul>
              <li>View Profile</li>
              <li>Settings</li>
              <li>Log out</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="burgerMenu mobile">
        <button className="burgerIcon" onClick={handleBurger}>
          {burgerVisibility ? `▼` : `☰`}
        </button>
        <div
          className={
            burgerVisibility
              ? "userOptionsB mobile visibleDiv"
              : "userOptionsB mobile hiddenDiv"
          }
        >
          <ul>
            <li>View Profile</li>
            <li>Settings</li>
            <li>Log out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
