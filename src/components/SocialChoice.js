import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "30px",
      paddingRight: "50px"
    },
    [theme.breakpoints.down("sm")]: {},
    textIndent: "0em",
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
  },
  socialPic: {
    height: "auto",
    width: "100%"
  },
  doubleVid: {
    [theme.breakpoints.up("sm")]: {
      height: "415px"
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  }
});

class SocialChoice extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={12} md={6}>
            <Typography variant="p">
              <a
                href="https://plato.stanford.edu/entries/social-choice/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Social Choice Theory
              </a>{" "}
              is the study of how diverse individual preferences can be put
              together to form a single societal decision. There is no uniquely
              correct social choice{" "}
              <a
                href="https://plato.stanford.edu/entries/voting-methods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                voting method
              </a>
              . You can collect different data, or collect it in different ways.
              Even with the same data, we can have different winners depending
              on the social choice mechanism used!
            </Typography>
            <p>
              Social choice problems come up all the time. They arise whenever
              people try to aggregate preferences to make a decision. They come
              up when a group of people is trying to choose what restaurant to
              go to. They come up when an admissions committee is trying to make
              a decision about who should be admitted to a program. They come up
              in democratic practice when choosing elected officials. And they
              come up when trying to decide which dog is the cutest.
            </p>
          </Grid>

          <Grid item sm={12} md={6}>
            <img
              src={"images/misc/social-choice-1.png"}
              alt="cute1"
              className={classes.socialPic}
            />
          </Grid>
        </Grid>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Condorcet’s Jury Theorem</b>
          </Typography>
          <br />
          <Grid container spacing={24}>
            <Grid item md={6}>
              <Typography variant="p">
                <a
                  href="https://en.wikipedia.org/wiki/Condorcet%27s_jury_theorem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Condorcet’s Jury Theorem
                </a>{" "}
                Condorcet’s Jury Theorem says that when groups of people make
                independent decisions on the same choice if you take all their
                guesses together, you will get closer to the correct answer. A
                typical experiment is to ask a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Law_of_large_numbers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  large group
                </a>{" "}
                of people to guess how many jellybeans are in a jar. Any one
                person is likely to be wildly incorrect, but when you average
                everyone’s guesses, then the group as a whole is often close to
                the true answer. <br />
                <br />
              </Typography>
              <Typography variant="p">
                The Jury Theorem relies on the fact that collecting many
                independent votes will cancel out individual errors in judgement
                when we look at the overall average. Votes are not always
                independent -- sometimes the way that you vote influences the
                way that I vote -- but when they are, the more people voting the
                more reliable the result. This is related to our intuitive
                notion that higher voter participation produces more
                representative results.
                <br />
                <br />
              </Typography>
              <Typography variant="p">
                With respect to voting on cute dogs, if people’s opinions are
                indicative of true cuteness, we want to attract as many voters
                as possible to enhance the accuracy of our answer. But of
                course, as with any democratic vote, there are important
                tradeoffs between participation, privacy and security.
                <br />
                <br />
                Eric Pacuit Condorcet’s Jury Theorem:
              </Typography>
            </Grid>

            <Grid item sm={12} md={6}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HCo5ZX0G5ls"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="hello"
              />
            </Grid>
          </Grid>
        </div>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Condorcet’s Paradox</b>
          </Typography>
          <br />
          <Grid container spacing={24}>
            <Grid item sm={12}>
              <Typography variant="p">
                <a
                  href="https://plato.stanford.edu/entries/voting-methods/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Condorcet’s Paradox
                </a>{" "}
                reveals an important complexity for democratic methods. Suppose
                ⅓ of a group prefers candidate A to candidate B to candidate C.
                Suppose that another ⅓ prefers B to C to A. And, the remaining ⅓
                prefers C to A to B. Then we are in a circumstance where the
                majority prefers A to B, the majority prefers B to C, and the
                majority also prefers C to A. Just as there is no single winning
                move in rock-paper-scissors, there is no clear democratic winner
                in this scenario. This can come up regularly in democratic
                elections, and also seems to be occuring in our contest. Here is
                an example from some of our early votes:
              </Typography>
            </Grid>

            <Grid item sm={12} md={6}>
              <img
                src={"images/misc/social-choice-2.png"}
                alt="cute1"
                className={classes.socialPic}
              />
            </Grid>

            <Grid item sm={12} md={6}>
              <Typography variant="p">
                <b>Eric Pacuit on the Condorcet Paradox</b>
              </Typography>
              <br />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/EaE9ihpHEI8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="hello"
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Arrow's Impossiblity Theorem</b>
          </Typography>
          <br />
          <Grid container spacing={24}>
            <Grid item sm={12}>
              <Typography variant="p">
                Kenneth Arrow's{" "}
                <a
                  href="https://plato.stanford.edu/entries/arrows-theorem/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Impossibility Theorem
                </a>{" "}
                takes Condorcet’s Paradox and applies it broadly. Arrow lays out
                five conditions that are desirable for democracy to have and
                claims that it is impossible for all of them to be true at the
                same time. They are:
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography variant="p">
                <ol>
                  <li>
                    Everyone is free to have whatever preferences about the
                    ranking of candidates that they wish.
                    <blockquote>
                      <i>
                        In our project, a voter ought to be able to express any
                        judgement about the dogs’ cuteness they want. And, our
                        ranking method should be able to accomodate any
                        judgements submitted.
                      </i>
                    </blockquote>
                  </li>
                  <li>
                    If an option gains votes, it should not become less
                    preferred by the group.
                    <blockquote>
                      <i>
                        If you judge one dog to be cuter than another, the cuter
                        dog should not decrease in its overall ranking.
                      </i>
                    </blockquote>
                  </li>
                  <li>
                    The presence or absence of a of a third option should not
                    affect the ordering between two other unrelated options.
                    <blockquote>
                      <i>
                        For example, if a Corgi is ranked above a Poodle on the
                        basis of the votes, then this ordering (the Corgi ranks
                        above the Poodle) should not change if we were to remove
                        a German Shepard from the competition, or if we were to
                        add a Lab to the competition.
                      </i>
                    </blockquote>
                  </li>
                  <li>
                    No ranking should be imposed regardless of votes.
                    <blockquote>
                      <i>
                        Our system shouldn’t rank a Corgi above a Terrier
                        regardless of how the votes turn out simply because we
                        “know” Corgi’s are cuter.
                      </i>
                    </blockquote>
                  </li>
                  <li>
                    One person’s votes should not determine some outcome
                    regardless of everyone else’s votes.
                    <blockquote>
                      <i>
                        We should not appoint a single voter as “dog cuteness
                        tsar” and simply use their judgements alone to determine
                        a final ranking.
                      </i>
                    </blockquote>
                  </li>
                </ol>
                Because all voting systems will violate one of the options
                above, we needed to think carefully about how we design our
                voting system. The system design will determine which conditions
                are violated.
                <br />
                <br />
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item sm={12} md={6} className={classes.doubleVid}>
              <Typography variant="p">
                <b>Explanation of Arrow’s Theorem</b>
              </Typography>
              <br />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Q60ZXoXP6Hg"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="hello"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography variant="p">
                <b>Eric Pacuit on Arrow’s Theorem</b>
              </Typography>
              <br />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/BldRtik-r-o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="hello"
              />
            </Grid>
          </Grid>
        </div>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Independence of Irrelevant Alternatives</b>
          </Typography>
          <br />

          <Typography variant="p">
            The third desirable condition from above is known as “Independence
            of Irrelevant Alternatives.” This condition is particularly
            difficult to satisfy and many practical voting systems do not .
            Despite this, the condition is an important one. The presence or
            absence of a third party candidate may change the results of many US
            elections for example.The voting system our team chose violates this
            condition of Arrow’s Theorem, but only does so in certain
            circumstances.
          </Typography>
        </div>

        <div className={classes.separation}>
          <Typography variant="h4">
            <b>Our Voting System</b>
          </Typography>
          <br />
          <Typography variant="h5">
            <b>Ranked Pairs</b>
          </Typography>
          <br />
          <Grid container spacing={24}>
            <Grid item sm={12} md={6}>
              <Typography variant="p">
                We chose to use a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Ranked_pairs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ranked pair
                </a>{" "}
                method for counting the votes. This method first considers all
                head-to-head results between candidates. It then ranks each
                head-to-head result by margin of victory, treating results with
                larger margins as “more definitive”. If and when a
                ‘rock-paper-scissors’ type loop is found, the ranking system
                ignores the result with the smallest margin of victory.
                <br />
                <br />
                This method satisfies four of Arrow’s conditions, failing only
                the independence of irrelevant alternatives. And, it satisfies
                all five conditions in some respects. In particular, when there
                is a dog that wins (or loses) against every other dog, removing
                that dog does not affect the rankings of the others.This method
                also makes the input from voters very simple. All that is needed
                is a voter to say whether they like one dog over another and to
                repeat as many times as they wish. This allows for a very simple
                voting procedure that can increase participation.
                <br />
                <br />
                Furthermore, Ranked Pairs meets a number of other desirable
                conditions. It is a condorcet method, which means that if one
                dog beats all other dogs head-to-head it will be declared the
                winner. This is not necessarily true of other voting systems
                such as ranked-choice voting. It is also clone-independent,
                which means that if two dogs are very similar they will not
                “take away” each other's votes and harm one another in the
                rankings.
              </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
              <img
                src={"images/misc/social-choice-3.png"}
                alt="cute1"
                className={classes.socialPic}
              />
            </Grid>
          </Grid>

          <Typography variant="h5">
            <br />
            <br />
            <b>Comparing Ranking Systems</b>
          </Typography>
          <br />
          <Typography variant="p">
            We also implemented a number of alternative ranking systems for the
            purpose of comparison and analysis of the results. Some of these are
            described below.
            <br />
            <br />
          </Typography>
          <Typography variant="h6">
            <b>Win-Ratio</b>
          </Typography>
          <br />
          <Typography variant="p">
            This method simply ranks the dogs based on the total proportion of
            “cuter” votes the dog receives across all of the comparisons made.
            In other words, a candidate’s win-loss ratio can be derived by the
            number of votes placed in favor of a candidate plus half of the
            votes where the voter was indifferent between the two dogs being
            compared. All of this is then divided by the total number of votes
            placed against the dog.
            <br />
            <br />
            This method satisfies the same four criteria that Ranked Pairs, but
            does not satisfy other criteria such as the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Condorcet_criterion"
              target="_blank"
              rel="noopener noreferrer"
            >
              condorcet criterion
            </a>{" "}
            which holds that the in order for one dog to be considered
            preferable to all other dogs, it must clearly win in a one-on-one
            plurality vote with every other candidate.
            <br />
            <br />
          </Typography>
          <Typography variant="h6">
            <b>Win-Tie Ratio or Least-Losses Ratio</b>
          </Typography>
          <br />
          <Typography variant="p">
            This method ranks the dogs based on the fewest proportion of lost
            cuteness votes across all comparisons. Win-Tie Ratio is similar to
            the Win-Ratio method but seeks to minimize the number of unfavorable
            votes for a given candidate rather than maximize the number of
            favorable votes.
            <br />
            <br />
          </Typography>
          <Typography variant="h6">
            <b>
              <a
                href="https://en.wikipedia.org/wiki/Minimax_Condorcet_method"
                target="_blank"
                rel="noopener noreferrer"
              >
                Minimax
              </a>
            </b>
          </Typography>
          <br />
          <Typography variant="p">
            This method, also referred to as the Simpson-Kramer method, tries to
            minimize the maximum amount of loss that is observed by a given
            candidate. So when comparing two dogs that win and lose on a regular
            basis, the dog whose worst loss is by very close margin is going to
            be more highly ranked by this system than the dog that might be more
            controversial and loses by higher margins.
            <br />
            <br />
            This decision rule meets the Condorcet and Majority criteria but
            fails the Independence criterion and Condorcet loser criterion
            whereby it is possible for a dog to win even if that dog loses in a
            plurality vote against any one-on-one match up with the other dogs.
            <br />
            <br />
          </Typography>
          <Typography variant="h6">
            <b>
              <a
                href="https://en.wikipedia.org/wiki/Copeland%27s_method"
                target="_blank"
                rel="noopener noreferrer"
              >
                Copeland
              </a>
            </b>
          </Typography>
          <br />
          <Typography variant="p">
            This method ranks the dogs based on the difference between their
            pairwise wins and pairwise losses. Dogs with higher net pairwise
            wins will be ranked more favorably. This method meets the Majority
            and Concercet criteria but fails the Independence of Irrelevant
            Alternatives.
            <br />
            <br />
            Copeland also allows for strategic omission of votes whereby to make
            no decision or to claim indifference between two candidates is to
            make a decision. Furthermore, the Copeland method, like nearly every
            other method here, is susceptible to inconsistencies. Ideally, we
            would like a method of aggregating votes where if the voters were
            arbitrarily divided into groups and several elections were held, the
            Copeland winners of the subsets would be the same as the Copeland
            winner of the entire voting population. This is often referred to as
            the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Comparison_of_electoral_systems"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consistency Criterion
            </a>{" "}
            which can be upheld in some scoring systems.
            <br />
            <br />
          </Typography>
          <Typography variant="h6">
            <b>Elo</b>
          </Typography>
          <br />
          <Typography variant="p">
            <a
              href="https://en.wikipedia.org/wiki/Elo_rating_system"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Elo scoring
            </a>{" "}
            system is most well known for its usage in chess rankings. Each
            contestant is assigned a “score” upon introduction. This score is
            consistent across all candidates prior to competition and then as
            comparisons are made, scores are adjusted according to the scores of
            the winners and losers prior to the comparison. If two dogs, each
            with high scores, are compared, then the outcome of the comparison
            will not drastically affect their scores. If two dogs are compared,
            but one with a much higher score is ranked less cute than a dog with
            a much lower score, then the score of the loser will go down by a
            large amount and vice verse for the winner.
            <br />
            <br />
            In our case, it is very important to interpret a dog’s Elo score as
            a probability rather than a value. The Elo scores assigned to higher
            ranked dogs correspond to a higher probability that the dog will be
            judged as “cuter” by the next voter. This not only means that Elo
            rankings do not satisfy the Independence condition but also means
            that the sequence in which votes are collected has an effect on the
            final rankings. This makes sense in a sports context where games are
            continuously played but poses potential concerns for discrete
            elections.
            <br />
            <br />
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SocialChoice);
