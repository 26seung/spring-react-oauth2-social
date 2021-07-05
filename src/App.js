import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Join from "./components/Join";
import BoardAdmin from "./components/BoardAdmin";
import BoardUser from "./components/BoardUser";
import Home from './components/Home';
import Login from './components/Login';
import Profile from "./components/Profile";
import OAuth2RedirectHandler from "./oauth2/OAuth2RedirectHandler";
import Header from "./components/Header";

const App = () => {



  return (
    <div>
      <Header />
      <div className="container mt-3">       
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/user" component={BoardUser} />
          <Route exact path="/admin" component={BoardAdmin} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
