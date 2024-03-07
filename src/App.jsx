import { useState } from "react";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import "./App.css";
// import Gamepage from "./components/gamepage/Gamepage";

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
        <SignUp onToggle={toggleComponent} />
      )}
      {/* <Gamepage /> */}
    </>
  );
}

export default App;
