import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/friends">Friends</Link>
        </div>
    )
}

export default Nav;