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
                applies solely to information collected by this website. It will
                notify you of the following:
              </p>
              <ol>
                <li>
                  What information is collected from you through the website,
                  how it is used and with whom it may be shared.
                </li>
                <li>
                  The security procedures in place to protect the misuse of your
                  information.
                </li>
              </ol>

              <h3>Information Collection, Use, and Sharing</h3>
              <p>
                We do not collect any personally identifiable information (e.g.
                name, address, email, IP address). Your poll answers and any
                demographic information provided are anonymized and securely
                stored. The only information you are required to share is your
                age and state, which we use for election analysis regarding
                specific state primaries. Only subjects of eligible voting age
                may participate. Providing any further personal demographic
                information is entirely voluntary, and is used solely for the
                purpose of normalizing our results to the population. While we
                retain the right to publish aggregate information collected by
                the poll, no personally identifiable information will be
                disclosed to any third party outside of our organization.
              </p>

              <h3>Security</h3>
              <p>
                We take precautions to protect your information. All information
                submitted through the website is anonymized and stored via
                Google Cloud Web Services. To learn more about their data
                security policy, click here. When you submit sensitive
                information via the website, your information is protected both
                online and offline.
              </p>

              <p style={{ textAlign: "center" }}>
                <b>
                  If you feel that we are not abiding by this privacy policy,
                  you should contact us immediately via{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="mailto:northeasterndogproject@gmail.com"
                  >
                    email
                  </a>
                  .
                </b>
              </p>
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
