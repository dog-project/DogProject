import React, { Component } from "react";
import BioCard from "./BioCard";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {

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
  }
});

class TeamPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={ classes.header }>
          <Typography variant="h2">Meet The Team</Typography>
        </Paper>
        <Grid container spacing={24} className={ classes.grid }>
          <Grid item xs={12} md={4}>
            <BioCard name="Sam Merkovitz" bio="This is the bio" image="dog1"/>
          </Grid>
          <Grid item xs={12} md={4}>
            <BioCard name="Charlie Haviland" bio="This is the bio" image="dog1"/>
          </Grid>
          <Grid item xs={12} md={4}>
            <BioCard name="Julian Zucker" bio="This is the bio" image="dog1"/>
          </Grid>
          <Grid item xs={12} md={4}>
            <BioCard name="Danny Rassaby" bio="This is the bio" image="dog1"/>
          </Grid>
          <Grid item xs={12} md={4}>
            <BioCard name="Mike Nelson" bio="This is the bio" image="dog1"/>
          </Grid>
          <Grid item xs={12} md={4}>
            <BioCard name="Andy Aronson" bio="This is the bio" image="dog1"/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TeamPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamPage);
