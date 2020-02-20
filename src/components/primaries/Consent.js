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
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

function Consent(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container className={classes.wrapper}>
        <List>
          <ListItem>
            <ListItemText>
              <p>
                <b>
                  Northeastern University, Department of Philosophy & Religion
                </b>
                <br />
                <b>Name of Investigator(s): Rory Smead, John Edwards</b>
                <br />
                <b>Title of Project:</b> The Primaries Project: Social Choice
                and Voting Systems
                <br />
                <b>Sponsor: Rossetti Family Program for the of Humanities</b>
              </p>
              <h3>Request to Participate in Research</h3>
              <p>
                We would like to invite you to participate in a web-based online
                survey. The survey is part of a research study whose purpose is
                to analyze alternative voting systems in the context of the
                Democratic primary.
              </p>
              <h3>Key Information</h3>
              <ul>
                <li>
                  Your consent is being sought for participation in a research
                  project and your participation is voluntary.
                </li>
                <li>Change/correct any data we have about you.</li>
                <li>
                  The purpose of the research is to analyze alternative voting
                  systems in the context of the Democratic primary.
                </li>
                <li>
                  This survey will ask that you provide a preference ranking of
                  the candidates and some basic demographic information.
                </li>
                <li>There are no foreseeable risks to you.</li>
                <li>There are no direct benefits to you.</li>
              </ul>
              <p>
                This survey should take less than five minutes to complete.
                <br /><br />
                We are asking you to participate in this study because you are a
                potential voter with an interest in the Democratic primary
                election.
                <b>You must be at least 18 years old to take this survey. </b>
                <b>
                  The decision to participate in this research project is
                  voluntary.&nbsp;
                </b>
                You do not have to participate and you can refuse to answer any
                question. Even if you begin the web-based online survey, you can
                stop at any time.
                <br /><br />
                <b>
                  There are no foreseeable risks or discomforts to you for
                  taking part in this study. 
                </b>
                <br /><br />
                <b>
                  There are no direct benefits to you from participating in this
                  study.&nbsp;
                </b>
                However, your responses may help us learn more about voter
                preferences in the Democratic primary.
                <br /><br />
                <b>
                  You will not be paid for your participation in this study.
                </b>
                <br /><br />
                <b>
                  Your part in this study is anonymous to the researcher(s).
                  However, because of the nature of web based surveys, it is&nbsp;
                  <u>possible</u> that respondents could be identified by the IP
                  address or other electronic record associated with the
                  response. Neither the researcher nor anyone involved with this
                  survey will be capturing those data. Any reports or
                  publications based on this research will use only group data
                  and will not identify you or any individual as being
                  affiliated with this project.
                </b>
              </p>
              <h3>Future Use of Data</h3>
              <p>
                Your de-identified information could be used for future research{" "}
                <b>without additional informed consent.</b>
                <br /><br />
                <b>If you have any questions regarding electronic privacy, </b>
                please feel free to contact Mark Nardone, NU’s Director of
                Information Security via phone at 617-373-7901, or via email at
                privacy@neu.edu.
                <br /><br />
                <b>If you have any questions about this study,</b> please feel
                free to contact John Edwards (northeasterndogproject@gmail.com),
                the person mainly responsible for the research. You can also
                contact Rory Smead (r.smead@northeastern.edu), the Principal
                Investigator.
                <br /><br />
                <b>
                  If you have any questions regarding your rights as a research
                  participant,&nbsp;
                </b>
                please contact Nan C. Regina, Director, Human Subject Research
                Protection, Mail Stop: 560-177, 360 Huntington Avenue,
                Northeastern University, Boston, MA 02115. Tel: 617.373.4588,
                Email: n.regina@northeastern.edu. You may call anonymously if
                you wish.
                <br /><br />
                <b>
                  This study has been reviewed and approved by the Northeastern
                  University Institutional Review Board (# xx-xx-xx).
                </b>
                <br /><br />
                <b>
                  By clicking on the “accept” button below you are indicating
                  that you consent to participate in this study. Please print
                  out a copy of this consent screen or download a copy of the
                  consent form for your records.
                </b>
                <br /><br />
                Thank you for your time.<br /> John Edwards
              </p>
              
            </ListItemText>
          </ListItem>
        </List>
        <Button
          variant="contained"
          color="primary"
          size={"large"}
          style={{ margin: "8px 15px 8px auto" }}
          onClick={props.callback}
        >
          Accept
        </Button>
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

Consent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Consent);
