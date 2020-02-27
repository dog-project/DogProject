import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    paddingLeft: "30px",
    paddingRight: "30px",
    textIndent: "0em",
    marginTop: "30px"
  },
  header: {
    marginTop: "20px",
    marginBottom: "30px",
    textAlign: "center"
  },
  whatIs: {
    padding: "20px"
  },
  lessonsPic: {
    height: "100%",
    width: "100%"
  },
  ballot: {
    [theme.breakpoints.up("sm")]: {
      height: "415px",
      width: "350px"
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%"
    }
  },
  buttonPic: {
    [theme.breakpoints.up("sm")]: {
      height: "100%",
      width: "50%"
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%"
    }
  },

  separation: {
    display: "inline-block",
    marginTop: "30px",
    marginBottom: "30px"
  }
});

class LessonsForDemocracy extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <Grid container spacing={24}>
          <Grid item sm={12} md={6}>
            <p>
              There is a simple view about democracy that goes something like
              this, 'In a real democracy, everyone can vote, everyone's vote
              counts the same, and the winner is the person (or ballot measure)
              that gets the most votes.''
            </p>
            <p>
              In actuality, democracy is not so simple. Even if we agree that
              everyone who is eligible should be able to vote and everyone's
              votes should be considered equally there are A LOT of questions
              left to answer. Here are just a few:
            </p>
            <p>
              <ul>
                <li>Who is eligible to vote?</li>
                <li>How to we make sure that only eligible voters vote?</li>
                <li>
                  What should we do to make sure that all eligible voters can
                  vote?
                </li>
                <li>Who is eligible to be a candidate?</li>
                <li>What is the structure of the voting?</li>
                <li>What do people get to vote on?</li>
                <li>How are votes collected?</li>
                <li>How do votes translate into outcomes?</li>
              </ul>
            </p>
            <p>
              What is more, there can be several reasonable and democratic
              answers to each of these questions, and which answer we go with
              enormously impacts outcomes. Voting procedures matter, voting
              governance matters, and social choice mechanisms matter. In our
              project we had to make a lot of governance and social choice
              decisions that are analogous to the kinds of choices about
              democratic practice that societies committed to democratic voting
              have to make in their elections. Many of these decisions can be
              contentious. Here we describe the decision about governance and
              social choice that we made, and why we made them.
            </p>
          </Grid>
          <Grid item sm={12} md={6}>
            <img
              src={"/images/misc/lessons-1.jpeg"}
              alt="lessons1"
              className={classes.lessonsPic}
            />
          </Grid>

          <Grid item sm={12}>
            <Typography variant="h5">
              <b>Complexity of Voter Preferences</b>
            </Typography>
            <br />
            <Typography variant="p">
              Our results showed that there were multiple cases of intransitive
              results where dog A would get more votes than dog B, dog B would
              get more votes than dog C, and dog C would get more votes than dog
              A. This is something that may be common in democratic elections,
              but many voting procedures are not detailed enough to reveal this.
              When this occurs, how we choose to put the votes together is
              paramount.
              <br />
              <br />
              Voters themselves can also be inconsistent in their own
              judgements: choosing dog A between A and B, choosing dog B between
              dog B and C, and choosing dog C between dog A and C. This could be
              a mistake, or a result of nuanced views about the choices.
              <br />
              <br />
              Traditional elections, where individuals can only vote for a
              single candidate, do not allow voters to fully represent their
              preferences. And when we can get more information about voters
              preferences as in{" "}
              <a
                href="https://en.wikipedia.org/wiki/Ranked_voting"
                target="_blank"
                rel="noopener noreferrer"
              >
                ranked-choice voting
              </a>{" "}
              or{" "}
              <a
                href="https://en.wikipedia.org/wiki/Ranked_pairs"
                target="_blank"
                rel="noopener noreferrer"
              >
                pairwise comparisons
              </a>{" "}
              (as we used), there are a multitude of methods to compile results
              that need to be considered and carefully weighed.
              <br />
              <br />
              In a recent election,{" "}
              <a
                href="https://www.washingtonpost.com/politics/democrat-prevails-in-maine-congressional-race-that-used-ranked-choice-voting-system/2018/11/15/e8d81cae-e8ff-11e8-a939-9469f1166f9d_story.html?noredirect=on&utm_term=.6ca611712cc1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maine's 2nd congressional district
              </a>{" "}
              was the first to use ranked-choice voting in an election. In this
              race, the winning candidate would not have won using only
              first-choice voting. This shows that as the preferences collected
              get more sophisticated - in this case allowing voters to give
              preference orderings rather than just their first preference -
              outcomes can change.
            </Typography>
          </Grid>

          <Grid item sm={12} md={6}>
            <Typography variant="h5">
              <b>Ballot Design</b>
            </Typography>
            <Typography variant="p">
              The{" "}
              <a
                href="https://journals.sagepub.com/doi/abs/10.1177/1745691615588092?journalCode=ppsa"
                target="_blank"
                rel="noopener noreferrer"
              >
                position effect
              </a>{" "}
              is when the position of an option (above or below, left or right)
              relative to others has an effect on people’s choices. This effect
              is well known in psychology and we wanted to ensure that the
              position effect did not impact our voting results. To do so, we
              ensured that every pair of dogs was randomized for every voter.
              The important lesson for democracy here is that the design of a
              ballot (e.g. where a candidate appears on the ballot) can impact
              voter choice in substantial ways and should be taken into account
              in election procedures.
              <br />
              <br />
              Additionally, ballots need to be understandable and easy for
              voters to use in expressing their preferences. An overwhelming
              number of choices or poor organization of those choices on the
              page can lead to confusion, bias or make it more difficult for
              voters to express their preferences. Our project opted for
              pairwise comparisons between dogs with a simple question and a
              straightforward interface to submit votes.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <img
              src={"/images/misc/lessons-2.jpg"}
              alt="lessons2"
              className={classes.ballot}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant="h5">
              <b>Three-way tradeoff between privacy, security, participation</b>
            </Typography>
            <Typography variant="p">
              In designing the submission and voting procedures, our team has
              had to consider a three-way tradeoff between voter participation,
              information privacy, and security measures. All are desirable, but
              it is not feasible to fully achieve all three.
              <br />
              <br />
            </Typography>
            <Typography variant="h6">
              <i>Voter Participation</i>
            </Typography>
            <Typography variant="p">
              Getting reliable and representative results requires a sufficient
              number of votes. There is reason to believe that all things being
              equal{" "}
              <a
                href="https://en.wikipedia.org/wiki/Condorcet%27s_jury_theorem"
                target="_blank"
                rel="noopener noreferrer"
              >
                the more votes, the better
              </a>
              . We sought to maximize the number of votes by allowing anyone
              with internet access and the website address to vote freely. This
              raised security concerns over fraudulent votes, which had to be
              addressed in other ways.
              <ul>
                <li>
                  Real democratic elections in the US can{" "}
                  <a
                    href="https://www.pewresearch.org/fact-tank/2018/05/21/u-s-voter-turnout-trails-most-developed-countries/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    struggle
                  </a>{" "}
                  with voter participation as well. Solutions include making
                  election days{" "}
                  <a
                    href="https://www.forbes.com/sites/billwhalen/2019/02/01/should-every-election-day-be-a-holiday/#4077b7b33bf0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    holidays
                  </a>
                  , having more polling places, or even making{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Compulsory_voting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    voting
                  </a>{" "}
                  compulsory for citizens.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <img
              src={"/images/misc/lessons-3.png"}
              alt="lessons3"
              className={classes.buttonPic}
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <Typography variant="h6">
              <br />
              <i>Privacy</i>
            </Typography>
            <Typography variant="p">
              Information privacy was a primary objective. We designed both
              procedures to minimize potential concerns by limiting the amount
              of private data collected.
              <ul>
                <li>
                  Submitters were required to provide certain identifying
                  information about the dog, increasing our privacy and security
                  efforts. We expect this to lead to a lower rate of
                  participation. While there are never too few potential
                  presidential candidates there are regulatory bodies that
                  ensure that candidates reveal information that might
                  compromise their ability to perform fairly in the election
                  process. In our context, we needed an equivalent to the U.S.
                  Federal Election Commission to make sure that every submission
                  we received was going to be able to fairly compete.
                </li>
                <li>
                  Conversely, we do not collect any identifying information on
                  voters, decreasing the need for information privacy and making
                  it more difficult to detect “fraudulent” activity. Therefore,
                  we expect relatively higher voter participation rates. In the{" "}
                  <a
                    href="https://www.vox.com/policy-and-politics/2018/10/26/18024468/georgia-voter-suppression-stacey-abrams-brian-kemp-voting-rights"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2018 Georgia gubernatorial election
                  </a>
                  , this discussion of how to incentivize participation while
                  maintaining the integrity of the election was hotly debated
                  because controversial security concerns were considered
                  especially likely to discourage opposition to the incumbent.
                </li>
              </ul>
            </Typography>
          </Grid>

          <Grid item sm={12} md={6}>
            <img
              src={"/images/misc/lessons-4.png"}
              alt="lessons3"
              className={classes.buttonPic}
            />
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h6">
              <br />
              <i>Security</i>
            </Typography>
            <Typography variant="p">
              Favoring voter participation and protecting privacy raises
              security concerns over fraudulent voting. We identified various
              procedures for preventing and identifying fraud.
              <ul>
                <li>
                  During the submission process, we manually vetted each
                  submission for various forms of fraud. These included ensured
                  each submitter met our established criteria, performed
                  reverse-search for images, scrubbed photograph metadata.
                </li>
                <li>
                  We considered several procedures to prevent and detect voter
                  fraud including a captcha and the use of vote pattern
                  analytics (vote speed). A captcha is a digital verification
                  tool which presents the user with a task that would be easy
                  for a human to complete but difficult for a bot or computer
                  program to solve. We decided against implementing the captcha
                  in order to maximize participation as some voters may not
                  participate if presented with a captcha. We have the means to
                  retroactively exclude voter sets if they follow suspicious
                  patterns (e.g. each vote is inputted after exactly 0.75
                  seconds) and will take this into account as we parse through
                  the data.
                </li>
                <li>
                  This relates to difficulties in modernizing federal and state
                  voting systems. Preventing voter fraud is of the utmost
                  importance in elections. It is common to think that digital
                  transactions are more secure, traceable, and efficient as
                  compared to pen and paper transactions. In many cases,
                  however, voting on pen and paper and in-person verification
                  efforts are more effective fraud detectors and deterrents when
                  compared to their digital counterparts. We needed to consider
                  the digital tools (captcha, data analytics) for this exact
                  reason; our voting procedure was less secure because it was
                  entirely digital.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant="h5">
              <b>Governance Questions: Rules and Enforcement</b>
            </Typography>
            <Typography variant="p">
              We faced several key questions in conducting our contest, each of
              which had important parallels in real democratic elections.
              <ul>
                <li>Who is allowed to submit dogs?</li>
                <li>What information should be required with submissions?</li>
                <li>How should the contestants be presented to the voters?</li>
                <li>Who should be allowed to vote?</li>
                <li>Who should be allowed to vote?</li>
                <li>What information should we collect about our voters?</li>
              </ul>
              For more information on Governance, please check out our Ethics
              and Governance Tab.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <img
              src={"/images/misc/lessons-5.jpg"}
              alt="lessons5"
              className={classes.lessonsPic}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LessonsForDemocracy);
