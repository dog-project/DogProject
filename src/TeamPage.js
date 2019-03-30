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

  componentDidMount() {
    window.scroll(0,0);
  };


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={ classes.header }>
          <Typography variant="h2">Meet The Team</Typography>
        </Paper>
        <Grid container spacing={24} className={ classes.grid }>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Sam Merkovitz" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Charlie Haviland" bio="Badly allergic to dogs" image="charlie-haviland"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Julian Zucker" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Danny Rassaby" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Mike Nelson" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Andy Aronson" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Christopher Osborne" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Dan O'Leary" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Jackie R." bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Keshav Sharma" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Mac d'Leeuwen" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Mikaela Gluck" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Sam Haas" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Sam Hirshland" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Yifan" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Rory Smead" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="Ronald Sandler" bio="This is the bio" image="placeholder"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name="John Basl" bio="This is the bio" image="placeholder"/>
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
