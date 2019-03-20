import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

function Home(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.div}>
        <Paper className={classes.root} elevation={6} color="secondary">
          <Typography
            variant="h3"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Welcome to The Cute Dog Project
          </Typography>

          <Typography component="p">
            <br />
            We are a research group within the Philosophy department at
            Northeastern University that started from an argument between three
            professors over who has the cutest dog? Instead of argue until the
            end of time (as philosophers will do), the three decided to set
            their differences aside and let philosophy answer the question. It
            was decided that a voting contest would need to be put in place to
            not only answer the question of who has the cutest dog between those
            three professors but also who has the cutest dog in the entirety of
            the Philosophy Department at Northeastern, and next the entire
            University of Northeastern, and hopefully one day, the entire world.
            To answer this simple question of "Who has the cutest dog?" we had
            to decide on a few things.
            <ul>
              <li>
                How are democratic processes used in group decisions to resolve
                disputes?
              </li>
              <li>What would our voting procedure be?</li>
              <li>How do we define cuteness and can we even define it?</li>
              <li>
                Who would be allowed to submit photos and who would be allowed
                to vote?
              </li>
              <li>
                How does this question help us uncover answers about generalized
                social choice theories and voting procedures?
              </li>
            </ul>
            To answer our questions, and consequently find the cutest dog, we
            will run our project in two phases. The first phase is "The Submit
            Page" which will run from Wednesday, March 20th through Sunday,
            March 31st, during which time, we will be accepting submissions for
            the contest. The next phase is "The Vote Phase" which will begin on
            April 1st. During that time, you can
            return back to the website where you will be directed to a Sign-Up
            page, which after will allow you to vote on a subset of the dogs
            submitted in a pairwise voting function.
          </Typography>
        </Paper>
        {/* <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.categoriesPaper}>
              <Typography component="p">
                We spent a lot of time discussing the philosophical aspects of
                this voting contest, such as "What is Cuteness?", "What should
                be our voting system?", "How does the contest impact other
                democratic situations?". If you would like to read more about
                our discussions and reasoning behind our decisions, check out
                our About Page.
              </Typography>
              <MuiThemeProvider theme={theme}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/about"
                  className={classes.button}
                >
                  Go to the About Page
                </Button>
              </MuiThemeProvider>
            </Paper>
          </Grid> */}
          <Grid item xs={12} >
            <Paper className={classes.categoriesPaper} elevation={1}>
              <Typography component="h4">
                If you came to this website and thought to yourself, "No doubt,
                my dog is the cutest", and would like to submit your dog to our
                contest, please visit our Submit Page!
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

      </div>
    </MuiThemeProvider>
  );
}

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
  header: {
    textAlign: "center",
    marginBottom: "20px"
  },
  paragraph: {
    textAlign: "center"
  },
  categoriesPaper: {

    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center"
  },
  button: {
    marginTop: "20px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: grey[900]
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

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
