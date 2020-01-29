import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Nav from "./components/Nav";
import Friends from "./components/Friends";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
