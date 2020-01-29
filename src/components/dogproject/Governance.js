import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    paddingLeft: "30px",
    paddingRight: "30px",
    //textIndent: "2em",
    marginTop: "30px"
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

        <p>
          In a democracy, elections have to be governed. There have to be
          rules put into place regarding such things as when voting occurs,
          how it occurs, who can vote, who is eligible, how the votes are
          tallied, and many many other things. Moreover, those rules have to
          be enforced to ensure that they are followed. What is more,
          situations come up for which its not clear how the rules apply (or
          whether any rules apply) and then there needs to be a process for
          determining what to do.
        </p>
        <p>
          We faced decisions about all these issues of governance in our
          project: What should the rules be? How should the rules be enforced?
          And what do we do when something unexpected comes up?
        </p>
        <div className={classes.separation}>
          <Typography variant="h5">
            <b>
              <a
                href="submission-guidelines"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submission Guidelines
              </a>
            </b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                Our guidelines for dog submissions were designed to isolate the
                dogs’ aesthetics as much as possible and to minimize the
                possibility of non-aesthetic or non-dog related variables
                influencing voter judgement. Put simply, our submission
                guidelines were designed to accurately represent each dog’s
                cuteness.
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
            <b>Privacy</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                In designing our{" "}
                <a
                  href="privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                , our goal was to protect all data stored on our website and to
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
            <b>Anti-fraud measures</b>
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
                We discussed the implementation of a “captcha”, which would help
                prevent non-human voter fraud by confusing "bots" and preventing
                them from voting.
              </li>
            </ul>
          </Typography>
        </div>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Intellectual property</b>
          </Typography>
          <Typography variant="p">
            <ul>
              <li>
                Our discussion of intellectual property is discussed in our{" "}
                <a
                  href="privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                . Our goal is to treat all submitter and voter intellectual
                property with the utmost respect and ethical consideration,
                using only IP when necessary.
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
                worked to put in place a procedure that could address the
                problem in the future regardless of the scale of the project.
              </li>
              <li>
                For example, with respect to photo editing (which was not
                stipulated in our initial submission guidelines), we have since
                added a “no external photo editing” rule to distinguish between
                the “editing” a camera’s software will automatically perform,
                versus that done with an external editing application (such as
                Photoshop).
              </li>
            </ul>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Governance);
