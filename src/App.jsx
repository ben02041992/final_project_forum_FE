import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import "./App.css";
import MainPage from "./components/mainPage/MainPage";


function App() {
  const [loginSubmitToggle, setloginSubmitToggle] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({})

  const toggleComponent = () => {
    setloginSubmitToggle(!loginSubmitToggle);
  };

  const updateLoggedInUser = (user) => {
    setLoggedInUser(user);
  }

  return (
    <>
      {loginSubmitToggle ? (
        <Login onToggle={toggleComponent} setUser={updateLoggedInUser}/>
      ) : (
        <Signup onToggle={toggleComponent} />
      )}
      <MainPage loggedInUser={loggedInUser}/>
    </>
  );
}

export default App;
