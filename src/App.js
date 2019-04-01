import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

import Demographics from "./Demographics";
import Vote from "./Vote";

import SignUp from "./SignUp";
import TeamPage from "./TeamPage";

import "./App.css";


const NoMatch = () => <h1>404 Page Not Found</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* <Route exact path="/about" render={props => <About />} /> */}
            <Route
              exact
              path="/"
              render={props => (
                <div>
                  <Home />
                  {/* <HomePageGrid /> */}
                </div>
              )}
            />
            <Route exact path="/sign-up" render={props => <SignUp />} /> */}
            <Route exact path="/demographics" render={props => <Demographics />} />
            <Route exact path="/vote" render={props => <Vote />} />
            {/* <Route exact path="/submit" render={props => <Submit />} /> */}
            {/* <Route exact path="/thank-you" render={props => <ThankYou />} /> */}
            <Route exact path="/meet-the-team" render={props => <TeamPage />} />
            <Route component={NoMatch} />
          </Switch>

          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;