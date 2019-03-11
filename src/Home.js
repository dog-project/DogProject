import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.div}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Welcome to The Dog Project!
        </Typography>
        <Typography component="p">
          Click here to do stuff
        </Typography>
      </Paper>
    </div>
  );
}



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  div: {
    paddingTop: '30px',
  }
});

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Home);
