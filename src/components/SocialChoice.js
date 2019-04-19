import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    paddingLeft: "30px",
    paddingRight: "30px",
    textIndent: "2em"
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

class SocialChoice extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.header}>
          Social Choice Theory
        </Typography>
        <Typography variant="h6">
          <a
            href="https://plato.stanford.edu/entries/social-choice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Social Choice Theory
          </a>{" "}
          is….
        </Typography>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Condorcet’s Jury Theorem</b>
          </Typography>
          <br />
          <Typography variant="p">
            <a
              href="https://en.wikipedia.org/wiki/Condorcet%27s_jury_theorem"
              target="_blank"
              rel="noopener noreferrer"
            >
              Condorcet’s Jury Theorem
            </a>{" "}
            says that when groups of people make independent decisions on the
            same choice if you take all their guesses together, you will get
            close to the correct answer. A typical experiment is to ask a large
            group of people to guess how many jellybeans are in a jar. Any one
            person is likely to be wildly incorrect, but when you average
            everyone’s guesses, then the group is going to be quite close to the
            actual answer. <br />
            <br />
          </Typography>
          <Typography variant="p">
            In a democracy, if there is a right answer and we think that people
            are going to guess in the right way, then the more people who vote,
            the more accurate the results will be. However, the Jury Theorem
            relies on people having fully independent results.
            <br />
            <br />
            For more information...
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=HCo5ZX0G5ls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eric Pacuit on Condorcet's Jury Theorem
                </a>{" "}
              </li>

              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Law_of_large_numbers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Law of Large Numbers
                </a>{" "}
              </li>
            </ul>
          </Typography>
        </div>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Condorcet’s Paradox</b>
          </Typography>
          <br />
          <Typography variant="p">
            <a
              href="https://plato.stanford.edu/entries/voting-methods/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Condorcet’s Paradox{" "}
            </a>{" "}
            tells us that, when a group of people chooses between three or more
            options, it’s possible for there to be no clear winner amongst the
            possibilities. If the people are wanting to prefer the options in
            just the right order, then votes will form a ‘rock-paper-scissors’
            like a loop with no one choice clearly winning. There are situations
            where no clear winner is present and the usual democratic fallback,
            voting, won’t give us an answer.
          </Typography>
        </div>
        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Arrow's Impossiblity Theorem</b>
          </Typography>
          <br />
          <Typography variant="p">
            <a
              href="https://plato.stanford.edu/entries/arrows-theorem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arrow’s Impossibility Theorem{" "}
            </a>{" "}
            takes Condorcet’s Paradox and applies it broadly. Arrow lays out
            five conditions that are desirable for democracy to have and claims
            that it is impossible for all of them to be true at the same time.
            They are:
            <ol>
              <li>
                Everyone is free to have whatever preferences about the ranking
                of candidates that they wish,
              </li>
              <li>
                If a candidate gains votes, they should not go down in the
                overall results,
              </li>
              <li>
                The addition of a new candidate should not change the ordering
                of other candidates in a race,
              </li>
              <li>One set of choices shouldn’t be imposed on voters, and</li>
              <li>
                One person shouldn’t be able to choose the outcome of the
                election regardless of everyone else’s votes
              </li>
            </ol>
            Because all voting systems will violate one of the options above, we
            needed to think carefully about how we design our voting system. The
            system design will determine which conditions are violated.
            <br />
            <br />
            For more information...
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=Q60ZXoXP6Hg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Is Democracy Impossible?
                </a>{" "}
              </li>
            </ul>
          </Typography>
        </div>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Condition 3</b>
          </Typography>
          <br />
          <Typography variant="p">
            The third desirable condition from Arrow’s Impossibility Theorem is
            formally known as the Independence of Irrelevant Alternatives.
            Summarized above, this condition is particularly difficult to avoid.
            Most voting systems violate this condition. For example, consider
            about the debate around third-party candidates in the United States.
            People are concerned because they feel that third-party candidates
            will take votes away from their candidate of choice. This is why
            condition three matters.
            <br />
            <br />
          </Typography>
          <Typography variant="p">
            The voting system our team chose violates this condition of Arrow’s
            Theorem. We felt that its impact on underlying democratic values was
            minimal when compared to the other requirements. Additionally, the
            voting system we designed satisfies a weaker version of the
            Independence of Irrelevant Alternatives. In our voting method, if
            one candidate is beating every other candidate when compared head to
            head, then a new candidate will not change the results for that
            candidate.
          </Typography>
        </div>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Voting Mechanisms</b>
          </Typography>
          <Typography variant="p">
            We chose to use a ranked pair method for counting the votes. This
            method considers all of the head to head pairs between candidates.
            It looks at which head to head results have the widest margin of
            victory and locks them into the results. When ‘rock-paper-scissors’
            like loops appear, the voting system gets rid of the branch with the
            smallest margin of victory. We chose this method because it
            satisfies 4 of Arrow’s conditions and a weaker version of the other
            condition. It also makes the input from voters very simple. All that
            is needed is a voter to say whether they like one dog over another
            and to repeat as many times as they wish. This simplicity of design
            increases the participation rates in the project.
            <br />
            <br />
            For more information...
            <ul>
              <li>
                <a
                  href="https://plato.stanford.edu/entries/voting-methods/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voting Methods
                </a>{" "}
              </li>
            </ul>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SocialChoice);
