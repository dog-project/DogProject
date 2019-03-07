import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import HomePageGrid from "./components/HomePageGrid";

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
                <HomePageGrid />
              </div>
            )}
          />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
