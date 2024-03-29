import { useState, useEffect } from "react";
import "./Login.css";
import Gamepage from "../../components/gamepage/Gamepage";
import { login } from "../../utils/fetch";
import Popmessages from "../../components/popmessages/Popmessages";
import MainPage from "../mainPage/MainPage";

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
    console.log(username, password);
    console.log("Hello from login handlesubmit");
    try {
      const userData = await login(username, password);
      console.log(
        "login userData:",
        userData
      );
      if(userData.success){
      setLoginStatus("success");
      setShowLoginForm(false);
      }
      else{
        throw "Account does not exist";
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoginStatus("error");
    }
  };

  useEffect(() => {
    const logoElement = document.querySelector(".logo");
    if (logoElement) {
      logoElement.classList.add("appear");
    }
  }, [showLoginForm]); // added showLoginForm so the logo is visible after logging out and returning to sign in page

  const handleSignOut = () => {
    setLoginStatus("false");
    setShowLoginForm(true);
    console.log("Signing out...");
    onSignOut(); // Notify parent component about sign-out
  };

  return (
    <div className="selector">
      {showLoginForm ? (
        <div className="wrapperLogin">
          <img
            className="logo"
            src=".\images\Skull_and_Crossbones_bi.png"
            alt="skull and bones logo"
            srcset=""
          />
          <div className="loginBox">
            <h2 className="loginTitle">Login</h2>
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
        <MainPage username={username} onSignOut={handleSignOut} />
      )}
    </div>
  );
};

export default Login;
