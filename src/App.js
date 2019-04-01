import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Submit from "./Submit";
import PrivacyPolicy from "./PrivacyPolicy";
import ThankYou from "./components/ThankYou";

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
                  <ThankYou />
                  {/* <HomePageGrid /> */}
                </div>
              )}
            />
            {/* <Route exact path="/sign-up" render={props => <SignUp />} /> */}
            {/* <Route exact path="/vote" render={props => <Vote />} /> */}
            {/* <Route exact path="/submit" render={props => <Submit />} />
            <Route exact path="/thank-you" render={props => <ThankYou />} />
            <Route exact path="/privacy-policy" render={props => <PrivacyPolicy />} /> */}
            <Route component={NoMatch} />
          </Switch>

          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
