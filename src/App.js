import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ThankYou from "./components/ThankYou";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

import Demographics from "./Demographics";
import Vote from "./Vote";
//import Results from "./Results";
import SignUp from "./SignUp";
import TeamPage from "./TeamPage";
import PrivacyPolicy from "./PrivacyPolicy";
//import Rankings from "./Rankings";
import Philosophy from "./Philosophy";
import CriticalTheory from "./CriticalTheory";
import SocialChoice from "./SocialChoice";
import Governance from "./Governance";

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
            <Route exact path="/sign-up" render={props => <SignUp />} />
            <Route exact path="/demographics" render={props => <Demographics />} />
            <Route exact path="/vote" render={props => <Vote />} />
            <Route exact path="/meet-the-team" render={props => <TeamPage />} />
            <Route exact path="/privacy-policy" render={props => <PrivacyPolicy />} />
            <Route exact path="/thank-you" render={props => <ThankYou />} />
            {/* <Route exact path="/results" render={props => <Results />} />
            <Route exact path="/rankings" render={props => <Rankings />} /> */}
            <Route exact path="/philosophy" render={props => <Philosophy />} />
            <Route exact path="/critical-theory" render={props => <CriticalTheory />} />
            <Route exact path="/social-choice" render={props=> <SocialChoice />} />
            <Route exact path="/governance" render={props=> <Governance />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;