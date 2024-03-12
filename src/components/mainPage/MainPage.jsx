import React from "react";
import "./MainPage.css";
import Gamepage from "./../gamepage/Gamepage";
import Popmessages from "./../popmessages/Popmessages";
import Navbar from "./../navbar/Navbar";

const MainPage = ({loggedInUser}) => {
  console.log("user in MainPage:", loggedInUser);
  const username = "exampleUsername";
  return (
    <div className="main-page">
      <Navbar user={loggedInUser} />
      <div className="main-page-content">
        <div className="recent-div">
          <Popmessages />
        </div>
        <div className="gamepage-div">
          <Gamepage />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
