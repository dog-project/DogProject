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
    "&:hover": {
      backgroundColor: "#212121"
    }
  }
});

function ThankYou(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4">
          You have finished voting! Thank you for voting in our contest!
          In the coming weeks, we will be compiling and analyzing all our voting
          information and will display our results on this web site. Please
          check back in the next couple weeks to see the final results of our
          voting contest!
        </Typography>
        <br />
        <br />
      </Paper>
      <Paper className={classes.root} elevation={2}>
        <p>
          If you have questions or would like more information about the project please contact us via{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:northeasterndogproject@gmail.com"
          >
            email
          </a>
        </p>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(ThankYou);
