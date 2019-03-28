import React, { Component } from 'react';
import BioCard from "./components/BioCard";

export class TeamPage extends Component {
  render() {
    return (
      <div>
          <BioCard person={{ name: <p>Sam Merkovitz</p>, bio : <p>This is my Bio</p>, image : ""}} />
        
      </div>
    )
  }
}

export default TeamPage
