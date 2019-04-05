import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Wins", "Losses", "Ties"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(230, 220, 177)",
        "rgb(55, 39, 180)"
      ],
      borderColor: "rgb(0,0,0)",
      data: [12, 3, 10]
    }
  ]
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Doughnut
          data={{
            labels: ["Wins", "Losses", "Ties"],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: [
                  "rgb(255, 68, 0)",
                  "rgb(0, 0, 0)",
                  "rgb(188, 183, 183)"
                ],
                // borderColor: "rgb(0,0,0)",
                data: this.props.results
              }
            ]
          }}
          width={250}
          height={300}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default Chart;
