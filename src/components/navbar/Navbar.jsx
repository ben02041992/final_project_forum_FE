import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ username, pfp, onSignOut }) => {
  const [burgerVisibility, setBurgerVisibility] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsScreenSmall(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {!isScreenSmall && (
          <p>
            <small className="font">
              A project by Benjamin Townsend, Quinn Greenwood, Ryan Corrigan and
              Syeda Ume Farwa Naqvi
            </small>{" "}
          </p>
        )}
      </div>
      <div className="userSettings nomobile">
        <img alt="LoggedInPFP" src={pfp} />
        <div className="userInfo">
          <h2>
            Logged in as <a className="username">{username}</a>
          </h2>
          <div className="userOptions">
            <ul>
              {/* <li>View Profile</li>
              <li>Settings</li> */}
              <button className="log-but" onClick={onSignOut}>
                Log out
              </button>
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
            <button className="log-but-bur" onClick={onSignOut}>
              <p className="but-txt">Log out</p>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
