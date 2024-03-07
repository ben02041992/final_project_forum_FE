import React, { useState } from "react";
import "./Login.css";
import Gamepage from "../../components/gamepage/Gamepage";
import { login } from "../../utils/fetch";

const Login = ({ onToggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello from login handlesubmit");
    try {
      const userData = await login(username, password);
      console.log(userData);
      setLoginStatus("success");
      setShowLoginForm(false);
    } catch (error) {
      console.error("Login failed:", error);
      setLoginStatus("error");
    }
  };

  return (
    <div className="selector">
      {showLoginForm ? (
        <div className="wrapperLogin">
          <img className="logo" src=".\src\assets\image.png" alt="" srcset="" />
          <div className="loginBox">
            <h1 className="signupPrompt">Gamer4rum</h1>
            <h2 className="signupPrompt">Login</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
              <input
                className="loginInput"
                placeholder="Username"
                value={username}
                onChange={(e) => changeHandler(e, setUsername)}
              />
              <input
                className="loginInput"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => changeHandler(e, setPassword)}
              />
              <button className="sub-but" type="submit">
                Login
              </button>
              {loginStatus === "success" && (
                <p className="signupPrompt">Login successful.</p>
              )}
              {loginStatus === "error" && (
                <p className="signupPrompt">Login failed. Please try again.</p>
              )}
            </form>

            <div className="signupPrompt">
              <p className="signupPrompt">
                Don't have an account?{" "}
                <button className="signup-but" onClick={onToggle}>
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Gamepage />
      )}
    </div>
  );
};

export default Login;
