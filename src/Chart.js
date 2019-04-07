import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data= {
    labels: ["Wins", "Losses", "Ties"],
    datasets: [{
    label: "My First dataset",
    backgroundColor:['rgb(255, 99, 132)', 'rgb(230, 220, 177)', 'rgb(55, 39, 180)'],
    borderColor: 'rgb(0,0,0)',
    data: [12, 3, 10],
    }]
}

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state= {
      labels: ["Wins", "Losses", "Ties"],
      datasets: [{
      label: "My First dataset",
      backgroundColor:['rgb(255, 99, 132)', 'rgb(230, 220, 177)', 'rgb(55, 39, 180)'],
      borderColor: 'rgb(0,0,0)',
      data: props.results,
      }]
    }
  }
  render() {
    return (
      <div>
          <Doughnut
          data={data}
          width={250}
          height={300}
          options={{ maintainAspectRatio: false }}/>
      </div>
    )
  }
}

export default Chart;