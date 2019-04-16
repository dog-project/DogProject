import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    paddingLeft: "30px",
    paddingRight: "30px"
    //textIndent: "2em"
  },
  header: {
    marginTop: "20px",
    marginBottom: "30px",
    textAlign: "center"
  },
  separation: {
    display: "inline-block",
    marginTop: "30px",
    marginBottom: "30px"
  }
});

class Lessons extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.header}>
          Lessons for Democracy
        </Typography>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Spirit (of the competition) vs. rules (guidelines we wrote)</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                In addition to the rules and guidelines we created for
                submitting and voting in the competition, we acknowledge the
                presence of a set of “unwritten rules” which capture the
                “spirit” of the competition.
              </li>
            </ul>
          </Typography>
        </div>
        <div className={classes.separation}>
          <Typography variant="h5">
            <b>3-way tradeoff between privacy, security, participation</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                In designing the submission and voting procedures, the team has
                had to consider a three-way tradeoff between information
                privacy, anti-fraud / security measures, and participation
                levels.
              </li>
              <li>
                While information privacy is our primary concern, we designed
                both procedures to minimize the importance of privacy by
                limiting the amount of collected private data.
              </li>
              <li>
                That said, submitters were required to provide certain
                identifying information, increasing our privacy and security
                efforts. We expect this to lead to a lower rate of
                participation. While in elections for the President, there are
                never too few potential candidates there are regulatory bodies
                that ensure that candidates reveal information that might
                compromise their ability to perform fairly in the election
                process. In our context, we needed an equivalent to the U.S.
                Federal Election Commission to make sure that every submission
                we received was going to be able to fairly compete.
              </li>
              <li>
                Conversely, we do not collect any identifying information on
                voters, decreasing the need for information privacy and making
                it more difficult to detect “fraudulent” activity. Therefore, we
                expect relatively higher voter participation rates. In the 2018
                Georgia Secretary of State election, this discussion of how to
                incentivize participation while maintaining the integrity of the
                election was hotly debated because controversial security
                concerns were considered especially likely to discourage
                opposition to the incumbent.
              </li>
            </ul>
          </Typography>
        </div>
        <div className={classes.separation}>
          <Typography variant="h5">
            <b>How do we detect fraud?</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                We have various procedures in place for preventing and
                identifying fraud.
              </li>
              <li>
                During the submission process, we manually vetted each
                submission for various forms of fraud. These included ensured
                each submitter met our established criteria, performed
                reverse-search for images, scrubbed photograph metadata.
              </li>
              <li>
                We discussed several procedures to prevent and detect voter
                fraud including a captcha and the use of vote pattern analytics
                (vote speed). A captcha is a digital verification tool which
                presents the user with a task that would be easy for a human to
                complete but should be excessively difficult for a bot or
                computer program to solve. Ultimately, we decided against
                implementing the captcha in order to maximize the number of
                votes during the competition (some voters would opt out of
                participating when presented with a captcha). We have the means
                to retroactively exclude voter sets if they follow suspicious
                patterns (i.e. each vote is inputted after exactly 0.75 seconds)
                and will take this into account as we parse through the data.
              </li>
              <li>
                This ties into how difficult it is to modernize federal and
                state voting systems. Preventing voter fraud is of the utmost
                importance in government elections. It is common to think that
                digital transactions are more secure, traceable, and efficient
                as compared to “pen and paper” transactions. Ironically, voting
                on pen and paper and in-person verification efforts are more
                effective fraud detectors and deterrents when compared to their
                digital counterparts. We needed to consider the digital tools
                (captcha, data analytics) for this exact reason; our voting
                procedure was less secure because it was entirely digital.
              </li>
            </ul>
          </Typography>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(Lessons);
