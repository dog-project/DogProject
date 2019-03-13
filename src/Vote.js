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
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

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
    width: 250,
    height: 250
  },
  card: {
    alignItems: "center",
    maxHeight: 300,
    maxWidth: 250,
    display: "flex",
    marginLeft: "15%",
    marginRight: "15%"
  },
  gridContent: {
    alignItems: "center",
    padding: theme.spacing.unit * 2,
    display: "flex"
  },
  grid: {
    alignItems: "center",
    display: "flex"
  },
  formControl: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    margin: theme.spacing.unit * 3,
    paddingLeft: "25%"
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  label: {
    marginLeft: -30
  }
});

export class Vote extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h3">Vote Page</Typography>
        </Paper>
        <Grid container spacing={24} className={classes.grid}>
          <Grid item lg={5} xs={12} className={classes.gridContent}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  image={require("./dogpics/riley.jpg")}
                  title="DogA"
                />

                <CardContent>Dog A</CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item lg={5} xs={12} className={classes.gridContent}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  image={require("./dogpics/karen.jpg")}
                  title="DogB"
                />

                <CardContent>Dog B</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

            <FormControl component="fieldset" className={classes.formControl}>
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
                  value="Dog A"
                  control={<Radio />}
                  label="Dog A"
                />
                <FormControlLabel
                  value="Dog B"
                  control={<Radio />}
                  label="Dog B"
                />
              </RadioGroup>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </FormControl>

      </div>
    );
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Vote);
