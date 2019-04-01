import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: "30px",
    marginBottom: "30px",
    textAlign: "center"
  },
  button: {
    margin: "20px",
    '&:hover': {
      backgroundColor: "#212121"
    }
  }
});

function ThankYou(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={ classes.root }>
        <Typography variant="h3" >
          We are no longer accepting submissions and are currently in the process of choosing the dogs that will be in the contest. Please check back soon to start voting!
        </Typography>
        <br />
        <br />
        </Paper>
        <Paper className={classes.root} elevation={2}>
            <p>
              If you have questions or would like more information about the
              Cute Dog Project please contact
              us via <a rel="noopener noreferrer" target="_blank" href="mailto:northeasterndogproject@gmail.com">email</a>
            </p>
          </Paper>
        {/* <Typography variant="h3">
          In the meanwhile, if you would like to learn more about why we are doing what we are doing, you can visit our About Page to read about the philosophy behind The Cute Dog Project
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
              </MuiThemeProvider> */}

    </div>
  );
}

export default withStyles(styles)(ThankYou);
