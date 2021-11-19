import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage";
import NewBreed from "../Pages/NewBreed/NewBreed";
import About from "../Pages/About/About";
import Detail from "../Pages/Detail/Detail";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={Home} />
          <Route path="/dogs/:id" exact component={Detail} />
          <Route path="/newbreed" exact component={NewBreed} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
