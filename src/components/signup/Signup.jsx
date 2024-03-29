import { useState, useEffect } from "react";

import { signup } from "../../utils/fetch";

import "./Signup.css";

const SignUp = ({ onToggle }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupStatus, setSignupStatus] = useState(null);

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("works");
      await signup(username, email, password);
      setSignupStatus("success");
      console.log("Hello from signup handlesubmit");
    } catch (error) {
      console.error("Signup failed:", error.message);
      setSignupStatus("error");
    }
  };

  useEffect(() => {
    const logoElement = document.querySelector(".logo");

    if (logoElement) {
      logoElement.classList.add("appear");
    }
  }, []);

  return (
    <div className="selector">
      <div className="wrapperLogin">
        <img
          className="logo"
          src=".\images\Skull_and_Crossbones_bi.png"
          alt=""
          srcset=""
        />
        <div className="loginBox">
          {/* <img
            className="logo-name"
            src=".\images\textlogo-bi.png"
            alt=""
            srcSet=""
          /> */}
          <h3 className="loginTitle">Signup</h3>
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              className="loginInput"
              placeholder="Username"
              value={username}
              onChange={(e) => changeHandler(e, setUsername)}
            />
            <input
              className="loginInput"
              placeholder="Email"
              value={email}
              onChange={(e) => changeHandler(e, setEmail)}
            />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => changeHandler(e, setPassword)}
            />
            <button className="sub-but" type="submit">
              Sign Up
            </button>
            {signupStatus === "success" && (
              <p className="signup-success">
                Signup successful! You can now log in.
              </p>
            )}
            {signupStatus === "error" && (
              <p className="signup-fail">Signup failed. Please try again.</p>
            )}
          </form>
          <div className="signupPrompt">
            <p className="signupPrompt">
              Already have an account?{" "}
              <button className="signup-but" onClick={onToggle}>
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
