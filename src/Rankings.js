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

import DogCard from "./DogCard";
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

const possibleIds = [
  20,
  24,
  25,
  26,
  27,
  28,
  34,
  35,
  37,
  38,
  40,
  43,
  44,
  45,
  48,
  51,
  52,
  54,
  56,
  57,
  65,
  68,
  69,
  70,
  72,
  74
];

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
    const rp = this.state.rankedPairs;
    const elo = this.state.eloRanking;
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
                        <Typography variant="p">{place}</Typography>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        ) : null}
        {this.state.eloRanking ? <h1>Elo Ranking</h1> : null}
      </div>
    );
  }
}

Rankings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Rankings);
