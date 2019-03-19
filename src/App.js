import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import HomePageGrid from "./components/HomePageGrid";
import SignUp from "./SignUp";
import Submit from "./Submit";
import Vote from "./Vote";
import ThankYou from "./components/ThankYou";

import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path="/about" render={props => <About />} />
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
          <Route exact path="/sign-up" render={props => <SignUp />} />
          {/* <Route exact path="/vote" render={props => <Vote />} /> */}
          <Route exact path="/submit" render={props => <Submit />} />
          <Route exact path="/thank-you" render={props => <ThankYou />} />

          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
