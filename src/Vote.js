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
  state = {
    dog1id: [],
    dog2id: [],
    vote: [],
    dog1pics: [],
    dog2pics: [],
    currDog1Pic: "",
    currDog2Pic: "",
    counter: 1,
    value: ""
  };
  constructor() {
    super();
    //make api call and set dog pics and ids
    for (var i = 0; i < 5; i++) {
      this.state.dog1id[i] = 1;
      this.state.dog2id[i] = 2;
      if (i % 2 === 0) {
        this.state.dog1pics[i] = require("./dogpics/riley.jpg");
        this.state.dog2pics[i] = require("./dogpics/karen.jpg");
      } else {
        this.state.dog1pics[i] = require("./dogpics/karen.jpg");
        this.state.dog2pics[i] = require("./dogpics/riley.jpg");
      }
    }
    this.state.currDog1Pic = this.state.dog1pics[0];
    this.state.currDog2Pic = this.state.dog2pics[0];
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  onClick = () => {
    this.state.vote.push(this.state.value);
    this.setState({ value : "" });
    this.setState({ counter: (this.state.counter + 1) });
    
    if (this.state.counter === 5) {
      this.sendToAPI();
    } else {
      console.log(this.state.counter);
      this.setState({ currDog1Pic: this.state.dog1pics[this.state.counter] });
      this.setState({ currDog2Pic: this.state.dog2pics[this.state.counter] });
    }
  };

  sendToAPI() {
    //console.log(this.state);
    this.props.history.push("/thank-you");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h3">Vote Page</Typography>
        </Paper>
        <Grid container spacing={24} className={classes.grid}>
          <Grid item sm={6} xs={12} className={classes.gridContent1}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  image={this.state.currDog1Pic}
                  title="DogA"
                />

                <CardContent>Dog A</CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12} className={classes.gridContent2}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  image={this.state.currDog2Pic}
                  title="DogB"
                />

                <CardContent>Dog B</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.form}>
          <form component="fieldset">
            <FormLabel component="legend" className={classes.label}>
              <Typography variant="h6">Which dog is cuter?</Typography>
            </FormLabel>
            <RadioGroup
              aria-label="Which dog is cuter?"
              name="cuteVote"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio required />}
                label="Dog A"
              />
              <FormControlLabel value="2" control={<Radio />} label="Dog B" />
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="I am indifferent"
              />
            </RadioGroup>
            <Button variant="contained" onClick={this.onClick}>
              Submit
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withRouter(withStyles(styles)(Vote));
