import React, { Component } from "react";
//import DogCard from "./DogCard";
// import {
//   Grid,
//   Paper,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActionArea
// } from "@material-ui/core";
import {
  
  Paper,
  Typography,

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
    maxHeight: "250px",
    maxWidth: "200px"
  },
  media: {
    maxHeight: "200px",
    maxWidth: "200px"
  },
  selectedDog: {
    paddingTop: "20px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "43%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20%"
    }
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

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogId: null,
      voteData: null
    };
  }

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
    console.log(event);
    if (event.target.value !== "") {
      this.setState({ dogId: parseInt(event.target.value) }, () => {
        this.getVoteData();
      });
    } else {
      this.setState({ dogId: event.target.value });
      this.setState({ voteData: null });
    }
  };

  render() {
    const { classes } = this.props;
    const voteData = this.state.voteData;
    console.log(voteData);
    return (
      <div className={classes.root}>
        <Paper className={classes.header}>
          <Typography variant="h2">
            Votes are still being accepted through 4/22, please check back later
            this week to see the results.
          </Typography>
        </Paper>
        {/* <Paper className={classes.header}>
          <Typography variant="h4">
            Select a Dog to Compare:
            <select onChange={this.handleChange}>
              <option value="">Select a Dog</option>
              {possibleIds.map(id => {
                return <option value={id}>{id}</option>;
              })}
            </select>
          </Typography>
        </Paper>

        {this.state.dogId ? (
          <div className={classes.selectedDog}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Selected Dog"
                  className={classes.media}
                  src={"/images/dogs/" + this.state.dogId + ".png"}
                  title="Selected Dog"
                />
                <CardContent>You selected: {this.state.dogId}</CardContent>
              </CardActionArea>
            </Card>
          </div>
        ) : null}

        <Grid container spacing={24} className={classes.grid}>
          {voteData
            ? Object.keys(voteData).map(id => {
                return (
                  <Grid item s={6} md={3}>
                    <DogCard id={id} dog={voteData[id]} />
                  </Grid>
                );
              })
            : null}
        </Grid> */}
      </div>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Results);
