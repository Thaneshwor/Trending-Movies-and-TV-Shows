import React, { Component, Fragment } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { history } from "../../store/history";
import Navbar from "../navbar/Navbar";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import Home from "../home/Home";
import AuthRoute from "../../routes/AuthRoute";
import Favourite from "../favourites/Favourite";

class Main extends Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Signin} />
          <Route exact path="/sign-up" component={Signup} />
          <AuthRoute path="/home" component={Home} />
          <AuthRoute path="/favourites" component={Favourite} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
