import React, { Component } from "react";
import {
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography
} from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

import VoteInner from "./VoteInner";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "30px",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    marginBottom: "30px",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center"
  },
  media: {
    [theme.breakpoints.up("xs")]: {
      maxHeight: 600,
      maxWidth: 500
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: 300,
      maxWidth: 250
    }
  },
  card: {
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      maxHeight: 600,
      maxWidth: 500
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: 350,
      maxWidth: 300
    },
    display: "flex",
    marginLeft: "15%",
    marginRight: "15%"
  },
  gridContent1: {
    justifyContent: "center",
    padding: theme.spacing.unit * 2,
    display: "flex"
  },
  gridContent2: {
    justifyContent: "center",
    padding: theme.spacing.unit * 2,
    display: "flex"
  },
  grid: {
    alignItems: "center",
    display: "flex"
  },
  form: {
    justifyContent: "center",
    padding: theme.spacing.unit * 2,
    display: "flex"
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  label: {
    marginLeft: -30
  }
});

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog1id: 'dog1',
      dog2id: 'dog2',
      vote: null,
      userId: props.userId
    }
  }

  handleChange = event => {
    console.log(event)
    this.setState({ vote: event.target.value });
  };

  onSubmit = () => {
    if (this.state.vote) {
      this.sendVoteToAPI();
      
    } else {
      console.log(this.state);
    }
  };

  sendVoteToAPI() {
    /*fetch("https://us-east1-dog-project-234515.cloudfunctions.net/submit_vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dog1_id: this.state.dog1id,
        dog2_id: this.state.dog2id,
        winner: vote,
        user: this.state.userId
      })
    }).then(function(response) {
      console.log(response)
    });*/
    console.log(this.state)
    this.setState({dog1id: 'dog2', dog2id: 'dog1', vote: null});
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h3">Vote Page</Typography>
        </Paper>
        <VoteInner
          dog1id={this.state.dog1id}
          dog2id={this.state.dog2id}
          vote={this.state.vote}
          handleVote={this.handleChange}
          onSubmit={() => this.onSubmit}
        />
      </div>
    );
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Vote));
