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
        <Typography variant="h3" component="h3" className={ classes.header }>
          Welcome to The Cute Dog Project!
        </Typography>
        <Typography component="p" className={ classes.paragraph }>
          We are running a research experiment that aims at answering a few questions about our social choice processes and consequently, our views on cute dogs. 
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
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  paragraph: {
    textAlign: 'center',
  }
});

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Home);
