import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import "./App.css";
import Gamepage from "./components/gamepage/Gamepage";
import Popmessages from "./components/popmessages/Popmessages";

function App() {
  const [loginSubmitToggle, setloginSubmitToggle] = useState(true);

  const toggleComponent = () => {
    setloginSubmitToggle(!loginSubmitToggle);
  };

  return (
    <>
      {loginSubmitToggle ? (
        <Login onToggle={toggleComponent} />
      ) : (
        <Signup onToggle={toggleComponent} />
      )}
      <div className="main-page">
        <div className="recent-div">
          <Popmessages />
        </div>
        <div className="gamepage-div">
          <Gamepage />
        </div>
      </div>
    </>
  );
}

export default App;
