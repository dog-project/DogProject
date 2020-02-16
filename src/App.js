import React, { Component } from "react";
import Navbar from "./components/home/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DogProjectHome from "./components/dogproject/Home";
import PrimariesHome from "./components/primaries/Home";
import Home from "./components/home/Home"
//import Demographics from "./Demographics";
//import Vote from "./Vote";
import TeamPage from "./components/dogproject/TeamPage";
import PrivacyPolicy from "./components/dogproject/PrivacyPolicy";
import ThankYou from "./components/dogproject/ThankYou";
import Results from "./components/dogproject/Results";
import Rankings from "./components/dogproject/Rankings";
import Philosophy from "./components/dogproject/Philosophy";
//import LessonsForDemocracy from "./LessonsForDemocracy";
import Analysis from "./components/dogproject/Analysis";
import Submit from "./components/dogproject/Submit";
import Voting from "./components/primaries/Voting"


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
            <Route exact path="/dogproject" render={props => (<div><DogProjectHome /></div>)} />
            {/* <Route exact path="/demographics" render={props => <Demographics />} />
            <Route exact path="/vote" render={props => <Vote />} /> */}
            <Route exact path="/dogproject/meet-the-team" render={props => <TeamPage />} />
            <Route exact path="/dogproject/privacy-policy" render={props => <PrivacyPolicy />} />
            <Route exact path="/dogproject/thank-you" render={props => <ThankYou />} />
            <Route exact path="/dogproject/results" render={props => <Results />} />
            <Route exact path="/dogproject/rankings" render={props => <Rankings />} />
            <Route exact path="/dogproject/philosophy" render={props => <Philosophy />} />
            <Route exact path="/dogproject/submission-guidelines" render={props => <Submit />} />
            <Route exact path="/dogproject/results-and-analysis" render={props => <Analysis />} />
            <Route exact path="/primaries" render={props => (<div><PrimariesHome /></div>)} />
            <Route exact path="/primaries/vote" render={props => (<div><Voting /></div>)} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;