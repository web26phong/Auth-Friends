import React, {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUserChanges = e => {
        setUsername([e.target.value]);
    }

    const handlePwChanges = e => {
        setPassword([e.target.value]);
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <div className="login">
            <input type="text" onChange={handleUserChanges} value={username} placeholder="username"/>
            <input type="password" onChange={handlePwChanges} value={password} placeholder="password" />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login;