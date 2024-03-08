import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import "./App.css";
import Gamepage from "./components/gamepage/Gamepage";
import Navbar from "./components/navbar/Navbar";

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
      <Navbar user={{ /* this will be on the main page i just put it here for testing */
        username:"Username",
        pfp:"./src/assets/tempPFP.png"
      }}/>
      <Gamepage />
    </>
  );
}

export default App;
