import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./Home";
import Demographics from "./Demographics";
import Vote from "./Vote";
import TeamPage from "./TeamPage";
import PrivacyPolicy from "./PrivacyPolicy";
import ThankYou from "./components/ThankYou";
import Results from "./Results";
import Rankings from "./Rankings";
import Philosophy from "./Philosophy";
import LessonsForDemocracy from "./LessonsForDemocracy";

import "./App.css";




const NoMatch = () => <h1>404 Page Not Found</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" render={props => (<div><Home /></div>)} />
            <Route exact path="/demographics" render={props => <Demographics />} />
            <Route exact path="/vote" render={props => <Vote />} />
            <Route exact path="/meet-the-team" render={props => <TeamPage />} />
            <Route exact path="/privacy-policy" render={props => <PrivacyPolicy />} />
            <Route exact path="/thank-you" render={props => <ThankYou />} />
            <Route exact path="/results" render={props => <Results />} />
            <Route exact path="/rankings" render={props => <Rankings />} />
            <Route exact path="/philosophy" render={props => <Philosophy />} />
            <Route exact path="/lessons-for-democracy" render={props => <LessonsForDemocracy />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;