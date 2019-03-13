import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AboutCategories from "./components/AboutCategories";
import ViewsTable from "./components/ViewsTable";

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
  categoryPanel: {
    paddingTop: "30px"
  },
  viewsTable: {
    marginLeft: '50%',
  },
  categoriesPaper: {
    maxWidth: 600,
    display: 'inline-block',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "30px"
  }
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.div}>
      <Paper className={classes.root} elevation={6}>
        <Typography variant="h5" component="h3">
          The Deep Philosophical Stuff
        </Typography>
        <Typography component="p">
          As we are a research group within the Philosophy department at
          Northeastern University. There was a lot we aimed to understand
          through the process of creating this project and analyzing its
          results. This page is dedicated to all of the philosophical aspects we
          tried to uncover.
        </Typography>
      </Paper>
      <Paper className={ classes.categoriesPaper} elevation={1}>
        <Typography variant="h5" component="h3">
          RISE Presentation
        </Typography>
        <Typography component="p">
          We presented at Northeastern's RISE Expo 2019. Here is a little more
          about the why we ran this project, how we approached the application,
          what we aim to got from our results, and what the impacts of our
          findings were
        </Typography>
      </Paper>

      <AboutCategories />

      <div className={classes.viewsTable}>
        <ViewsTable className={classes.viewsTable} />
      </div>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
