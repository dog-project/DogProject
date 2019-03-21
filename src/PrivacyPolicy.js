import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

function PrivacyPolicy(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container className={classes.wrapper}>
        <List>
          <h2>Privacy Notice</h2>
          <ListItem>
            <ListItemText>
              <p>
                This privacy notice discloses the privacy practices for
                https://socialchoice.nuphilosophy.com. This privacy notice
                applies solely to information collected by this website.
                It will notify you of the following:
              </p>
              <ol>
                <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                <li>What choices are available to you regarding the use of your data.</li>
                <li>The security procedures in place to protect the misuse of your information.</li>
                <li>How you can correct any inaccuracies in the information.</li>
              </ol>

              <h3>Information Collection, Use, and Sharing</h3>
              <h4>Photo Submissions</h4>
              <p>During the photo submission process, we are collecting submitter email addresses. By confirming your submission, you give us the right to use your email address to confirm you are either: (i) A member of the faculty and staff of Northeastern University’s Philosophy and Religion Department, (ii) A student actively pursuing a major or minor in Northeastern University’s Philosophy and Religion Department, or (iii) A student actively pursuing a combined major or Politics, Philosophy, and Economics (PPE) degree within Northeastern University’s Philosophy and Religion Department. Besides confirming your involvement with the department, we will only use your email address in the event we need to communicate with you about your submission.</p>
              <p>When you upload a photo to our website, you grant us a non-exclusive, transferable, royalty-free, and worldwide license to host, use, modify, and display your photo. For example, by submitting your photo to https://socialchoice.nuphilosophy.com, you give us permission to crop, display, and share your photo with contest voters and elsewhere to promote and run the contest, display examples, and share post-contest results.</p>
              <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email, submission or other direct contact from you. We will not sell or rent this information to anyone.</p>
              <p>We will use your information to communicate with you if need be. We will not share your information with any third party outside of our organization without your permission.</p>

              <h3>Your Access to and Control Over Information</h3>
              <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address on our website:</p>
              <ul>
                <li>See what data we have about you, if any.</li>
                <li>Change/correct any data we have about you.</li>
                <li>Have us delete any data we have about you.</li>
                <li>Express any concern you have about our use of your data.</li>
              </ul>

              <h3>Security</h3>
              <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
              <p style={{textAlign: 'center'}}><b>If you feel that we are not abiding by this privacy policy, you should contact us immediately via <a rel="noopener noreferrer" target="_blank" href="mailto:northeasterndogproject@gmail.com">email</a>.</b></p>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </MuiThemeProvider>
  );
}

const styles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",

    margin: "10px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    minWidth: "50%"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  wrapper: {
    marginTop: "30px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "2px solid black",
    borderRadius: "15px",
    mozBorderRadius: "15px"
  },
  button: {
    margin: theme.spacing.unit,
    "&:hover": {
      backgroundColor: grey[900]
    }
  },
  input: {
    display: "none"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  radioButtons: {
    display: "inline",
    justifyContent: "center"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: red
  },
  typography: {
    useNextVariants: true
  }
});

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrivacyPolicy);
