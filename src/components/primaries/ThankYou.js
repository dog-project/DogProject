import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Twitter, Facebook, Linkedin, Mail } from 'react-social-sharing'


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
  const link = "https://socialchoice.nuphilosophy.com/primaries/vote";
  const message =
    "How would Super Tuesday be different if we used different voting systems? You can help us find out! Please rank the Democratic primary candidates below.";

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4">
          You have finished voting! Thank you for completing our voter
          preference survey! In the coming weeks, we will be compiling and
          analyzing the voting data and will display our results on this web
          site. Please check back in a couple weeks to see the results.
        </Typography>
        <br />
        <br />
        <p>Share this project!</p>
        <Facebook big link={link}/>
        <Twitter solid big message={message} link={link}/>
        <Linkedin solid big message={message} link={link}/>
      </Paper>
      <Paper className={classes.root} elevation={2}>
        <p>
          If you have questions or would like more information about the project
          please contact us via{" "}
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
