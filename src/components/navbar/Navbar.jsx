import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = (props) => {
  const [burgerVisibility, setBurgerVisibility] = useState(false);

  const handleBurger = () =>{
    setBurgerVisibility(!burgerVisibility);
  }

  return (
    <div className="nav">
        <div className="logoName">
            <img alt="Gamer4Rum logo" src="./images/Skull_and_Crossbones_bi.png"/>
            <img alt="Gamer4Rum" src="./images/textlogo-bi.png"/>
        </div>
        <div className="userSettings nomobile">
            <img alt="LoggedInPFP" src={(props.user).pfp}/>
            <div className="userInfo">
                <h2>Logged in as <a className="username">{(props.user).username}</a></h2>
                <div className="userOptions">
                    <ul>
                        <li>View Profile</li>
                        <li>Settings</li>
                        <li>Log out</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="burgerMenu mobile"> {/* this is gonna have the burger */}
                <button className="burgerIcon" onClick={handleBurger}>{burgerVisibility ? (`▼`):(`☰`)}</button>
                <div className={burgerVisibility ? ("userOptionsB mobile visibleDiv"):("userOptionsB mobile hiddenDiv")}>
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

export default Navbar
