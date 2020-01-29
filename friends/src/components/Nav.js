import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/login"><span>Login</span></Link>
            <Link to="/friends"><span>Friends</span></Link>
            
        </div>
    )
}

export default Nav;