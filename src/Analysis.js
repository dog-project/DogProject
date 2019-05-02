import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ModalImage from "react-modal-image";

import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "30px",
      paddingRight: "50px"
    },
    marginBottom: "10px"
  },
  header: {
    marginTop: "25px",
    marginBoton: "40px",
    padding: "25px",
    textAlign: "center"
  },
  grid: {},
  pic: {
    height: "auto",
    width: "100%"
  },
  caption: {
    textAlign: "center"
  },
  graph: {
    height: "1500px",
    width: "255px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  mobileGraph: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down("sm")]: {
      height: "100px",
      width: "20px",
      marginLeft: "100px"
    }
  },
  mobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

export class Analysis extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.header} variant="h2">
          Results & Analysis
        </Typography>
        <Grid container spacing={24}>
          <Grid item sm={12} md={9}>
            <Grid container spacing={24}>
              <Grid item sm={12}>
                <Typography variant="p">
                  We collected votes on more than 60,000 pairs of dogs from
                  almost 1000 different voters. To determine a winner, we used
                  the Ranked Pair method, which considers how each dog compares
                  against every other and weights each pair by how big the
                  difference between the dogs is. Click{" "}
                  <a href="/philosophy">here</a> for more information on our
                  voting methods.
                  <br />
                  <br />
                  The winner was Pearl (or “Dog 57” as our{" "}
                  <a href="/meet-the-team">team</a> called her)!
                  <br />
                  <br />
                  Pearl won a very close contest, just edging out the runner up
                  Tatum, or “Leaf Dog” as she was known to our team.
                </Typography>
              </Grid>
              <Grid item sm={0} md={1} />
              <Grid item sm={12} md={4}>
                <img
                  src={"/images/dogs/57.png"}
                  className={classes.pic}
                  alt="pearl"
                />
                <Typography variant="p" className={classes.caption}>
                  Pearl, “Dog 57” -- The Contest Winner
                </Typography>
              </Grid>
              <Grid item sm={0} md={2} />
              <Grid item sm={12} md={4}>
                <img
                  src={"/images/dogs/20.png"}
                  className={classes.pic}
                  alt="tatum"
                />
                <Typography variant="p" className={classes.caption}>
                  Tatum, “Leaf Dog” -- The Runner-up
                </Typography>
              </Grid>
              <Grid item sm={0} md={1} />
              <Grid item sm={12} md={9}>
                <Typography variant="p" />
              </Grid>

              <Grid item sm={12} className={classes.desktop}>
                The graph on the side of the page summarizes the relationships
                between each of the dogs according to their pairwise
                comparisons. As the graph indicates in the form of different
                loops, there is not always a clear ordering of the dogs
                according to the judgements of voters. How these relationships
                factor into a final rakning depends on the{" "}
                <a
                  href="https://plato.stanford.edu/entries/social-choice/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  social choice method
                </a>{" "}
                used. The full rankings for our method, as well as rankings from
                other social choice methods can be found{" "}
                <a href="/rankings">here</a>.
              </Grid>
              <Grid item sm={12} className={classes.mobile}>
                The graph below (click to enlarge) summarizes the relationships
                between each of the dogs according to their pairwise
                comparisons. As the graph indicates in the form of different
                loops, there is not always a clear ordering of the dogs
                according to the judgements of voters. How these relationships
                factor into a final rakning depends on the{" "}
                <a
                  href="https://plato.stanford.edu/entries/social-choice/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  social choice method
                </a>{" "}
                used. The full rankings for our method, as well as rankings from
                other social choice methods can be found{" "}
                <a href="/rankings">here</a>.
              </Grid>
              <Grid item sm={12}>
                <ModalImage
                  small="images/misc/DogBeatGraph-1.png"
                  large="images/misc/DogBeatGraph-1.png"
                  alt="graph"
                  className={classes.mobileGraph}
                />
              </Grid>

              <Grid item sm={12}>
                So, Pearl won the contest, but is she actually cuter than the
                rest of the dogs? That’s complicated…
              </Grid>

              <Grid item sm={12}>
                <Typography variant="p">
                  <strong>Do votes really tell us about cuteness?</strong>
                  <br />
                  Do people’s opinions actually track real cuteness? Maybe not.
                  The quality of photo, whether the dog is curled up in a cute
                  pose (like Pearl), or whether it is sitting in a pile of
                  leaves (like Tatum) may have influenced votes. Those may be
                  cute pictures, but this is a cute dog contest, not a cute
                  picture contest. Of course, it is exceedingly difficult to
                  fully neutralize sources of potential bias, despite our best
                  efforts. Even then, whether or not you think votes indicate
                  true cuteness may depend on your{" "}
                  <a href="/philosophy">philosophical</a> views about
                  “cuteness.”
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Typography variant="p">
                  <strong>
                    What if we had used a different method of counting votes?
                  </strong>{" "}
                  <br />
                  Pearl was a{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Condorcet_criterion"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    condorcet winner
                  </a>{" "}
                  in our contest. This means that she would win in many
                  different voting systems, but not all. Indeed, there are some
                  ways we could have counted votes that would have picked Tatum
                  as the winner of the contest. This inconsistency arises
                  because Tatum lost fewer comparisons against all of the other
                  dogs than Pearl did. This means fewer voters would be
                  dissatisfied with Tatum as the winner when compared to Pearl
                  when we take all of the dogs into account. Selecting the
                  win-or-tie ratio method on our{" "}
                  <a href="/rankings">rankings page</a> shows that Tatum is the
                  winner on the basis of fewest lost votes.
                </Typography>
              </Grid>

              <Grid item sm={12} md={3}>
                <img
                  src={"/images/dogs/52.png"}
                  className={classes.pic}
                  alt="arya"
                />
                <Typography varaint="p" className={classes.caption}>
                  Arya
                </Typography>
              </Grid>
              <Grid item sm={12} md={9}>
                <Typography variant="p">
                  Digging a little deeper shows that things get even more
                  complicated. Consider the win-ratio ranking. This is one of
                  the simplest and most straight-forward vote counting methods,
                  ranking dogs on how many overall votes they win compared those
                  they lose. Again, Pearl is the winner and Tatum the runner-up.
                  However, if we remove some other dog from consideration such
                  as Arya (shown here) who is ranked 11th in win-ratio, {" "}<i>Tatum is
                  now the winner and Pearl the runner-up!</i>
                  <br />
                  <br />
                  The fact that on many rankings, removing a mid-ranked dog can
                  change the winner is an example of the peculiarity of many
                  voting systems and is a violation of Arrow’s{" "}
                  <a href="/philosophy">
                    Independence of Irrelevant Alternatives
                  </a>
                  . Our method (Ranked Pairs) is more resilient in this regard
                  than many others. It declares Pearl the winner regardless of
                  what other dogs we remove from consideration.
                  <br />
                  <br />
                  <i>
                    The way you count the votes can matter as much as the votes
                    themselves!
                  </i>
                </Typography>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="p">
                  <strong>
                    If two dogs were really similar, do they hurt each other in
                    the rankings?
                  </strong>
                  <br />
                  No. Because the ranked pair method uses only pairwise
                  comparison judgements, the method is “clone independent.” This
                  means that introducing a dog that is very similar to another
                  dog does not hurt that dog when compared to the others. Not
                  all voting methods are clone-independent however. And this is
                  an important thing to consider in{" "}
                  <a href="/philosophy">democracy</a> broadly. Introducing a
                  third-party candidate that is similar to one of the other
                  candidates can “split votes” and cause a different outcome in
                  an election.
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Typography variant="p">
                  <strong>Who were our voters?</strong>
                  <br />
                  We asked voters for some limited demographic information. This
                  was optional and was not required to participate in our vote.
                  A sizable majority of our voters identified as “feminine”,
                  most were college students, and most were from the Northeast
                  region of the United States. Our results perhaps could have
                  been radically different with a different voting population,
                  especially when we consider that there is significant{" "}
                  <a href="/philosophy">cultural variation</a> in what people
                  think is “cute.” One interesting fact we uncovered was that a
                  sizable number of voters (244) submitted votes that were
                  intransitive: Dog A is cuter than Dog B, Dog B cuter than Dog
                  C, and Dog C cuter than Dog A. This suggests that either
                  individuals made mistakes in their voting, or that when
                  judging “cuteness” it is difficult even for individual voters
                  to put into a linear ranking.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={0} md={3}>
            <img
              src="images/misc/DogBeatGraph-1.png"
              alt="graph"
              className={classes.graph}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Analysis.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Analysis);
