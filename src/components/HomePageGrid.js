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
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>
          <Typography variant="h5" style={{marginBottom: "25px"}}>
            Why research social choice?
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sollicitudin tincidunt. Duis aliquam fringilla fringilla. Integer ut purus mi. Proin bibendum rhoncus urna, quis lobortis justo cursus vehicula. Donec nisi est, sollicitudin at lobortis nec, pretium at neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque felis mauris, tempus in accumsan et, varius vitae turpis. Ut ut erat ut libero volutpat lobortis. Aenean rutrum, mauris sit amet condimentum porta, ligula ipsum sagittis mauris, at pulvinar nulla nibh sed dui. Aenean auctor interdum rhoncus. Pellentesque mollis gravida sollicitudin. Suspendisse potenti. Nulla viverra purus quis nunc porttitor auctor.
          </Typography>
          <Typography variant="p">
            Maecenas est ipsum, iaculis sed urna eu, ultricies lobortis diam. Donec nec placerat massa. Maecenas nibh nibh, faucibus id ligula ut, lobortis suscipit nibh. Nunc maximus aliquam erat. Duis eu vehicula nunc. Ut ultrices ut massa id aliquet. Praesent eget lacinia dui, ut suscipit lorem. Praesent imperdiet id magna a condimentum.
          </Typography>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>
          <Typography variant="h5"  style={{marginBottom: "25px"}}>
            What do cute dogs have to do with this?
          </Typography>
          <Typography variant="p">
            Sed eu congue risus. Phasellus maximus eget lectus ut elementum. Morbi congue dapibus risus id congue. Integer dapibus nisl urna, quis lacinia turpis maximus ac. Nam posuere urna neque, eget laoreet urna efficitur vitae. Phasellus augue enim, scelerisque in sapien sit amet, consectetur tincidunt sem. Morbi eget tempus purus. Quisque porta ultricies libero, eget tristique odio pharetra eu. Proin et quam ornare, dictum sem ut, porttitor sem. In ac volutpat ligula, ut sollicitudin quam. Maecenas euismod posuere sollicitudin. Praesent ac lectus malesuada, dapibus odio ut, sodales mauris.
          </Typography>
          <Typography variant="p">
            Vivamus ut velit eu urna facilisis rutrum maximus ac lacus. Nunc eget rhoncus metus. Praesent vestibulum tempus faucibus. Aenean hendrerit ante sed urna tempor tincidunt. Morbi nec viverra magna. Donec euismod odio mauris, ut consectetur sapien interdum in. Suspendisse mollis tellus at sollicitudin placerat. Nam nunc arcu, tempor ut auctor non, convallis eu velit. Vestibulum blandit lectus non lorem viverra tempus sit amet in arcu. Vivamus commodo gravida ligula, quis laoreet tellus consectetur nec. Fusce vel risus arcu. Pellentesque porttitor dapibus consequat. Donec elementum ultrices leo. Quisque vitae odio felis. Curabitur porttitor fringilla sapien eu semper. Nulla vitae hendrerit magna.
          </Typography>
          </Paper>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Paper className={classes.paper}>
          <Typography variant="h4">
            Click here to begin voting on dog pairs!
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