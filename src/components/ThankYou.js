import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

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
          Thank you for your submission! We will contact you via email after the
          submission period has concluded if we are going to use your dog in the contest.
        </Typography>
        <br />
        <br />
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
      </Paper>
    </div>
  );
}

export default withStyles(styles)(ThankYou);
