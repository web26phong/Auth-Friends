import React from "react";
import {Route, Redirect} from "react-router-dom";

const Logout = () => {
    return (
        <Route
        render={()=>{
        if (localStorage.getItem("token")){
            localStorage.removeItem("token")
        }
        return <Redirect to="/login" />
         }}
        />
    )
}
export default Logout;