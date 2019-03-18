import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%",

    display: "inline-block"
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    flexBasis: "50%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  responsiveImg: {
    width: "100%",
    height: "auto"
  }
});

class AboutCategories extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Opportunity</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              How should we choose one candidate among widespread disagreement
              about who is the best?
              <br />
              <br />
              And similary, how should we choose the cutest dog among widespread
              disagreement about which is the cutest? <br />
              <br />
              <img
                src={require("../dogpics/votes.png")}
                alt="Get to One"
                className={classes.responsiveImg}
              />
              Our work in appropriately aggregating voting preferences and our
              voters' conceptions of cuteness help provide insight into how we
              should be handling our votes in the real world. In order to
              discover which dog is the cutest, we had to consider just exactly
              what cuteness is (as discussed above), how we would take votes,
              and what the outcome would even signify.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Approach (Social Choice Theory)
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              When voting on 3 or more alternatives, such as deciding which dog
              is the cutest or during party primaries, there are potential
              problems that can arise. One such problem is Condorcet's Jury
              Paradox. In a situation of 3 judges and 3 alternatives, we can run
              into situations such that no alternative is the outright winner,
              and even worse, our aggregates of the votes are inconsistent with
              each other. In the below example, according to the aggregate of
              the voters' preferences, the group prefers A > B > C > A.
              <img
                src={require("../dogpics/condorcetparadox.png")}
                alt="Condorcet's Paradox"
                className={classes.responsiveImg}
              />
              This can be seen as we have two judges who prefer A to B, two
              judges who prefer B to C, and two judges who prefer C to A. It's
              irrational for us to prefer A to C but also prefer C to A. This is
              where Arrow's Impossiblity Theorem comes in.
              <br />
              <br />
              Arrow's Impossiblity Theorem states that any social choice
              function over 3 or more alternatives must satisfy these 5
              conditions in order to be considered a rational function.
              <ol>
                <li>The social choice function must not be imposed</li>
                <ul>
                  <li>
                    Any order of preferences should be achievable by the
                    collection of votes, the function cannot limit what outcomes
                    are available.
                  </li>
                </ul>
                <li>The social choice function must not be dictatorial</li>
                <ul>
                  <li>
                    The function must account for the preferences of multiple
                    voters, it cannot mimic the preferences of one single voter.
                  </li>
                  <li>
                    If 5 voters prefer A to B to C and one voter prefers C to A
                    to B. It cannot be so that the function prefers C to A.
                  </li>
                </ul>
                <li>
                  The social choice function must be independent of irrelevant
                  alternatives
                </li>
                <ul>
                  <li>
                    For example, the function's preference between A and B is
                    only based on the voters' preferences between A and B. The
                    introduction of choice C cannot have an effect on the
                    preference order of A and B.{" "}
                  </li>
                </ul>
                <li>
                  The social choice function must have a postive association
                  between individual votes and the outcome
                </li>
                <ul>
                  <li>
                    If an individual voter chooses to modify their preferences
                    by moving an alternative higher in their preference order,
                    then the function can only change by promoting that choice
                    higher in its preference order or by not changing at all.{" "}
                  </li>
                  <li>
                    {" "}
                    If an individual changes an alternative to be ranked higher
                    in their preference order the function cannot respond by
                    ranking that alternative lower than beforet the
                    modification.
                  </li>
                </ul>
                <li>
                  The social choice function must have an unrestricted domain
                </li>
                <ul>
                  <li>
                    The function must result in a complete ranking of the
                    society's preferences.
                  </li>
                  <li>
                    The function must deterministically output the same order if
                    the same voter preferences are submitted.
                  </li>
                </ul>
              </ol>
              Arrow's Impossiblity Theorem's conclusion stays close to its name.
              There is no such way to construct a social choice function that
              satisfies all 5 of the above requirements, hence the term
              "Impossibility". However, there are some voting methods, such as
              Ranked Pairs, that allow us to get very close to meeting all 5
              criteria. And further, we also learn through Condorcet's Jury
              Paradox, that as the voting pool get's larger, we get closer to
              satisfying the true preferences of the group.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Results</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Why did we decide on Ranked Pairs as our voting method?
              <br />
              <ul>
                <li>
                  We first collect votes on each pair of dogs asking: which dog
                  is cuter?
                </li>
                <li>
                  Pairs with larger margins are “ranked” higher and given more
                  weight in establishing the overall rankings.
                </li>
                <li>
                  If one dog is judged cuter than all other dogs, this method
                  guarantees that dog will win the contest.
                </li>
                <li>
                  We will also implement other methods for aggregating pairwise
                  voting (including generating ELO rankings) to determine how
                  different methods may affect results.
                </li>
              </ul>
              Who can submit dogs? What are our regulations?
              <ul>
                <li>
                  Acceptable submissions were photographs of dogs submitted by
                  faculty, staff, or students associated with the Philosophy and
                  Religion department. Submissions must be from someone who owns
                  the dog and rights to photo must be surrendered.
                </li>
                <li>
                  Criteria for photo quality, type, and recency were established
                  to reduce unfair advantages or introduction of bias in
                  judgements.
                </li>
              </ul>
              Who can vote and what do we know about the voters?
              <ul>
                <li>
                  No restriction on voter population, although we do collect
                  some optional demographic information including age, dog
                  ownership, gender identity, geographic region and Northeastern
                  affiliation. We also implement some safeguards against voter
                  fraud.{" "}
                </li>
              </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Impact</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              What did we learn from this and what do we expect to learn from
              this?
              <br />
              Significance of a Vote
              <ul>
                <li>
                  It depends on your background theory.
                  <li>
                    If cuteness is objective, a vote can be evidence about
                    cuteness itself.{" "}
                  </li>
                </li>
                <li>
                  If cuteness is emotive, then a vote measures the tendency of
                  our voting population to say go “aww!”
                </li>
              </ul>
              Lessons for Democratic Principles
              <ul>
                <li>
                  Voting is not always a straight-forward and unproblematic
                  process (e.g. Condorcet’s Paradox).
                </li>
                <li>There may be no universally “best” voting method</li>
              </ul>
              Lessons for Democratic Practice
              <ul>
                <li>
                  There is a three-way tradeoff between combating fraud,
                  protecting voter privacy and increasing voter participation.
                </li>
                <li>
                  The broader the field of options/candidates, the more
                  difficult it is to establish a sound voting method (especially
                  one with all three features) and the more significant the
                  method becomes.
                </li>
              </ul>
              <img
                src={require("../dogpics/2016ElectionMap.jpg")}
                alt="2016 Election Map"
                className={classes.responsiveImg}
              />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

AboutCategories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutCategories);
