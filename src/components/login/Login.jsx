import React from 'react'
import { useState } from "react";
import { login } from '../../utils/fetch';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="username" onChange={(e) => changeHandler(e, setUsername, username)}/>
        <input placeholder="password" onChange={(e) => changeHandler(e, setPassword, password)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
