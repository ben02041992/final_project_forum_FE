import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import "./App.css";
import MainPage from "./components/mainPage/MainPage";

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
    </>
  );
}

export default App;
