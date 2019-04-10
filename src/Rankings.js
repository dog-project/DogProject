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

const eloRankingOrder =
[[20, 1415],
 [57, 1362],
 [70, 1344],
 [35, 1336],
 [65, 1299],
 [43, 1286],
 [40, 1276],
 [45, 1271],
 [37, 1229],
 [34, 1221],
 [25, 1210],
 [52, 1205],
 [51, 1192],
 [54, 1191],
 [24, 1185],
 [28, 1160],
 [44, 1154],
 [27, 1138],
 [38, 1128],
 [56, 1124],
 [26, 1104],
 [48, 1098],
 [72, 1093],
 [74, 1066],
 [68, 1058],
 [69, 1056]]

const winRatioOrder = [
  [57, 0.69],
  [20, 0.68],
  [65, 0.63],
  [40, 0.62],
  [70, 0.59],
  [35, 0.55],
  [37, 0.54],
  [43, 0.54],
  [45, 0.52],
  [34, 0.48],
  [25, 0.47],
  [52, 0.47],
  [28, 0.44],
  [54, 0.43],
  [24, 0.41],
  [51, 0.41],
  [27, 0.4],
  [44, 0.38],
  [48, 0.34],
  [56, 0.34],
  [74, 0.32],
  [26, 0.3],
  [38, 0.3],
  [72, 0.3],
  [68, 0.23],
  [69, 0.22]
];

class Rankings extends Component {
  state = {
    rankedPairs: false,
    eloRanking: false,
    winRatio: false,
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
        this.setState({ winRatio: false });
      } else if (this.state.method === "elo") {
        this.setState({ eloRanking: true });
        this.setState({ rankedPairs: false });
        this.setState({ winRatio: false });
      } else if (this.state.method === "wr") {
        this.setState({ winRatio: true });
        this.setState({ eloRanking: false });
        this.setState({ rankedPairs: false });
      } else {
        this.setState({ eloRanking: false });
        this.setState({ rankedPairs: false });
        this.setState({ winRatio: false });
      }
    });
  };

  render() {
    const { classes } = this.props;
    var place = 0;

    return (
      <div className={classes.root}>
        <Paper className={classes.header}>
          <Typography variant="h2">Rankings</Typography>
        </Paper>
        <Paper className={classes.header}>
          <Typography variant="h4">
            Select a Ranking Method:
            <select onChange={this.handleChange}>
              <option value="">Select an option</option>
              <option value="rp">Ranked Pairs</option>
              <option value="elo">Elo Ranking</option>
              <option value="wr">Win Ratio</option>
            </select>
          </Typography>
        </Paper>
        {this.state.rankedPairs ? (
          <div>
            <h1>Ranked Pairs</h1>
            <p>The Ranked Pairs Voting system tallies the votes between each pair of dogs and then sorts each pair by the "strength of victory" from first to last. Strength of victory is determined by the number of winning votes for the dog for each pair. </p>
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
            <p>For the Elo Ranking method, after every pairwise vote, the winning dog steals points from the losing dog. Each dog's rating is determined by the amounts of wins/losses they accrue. If a high rated player beats a low rated player, fewer points are transferred to the winning dog as that is the expected outcome, but if a low rated player beats a high rated player, then more points are transferred to the lower rated winning dog. </p>
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
                        <Typography
                          variant="p"
                          style={{ marginBottom: "10px" }}
                        >
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
        {this.state.winRatio ? (
          <div>
            <h1>Win Ratio</h1>
            <p>This is calculated simply by by calculating how many wins each dog got per voting matchup.</p>
            <Grid container spacing={24} className={classes.grid}>
              {winRatioOrder.map(pair => {
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
                        <Typography 
                          variant="p"
                          style={{ marginBottom: "10px" }}
                        >
                          Win ratio: {pair[1]}
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
