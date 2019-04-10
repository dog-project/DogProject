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

class Governance extends Component {
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
        <Typography variant="h4" className={classes.header}>
          Governance
        </Typography>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Submission Guidelines</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                Our guidelines for dog submissions were designed to isolate the
                dogs’ aesthetics as much as possible to minimize the possibility
                of non-aesthetic or non-dog related variables influencing voter
                judgement. Put simply, our submission guidelines were designed
                to accurately represent each dog’s cuteness.
              </li>
              <li>
                With respect to photographs, our guidelines required all photos
                to be taken on smartphone cameras (to reduce variation in photo
                quality), props were not allowed (to isolate the focus on the
                dog), and pictures had to be taken with simple backgrounds
                (again, to prevent distraction or influence outside of the dog
                itself).
              </li>
            </ul>
          </Typography>
        </div>
        <div className={classes.separation}>
          <Typography variant="h5">
            <b>"The Baseball Problem"</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                While working though governance issues with respect to
                submissions, voting population, and data privacy, we continually
                discovered unprecedented situations which were not covered by
                our rules. In the event of one of these “Baseball” problems
                (named because it is common for a situation to arise in baseball
                not covered by its extensive rulebook), the governance team
                worked to put in place a rule that could address the problem in
                the future regardless of the scale of the project.
              </li>
              <li>
                For example, with respect to photo editing (which was not
                stipulated in our initial submission guidelines), we have since
                added a “no external photo editing” rule to distinguish between
                the “editing” a camera’s software will automatically produce
                versus an external editing application such as Photoshop or
                equivalent software.
              </li>
            </ul>
          </Typography>
        </div>
        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Privacy</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                In designing our <a href="/privacy-policy">privacy policy</a> ,
                our goal was to protect all data stored on our website and to
                minimize the need for personally identifying information.
              </li>
              <li>
                For submitters, we aimed to prevent voters from identifying who
                submitted which dog by giving each submission an anonymous key
                and removing any identifying information (names, email
                addresses, etc.) from the picture.
              </li>
              <li>
                For voters, we have included a non-personally identifying
                demographic survey at the beginning of the voting process. This
                means we are not collecting any information which can singularly
                (or in conjunction with the other information we collected) be
                used to identify the voter beyond a reasonable doubt. For
                example, we do not collect or store any information about
                voters’ names, email addresses, IP addresses, or locations.
              </li>
            </ul>
          </Typography>
        </div>
        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Anti-Fraud Measures</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                We have worked to prevent submission fraud by requiring
                submitters to agree to a variety of statements about their
                submission, including ownership of the subject and image. In
                addition, given the scope of our submission pool, we were able
                to manually verify each submission using various methods
                (reverse-search, metadata analysis, etc.).
              </li>
              <li>
                We implemented a “captcha”, which we are using to prevent
                non-human voter fraud.
              </li>
            </ul>
          </Typography>
        </div>
        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Intellectual Property</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                Our discussion of intellectual property is discussed in our
                privacy policy [hyperlink?]. Our goal is to treat all submitter
                and voter intellectual property with the utmost respect and
                ethical consideration, using only IP when necessary.
              </li>
            </ul>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Governance);
