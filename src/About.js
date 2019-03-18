import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AboutCategories from "./components/AboutCategories";
import ViewsTable from "./components/ViewsTable";
import Grid from "@material-ui/core/Grid";
import VotingMethodsTable from "./components/VotingMethodsTable";

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
    paddingBottom: theme.spacing.unit * 2,
    //marginBottom: "30px"
  }
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.div}>
      <Paper className={classes.root} elevation={6}>
        <Typography variant="h5" component="h3">
          What is The Cute Dog Project
        </Typography>
        <Typography component="p">
          <br />
          We are a research group within the Philosophy department at
          Northeastern University that started from an argument between three
          professors over who has the cutest dog? Instead of argue until the end
          of time (as philosophers will do), the three decided to set their
          differences aside and let philosophy answer the question. It was
          decided that a voting contest would need to be put in place to not
          only answer the question of who has the cutest dog between those three
          professors but also who has the cutest dog in the entirety of the
          Philosophy Department at Northeastern, and next the entire University
          of Northeastern, and hopefully one day, the entire world. To answer
          this simple question of "Who has the cutest dog?" we had to decide on
          a few things.
          <ul>
            <li>
              How are democratic processes used in group decisions to resolve
              disputes?
            </li>
            <li>What would our voting procedure be?</li>
            <li>How do we define cuteness and can we even define it?</li>
            <li>
              Who would be allowed to submit photos and who would be allowed to
              vote?
            </li>
            <li>
              How does this question help us uncover answers about generalized
              social choice theories and voting procedures?
            </li>
          </ul>
        </Typography>
      </Paper>
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
        <Grid item xs={12} md={6} className={ classes.table }>
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
        <Grid item xs={12} md={6} className={ classes.table }>
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
        <Grid item xs={12} md={6} className={ classes.table }>
          <AboutCategories />
        </Grid>
      </Grid>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
