import React from 'react';
import { useState } from "react";
import { signup } from "../../utils/fetch";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeHandler = (e, setter, state) => {
        setter(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await signup(username, email, password);
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" onChange={(e) => changeHandler(e, setUsername, username)}/>
                <input placeholder="email" onChange={(e) => changeHandler(e, setEmail, email)}/>
                <input placeholder="password" onChange={(e) => changeHandler(e, setPassword, password)}/>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup
