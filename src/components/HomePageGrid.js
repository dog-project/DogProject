import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '30px',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function HomePageGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Click Here To See The Dogs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Click Here To Vote</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

HomePageGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePageGrid);