import React from 'react';
import "./MainPage.css";
import Gamepage from "./../gamepage/Gamepage";
import Popmessages from "./../popmessages/Popmessages";
import Navbar from "./../navbar/Navbar";

const MainPage = (props) => {
  return (
    <div className='main-page'>
        <Navbar user={{ /* this will be on the main page i just put it here for testing */
        username:(props.user).username,
        pfp:(props.user).pfp
        }}/>
        <div className='main-page-content'>
            <div className="recent-div">
            <Popmessages />
            </div>
            <div className="gamepage-div">
            <Gamepage />
            </div>
        </div>
    </div>
  )
}

export default MainPage
