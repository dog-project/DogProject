import React, { Component } from "react";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardMedia
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "10px",
    textAlign: "center"
  },
  header: {
    marginTop: "25px",
    marginBoton: "40px",
    padding: "25px",
    textAlign: "center"
  },
  grid: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "30px",
      paddingLeft: "30px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px"
    }
  },

  card: {
    maxWidth: 325
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
    height: 300
  }
});

// const possibleIds = [
//   20,
//   24,
//   25,
//   26,
//   27,
//   28,
//   34,
//   35,
//   37,
//   38,
//   40,
//   43,
//   44,
//   45,
//   48,
//   51,
//   52,
//   54,
//   56,
//   57,
//   65,
//   68,
//   69,
//   70,
//   72,
//   74
// ];

const rankedPairOrder = [
  "57",
  "20",
  "65",
  "40",
  "37",
  "70",
  "35",
  "43",
  "45",
  "28",
  "34",
  "25",
  "52",
  "54",
  "27",
  "24",
  "51",
  "44",
  "48",
  "56",
  "74",
  "38",
  "72",
  "26",
  "68",
  "69"
];

const eloRankingOrder = [
  [20, 9604.881600034192],
  [57, 9367.600436063756],
  [40, 7677.683554040141],
  [65, 7484.835501131847],
  [70, 6081.226164901027],
  [37, 4819.1382133343395],
  [35, 4594.979610264548],
  [43, 4243.842031767465],
  [45, 3495.954469393671],
  [34, 2945.379838010046],
  [28, 1865.5124614860101],
  [52, 1815.2774533347392],
  [25, 1656.3875048204663],
  [54, 1422.434074316493],
  [51, 74.38433605413864],
  [24, -257.1165151839793],
  [27, -277.19257523378053],
  [44, -1456.1051117165114],
  [48, -2125.896470098761],
  [74, -2904.2127797859794],
  [56, -3278.3761377161823],
  [38, -3371.91244629555],
  [26, -3672.9653394708957],
  [72, -4013.34252610956],
  [68, -6186.219789013056],
  [69, -6201.240093560765]
];

class Rankings extends Component {
  state = {
    rankedPairs: false,
    eloRanking: false,
    method: null
  };

  getVoteData() {
    const that = this;
    fetch("https://us-east1-dog-project-234515.cloudfunctions.net/get_votes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.dogId
      })
    }).then(function(response) {
      response.json().then(function(data) {
        that.setState({ voteData: data });
      });
    });
  }

  handleChange = event => {
    event.persist();
    console.log(event.target.value);
    this.setState({ method: event.target.value }, () => {
      if (this.state.method === "rp") {
        this.setState({ rankedPairs: true });
        this.setState({ eloRanking: false });
      } else if (this.state.method === "elo") {
        this.setState({ eloRanking: true });
        this.setState({ rankedPairs: false });
      } else {
        this.setState({ eloRanking: false });
        this.setState({ rankedPairs: false });
      }
    });
  };

  render() {
    const { classes } = this.props;
    var place = 0;

    return (
      <div className={classes.root}>
        <Paper className={classes.header}>
          <Typography variant="h2">Voting Results</Typography>
        </Paper>
        <Paper className={classes.header}>
          <Typography variant="h4">
            Select a Ranking Method:
            <select onChange={this.handleChange}>
              <option value="">Select an option</option>
              <option value="rp">Ranked Pairs</option>
              <option value="elo">Elo Ranking</option>
            </select>
          </Typography>
        </Paper>
        {this.state.rankedPairs ? (
          <div>
            <h1>Ranked Pairs</h1>
            <Grid container spacing={24} className={classes.grid}>
              {rankedPairOrder.map(id => {
                place += 1;
                return (
                  <Grid item s={6} md={3}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Team Member"
                          className={classes.media}
                          src={"/images/dogs/" + id + ".png"}
                          title="Team Member"
                        />
                      </CardActionArea>
                      <CardActionArea>
                        <Typography variant="h4">{place}</Typography>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        ) : null}
        {this.state.eloRanking ? (
          <div>
            <h1>Elo Ranking</h1>
            <Grid container spacing={24} className={classes.grid}>
              {eloRankingOrder.map(pair => {
                place += 1;
                return (
                  <Grid item s={6} md={3}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Team Member"
                          className={classes.media}
                          src={"/images/dogs/" + pair[0] + ".png"}
                          title="Team Member"
                        />
                      </CardActionArea>
                      <CardActionArea>
                        <Typography variant="h4">{place}</Typography>
                        <Typography variant="p" style={{marginBottom: "10px"}}>
                          Elo Score: {pair[1]}
                        </Typography>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        ) : null}
      </div>
    );
  }
}

Rankings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Rankings);
