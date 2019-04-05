import React, { Component } from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";

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
  },
  shareButtons: {
    justifyContent: "center",
    padding: theme.spacing.unit * 2,
    display: "flex"
  }
});

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.location.state.userId,
      dog1id: this.props.location.state.dog1id,
      dog2id: this.props.location.state.dog2id,
      vote: null,
      indifferent: "-1",
      voteCount: 0
    };
  }

  handleChange = event => {
    console.log(event);
    this.setState({ vote: parseInt(event.target.value) });
  };

  onSubmit = () => {
    if (this.state.vote !== null) {
      this.sendVoteToAPI();
    } else {
      console.log(this.state);
    }
  };

  sendVoteToAPI() {
    const that = this;
    const voteCount = that.state.voteCount;
    fetch(
      "https://us-east1-dog-project-234515.cloudfunctions.net/submit_vote",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          dog1_id: this.state.dog1id,
          dog2_id: this.state.dog2id,
          winner: this.state.vote,
          voter_uuid: this.state.userId
        })
      }
    ).then(function(response) {
      if (response.status >= 500 && this.state.voteCount > 320) {
        that.props.history.push("/thank-you");
      } else if (response.status !== 200) {
        alert(
          "A " +
            response.status +
            " error occurred. Please contact us at northeasterndogproject@gmail.com"
        );
      } else {
        response.json().then(function(data) {
          if (data) {
            that.setState({
              dog1id: data.dog1,
              dog2id: data.dog2,
              voteCount: voteCount + 1,
              vote: null
            });
            window.scroll(0, 0);
          } else {
            //thank you for voting
          }
        });
      }
    });
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { classes } = this.props;
    const voteCount = this.state.voteCount;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h3" style={{ paddingBottom: "7px" }}>
            Vote Page
          </Typography>
          <p>
            Please select the corresponding radio button for which dog you think
            is cuter. If you have an indifferent view of which dog is cuter,
            please select "I am indifferent".
          </p>
          <p>When you click "Submit", you will be shown a new pair of dogs.</p>
        </Paper>
        <Paper className={classes.paper}>
          <p>
            You have voted on <strong>{voteCount}/325</strong> pairings. You can
            stop voting at any time.
          </p>
        </Paper>
        <VoteInner
          dog1id={this.state.dog1id}
          dog2id={this.state.dog2id}
          vote={this.state.vote}
          indifferent={this.state.indifferent}
          handleVote={this.handleChange}
          onSubmit={() => this.onSubmit}
        />

        <Paper className={classes.paper}>
          <Grid container spacing={24}>
            <Grid item xs={12} className={classes.shareButtons}>
              <TwitterShareButton
                title="I just voted in The Cute Dog Project. You can too!"
                url="I just voted in The Cute Dog Project. You can too!"
                via=" https://socialchoice.nuphilosophy.com"
              >
                <TwitterIcon size={32} rect={true} />
              </TwitterShareButton>
              <FacebookShareButton
                url="https://socialchoice.nuphilosophy.com"
                via="I just voted in The Cute Dog Project. You can too!"
                style={{ paddingLeft: "10px" }}
              >
                <FacebookIcon size={32} rect={true} />
              </FacebookShareButton>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Vote));
