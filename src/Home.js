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

          <p>
            We are a student research group within the Philosophy & Religion
            Department at Northeastern University conducting a project to
            determine who in the Department has the cutest dog, a topic about
            which there has been long-standing and passionate disagreement.
            Instead of arguing until the end of time (as philosophers will do),
            three professors decided to set their differences aside and let us
            try to answer the question in a philosophically and scientifically
            rigorous way. This was the origin of the Cute Dog Project.
          </p>
          <p>
            One reputable method of settling disputes is to vote. We decided
            that a voting contest should be put in place to settle whose dog
            is cutest in the entirety of the Philosophy & Religion Department
            (students, faculty and staff) at Northeastern. Eventually, we hope
            to extend this to the entire university and beyond. However,
            answering the apparently simple question of "Who has the cutest
            dog?" actually requires answers to several other difficult
            questions, such as:
          </p>
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
            <li>How do we control for possible social and cultural biases?</li>
            <li>How do we collect and manage voting data in ways that are secure and respect privacy?</li>
          </ul>
          <p>
            Thus, determining whose dog is the cutest has required us to design a system informed by democratic theory, social choice theory, value theory, critical theory, philosophy of science, and information ethics. It has required us to grapple with the same sorts of issues that arise in democratic practice and social decision-making in other contexts – for example, selecting a presidential candidate from a crowded primary field or selecting applicants for admission to a competitive university.
          </p>
          <p>But now, it is time to launch!</p>
          <p>
          To answer our questions, and find the cutest dog, we will run our
          project in three phases. The first phase is "The Submit Phase" which
          will run from Wednesday, March 20th through Sunday, March 31st, during
           which time, we will be accepting submissions for the contest. The
           next phase is "The Vote Phase" which will begin on April 1st. During
           that time, you can return to the website where you may cast votes on
           pairs of dogs to help us determine which dogs are cuter than others.
           The final phase is "The Analysis and Interpretation Phase." During that
            time, you can return to the website to find out the winner, learn
            about our methodology, and see how different voting and social
            choice methods could have generated different results.
          </p>
          <p>
          Thank you for your time helping us, finally, settle a philosophers' debate.
          </p>
        </Paper>
        <Grid item xs={12} >
          <Paper className={classes.categoriesPaper} elevation={3}>
            <p>
              If you came to this website and thought to yourself, "No doubt,
              my dog is the cutest", and would like to submit your dog to our
              contest, please visit our Submit Page!
            </p>
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
      <div className={classes.div}>
        <Grid item xs={12} >
          <Paper className={classes.categoriesPaper} elevation={2}>
            <p>
              If you have questions or would like more information about the
              Cute Dog Project please contact
              us via <a rel="noopener noreferrer" target="_blank" href="mailto:northeasterndogproject@gmail.com">email</a>
            </p>
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
