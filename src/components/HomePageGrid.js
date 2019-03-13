import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

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
        <Grid item lg={6} xs={12}>
          <Paper className={classes.paper}>
          <Typography variant="h5">
            Why research social choice?
          </Typography>
          </Paper>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Paper className={classes.paper}>
          <Typography variant="h5">
            What do cute dogs have to do with this?
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

HomePageGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePageGrid);