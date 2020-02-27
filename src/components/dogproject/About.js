import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AboutCategories from "./components/AboutCategories";
import ViewsTable from "./components/ViewsTable";
import Grid from "@material-ui/core/Grid";
import VotingMethodsTable from "./components/VotingMethodsTable";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "30px"
  },
  div: {
    paddingTop: "30px"
  },
  table: {
    marginBottom: "30px"
  },
  categoriesPaper: {
    display: "inline-block",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
    //marginBottom: "30px"
  },
  submitButton: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center",
    // marginLeft: "25%",
    // marginRight: "25%"
  },
  button: {
    marginTop: "20px",
    marginBottom: "15px",
    '&:hover': {
      backgroundColor: "#212121"
    }
  }
});

const theme = createMuiTheme({
  palette: {
    primary: red
  },
  typography: {
    useNextVariants: true
  }
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.div}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.categoriesPaper} elevation={1}>
            <Typography variant="h5" component="h3">
              Metaphysical Views of Cuteness
            </Typography>
            <Typography component="p">
              We had to discern between what views of cuteness we might uncover
              through this experiment. The "Metaphysical Views" table gives a
              brief example of how each ideology views Cuteness.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} className={classes.table}>
          <ViewsTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.categoriesPaper} elevation={1}>
            <Typography variant="h5" component="h3">
              Different Voting Methods
            </Typography>
            <Typography component="p">
              Let's talk about the different available voting methods and the
              pros and cons of each of them words to fill the
              resttttttttttttttttttttttttttttttttttt
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} className={classes.table}>
          <VotingMethodsTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.categoriesPaper} elevation={1}>
            <Typography variant="h5" component="h3">
              RISE Presentation
            </Typography>
            <Typography component="p">
              We presented at Northeastern's RISE Expo 2019. Here is a little
              more about the why we ran this project, how we approached the
              project, what we aim to got from our results, and what the impacts
              of our findings were. The expansion pannels help explain what we
              presented at the Expo. Open the panels to learn more about each
              section.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} className={classes.table}>
          <AboutCategories />
        </Grid>

        <Grid item xs={12} >
          <Paper className={classes.submitButton} elevation={1}>
            <Typography component="h4">
              If you would like to Submit your dog into the contest, you can go
              to the submit page here
            </Typography>
            <MuiThemeProvider theme={theme}>
              <Button
                size="large"
                color="primary"
                variant="contained"
                component={Link}
                to="/submit"
                className={classes.button}
              >
                Submit Your Dog!
              </Button>
            </MuiThemeProvider>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
