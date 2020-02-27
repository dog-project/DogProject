import React, { Component } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
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

class VoteInner extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={24} className={classes.grid}>
          <Grid item sm={6} xs={12} className={classes.gridContent1}>
            <Card className={classes.card}>
              <CardActionArea onClick={this.handleChange}>
                <CardMedia
                  component="img"
                  alt="Dog A"
                  className={classes.media}
                  value={this.props.dog1id}
                  src={"/images/dogs/" + this.props.dog1id + ".png"}
                  title="DogA"
                />

                <CardContent>Dog A</CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12} className={classes.gridContent2}>
            <Card className={classes.card}>
              <CardActionArea onClick={this.handleChange}>
                <CardMedia
                  component="img"
                  alt="Dog B"
                  className={classes.media}
                  value={this.props.dog2id}
                  src={"/images/dogs/" + this.props.dog2id + ".png"}
                  title="DogB"
                />

                <CardContent>Dog B</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.form}>
          <form
            component="fieldset"
            action=""
            onSubmit={this.props.onSubmit().bind(this)}
          >
            <FormLabel component="legend" className={classes.label}>
              <Typography variant="h6">Which dog is cuter?</Typography>
            </FormLabel>
            <RadioGroup
              aria-label="Which dog is cuter?"
              name="cuteVote"
              className={classes.group}
              onChange={this.props.handleVote}
              value={String(this.props.vote)}
            >
              <FormControlLabel
                value={String(this.props.dog1id)}
                control={<Radio required />}
                label="Dog A"
              />
              <FormControlLabel
                value={String(this.props.dog2id)}
                control={<Radio />}
                label="Dog B"
              />
              <FormControlLabel
                value={this.props.indifferent}
                control={<Radio />}
                label="I am indifferent"
              />
            </RadioGroup>
            <Button variant="contained" onClick={this.props.onSubmit()}>
              Submit
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}

VoteInner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(VoteInner));
