import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AboutCategories from "./components/AboutCategories";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  div: {
    paddingTop: '30px',
  },
  categoryPanel: {
    paddingTop: '30px',
  }
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.div}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is the About page
        </Typography>
        <Typography component="p">
          Say stuff here
        </Typography>
      </Paper>

      <AboutCategories />
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);