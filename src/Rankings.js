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
    marginBottom: "10px"
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

const rankedPairOrder = [
  57,
  20,
  65,
  40,
  37,
  35,
  70,
  43,
  45,
  28,
  34,
  52,
  54,
  27,
  24,
  25,
  51,
  44,
  48,
  74,
  56,
  38,
  72,
  26,
  68,
  69
];

const eloRankingOrder = [
  [20, 1392.65],
  [57, 1343.56],
  [40, 1312.11],
  [65, 1282.92],
  [35, 1280.68],
  [37, 1272.4],
  [70, 1256.35],
  [28, 1251.82],
  [43, 1250.59],
  [45, 1243.6],
  [52, 1204.85],
  [24, 1198.14],
  [34, 1197.21],
  [51, 1191.98],
  [44, 1179.87],
  [54, 1179.45],
  [27, 1170.96],
  [25, 1163.58],
  [56, 1139.58],
  [48, 1134.25],
  [38, 1115.66],
  [74, 1106.68],
  [68, 1091.54],
  [26, 1083.8],
  [69, 1078.12],
  [72, 1077.65]
];

const winRatioOrder = [
  [57, 0.73],
  [20, 0.73],
  [65, 0.68],
  [40, 0.68],
  [70, 0.62],
  [37, 0.61],
  [35, 0.6],
  [43, 0.59],
  [45, 0.56],
  [34, 0.54],
  [52, 0.53],
  [28, 0.52],
  [25, 0.5],
  [54, 0.49],
  [27, 0.47],
  [24, 0.46],
  [51, 0.45],
  [44, 0.42],
  [48, 0.41],
  [38, 0.36],
  [56, 0.36],
  [74, 0.36],
  [72, 0.35],
  [26, 0.34],
  [68, 0.27],
  [69, 0.25]
];

const copelandsRanking = [
  [57, 25],
  [20, 23],
  [65, 21],
  [40, 19],
  [37, 16],
  [35, 15],
  [70, 13],
  [43, 12],
  [45, 9],
  [28, 6],
  [34, 5],
  [52, 2],
  [25, -1],
  [27, -1],
  [54, -1],
  [24, -3],
  [51, -7],
  [44, -9],
  [48, -11],
  [74, -13],
  [56, -15],
  [38, -17],
  [72, -19],
  [26, -21],
  [68, -23],
  [69, -25]
];

const miniMaxRanking = [
  57,
  20,
  65,
  40,
  37,
  70,
  45,
  43,
  52,
  35,
  28,
  54,
  34,
  44,
  24,
  25,
  51,
  27,
  26,
  48,
  56,
  38,
  74,
  68,
  72,
  69
];

class Rankings extends Component {
  state = {
    rankedPairs: false,
    eloRanking: false,
    winRatio: false,
    copelandsRanking: false,
    miniMaxRanking: false,
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
        this.setState({ copelandsRanking: false });
        this.setState({ miniMaxRanking: false });
      } else if (this.state.method === "elo") {
        this.setState({ eloRanking: true });
        this.setState({ rankedPairs: false });
        this.setState({ winRatio: false });
        this.setState({ copelandsRanking: false });
        this.setState({ miniMaxRanking: false });
      } else if (this.state.method === "wr") {
        this.setState({ winRatio: true });
        this.setState({ eloRanking: false });
        this.setState({ rankedPairs: false });
        this.setState({ copelandsRanking: false });
        this.setState({ miniMaxRanking: false });
      } else if (this.state.method === "cop") {
        this.setState({ winRatio: false });
        this.setState({ eloRanking: false });
        this.setState({ rankedPairs: false });
        this.setState({ copelandsRanking: true });
        this.setState({ miniMaxRanking: false });
      } else if (this.state.method === "mini") {
        this.setState({ winRatio: false });
        this.setState({ eloRanking: false });
        this.setState({ rankedPairs: false });
        this.setState({ copelandsRanking: false });
        this.setState({ miniMaxRanking: true });
      } else {
        this.setState({ eloRanking: false });
        this.setState({ rankedPairs: false });
        this.setState({ winRatio: false });
        this.setState({ copelandsRanking: false });
        this.setState({ miniMaxRanking: false });
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
          <Typography variant="p" style={{ marginTop: "15px" }}>
            We were able to analyze our voting data using a variety of different
            ranking methods. Choose one from the drop down menu below to see the
            rankings according to that method and a description of the ranking
            method.
          </Typography>
        </Paper>
        <Paper className={classes.header}>
          <Typography variant="h4">
            Select a Ranking Method:
            <select onChange={this.handleChange}>
              <option value="">Select an option</option>
              <option value="rp">Ranked Pairs</option>
              <option value="elo">Elo Ranking</option>
              <option value="cop">Copeland's Ranking</option>
              <option value="mini">MiniMax Ranking</option>
              <option value="wr">Win Ratio</option>
            </select>
          </Typography>
        </Paper>
        {this.state.rankedPairs ? (
          <div>
            <h1 className={classes.header}>Ranked Pairs</h1>
            <p>
              The{" "}
              <a
                href="https://en.wikipedia.org/wiki/Ranked_pairs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ranked Pair
              </a>{" "}
              method finds a winner who is preferred over all the other dogs if
              that dog exists. If that dog does not exist, then all the
              intransitive relationships are removed in order of the strength of
              the relationship. It’s computed as follows:
              <ol>
                <li>
                  Sort each pair of dogs by the win ratio (win - loss) / total.
                </li>
                <li>
                  Go through all the dog pairs. If a given relationship is
                  transitive to relationships already considered, consider the
                  relationship preference. If it is not transitive (so that
                  adding that preference creates a cycle A > B > C > A), ignore
                  the preferences expressed for the pair.
                </li>
                <li>
                  Find the dog that did not lose in any relationships
                  considered, and add that dog to the next available spot in the
                  ranking. No longer have to consider relationships with that
                  dog.
                </li>
                <li>
                  Find the dog that did not lose in any relationships
                  considered, and add that dog to the next available spot in the
                  ranking. Remove that dog from ϱ.
                </li>
                <li>
                  Repeat steps 2-3 until there are no more dogs left to
                  consider.
                </li>
              </ol>{" "}
            </p>
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
                      <CardActionArea style={{ textAlign: "center" }}>
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
            <h1 className={classes.header}>Elo Ranking</h1>
            <p>
              The{" "}
              <a
                href="https://en.wikipedia.org/wiki/Elo_rating_system)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elo
              </a>{" "}
              rating system is most well known for its usage in chess rankings.
              The difference in the Elo scores assigned to a higher ranked
              player (Alice) and a lower ranked player (Bob) corresponds to the
              likelihood that the Alice wins in a match between her and Bob. If
              Alice has a score 400 points higher than Bob, then Alice has a 10
              to 1 chance of winning a match (if Alice were to have a score 800
              points higher, she would have a 100 to 1 chance of winning). If
              Alice wins the match, her score will increase a little and Bob’s
              will decrease a little since the result is expected. Conversely,
              if Bob wins the match, his score will increase a lot and Alice’s
              will decrease a lot.
              <br />
              <br />
              Applied to our dogs, the ‘chess match’ is one comparison between
              two dogs. The difference in ranks between two dogs in a comparison
              corresponds to the likelihood higher ranked dog is chosen for as
              cuter in a given vote. The more votes we get, the more accurate
              the dogs Elo scores become.
            </p>
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
                      <CardActionArea style={{ textAlign: "center" }}>
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
        {this.state.copelandsRanking ? (
          <div>
            <h1 className={classes.header}>Copeland's Ranking</h1>
            <p>
              The{" "}
              <a
                href="https://en.wikipedia.org/wiki/Copeland%27s_method"
                target="_blank"
                rel="noopener noreferrer"
              >
                Copeland's Ranking
              </a>{" "}
              method...
            </p>
            <Grid container spacing={24} className={classes.grid}>
              {copelandsRanking.map(pair => {
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
                      <CardActionArea style={{ textAlign: "center" }}>
                        <Typography variant="h4">{place}</Typography>
                        <Typography
                          variant="p"
                          style={{ marginBottom: "10px" }}
                        >
                          Score: {pair[1]}
                        </Typography>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        ) : null}
        {this.state.miniMaxRanking ? (
          <div>
            <h1 className={classes.header}>MiniMax Ranking</h1>
            <p>
              The{" "}
              <a
                href="https://en.wikipedia.org/wiki/Minimax"
                target="_blank"
                rel="noopener noreferrer"
              >
                MiniMax Ranking
              </a>{" "}
              system ...
            </p>
            <Grid container spacing={24} className={classes.grid}>
              {miniMaxRanking.map(pair => {
                place += 1;
                return (
                  <Grid item s={6} md={3}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Team Member"
                          className={classes.media}
                          src={"/images/dogs/" + pair + ".png"}
                          title="Team Member"
                        />
                      </CardActionArea>
                      <CardActionArea style={{ textAlign: "center" }}>
                        <Typography variant="h4">{place}</Typography>
                        {/* <Typography
                          variant="p"
                          style={{ marginBottom: "10px" }}
                        >
                          Win/Tie Percentage: {(pair[1] * 100).toFixed(1)}%
                        </Typography> */}
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
            <h1 className={classes.header}>Win Ratio</h1>
            <p className={classes.header}>
              This is is a simple calculation of (wins - losses)/total votes.
              It's important to note that in cases where a dog received a vote
              of indifference, then their vote total increases but the ratio of
              (wins-losses)/total votes decreases.
            </p>
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
                      <CardActionArea style={{ textAlign: "center" }}>
                        <Typography variant="h4">{place}</Typography>
                        <Typography
                          variant="p"
                          style={{ marginBottom: "10px" }}
                        >
                          Win Ratio: {pair[1]}
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
