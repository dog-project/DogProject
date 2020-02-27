import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ViewsTable from "./ViewsTable";

const styles = theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "30px",
      paddingRight: "50px"
    },

    marginTop: "30px",
    textIndent: "0em"
  },
  header: {
    marginTop: "20px",
    marginBottom: "30px",
    textAlign: "center"
  },
  whatIs: {
    //padding: "20px"
  },
  cute1pic: {
    height: "auto",
    width: "100%"
  },

  separation: {
    display: "inline-block",
    marginTop: "30px",
    marginBottom: "30px"
  },
  separationWithborder: {
    borderLeft: "3px solid black",
    display: "inline-block",
    marginTop: "15px",
    marginBottom: "15px"
  }
});

class PhilOfCuteness extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={12} md={6}>
            <div className={classes.whatIs}>
              <Typography variant="h5">
                <b>What is cuteness?</b>
              </Typography>
              <Typography variant="p">
                “Cute” is a word that we use to describe animals, people, and
                even some objects. It is typically considered a compliment -- it
                is a good thing to be cute. But, we disagree and sometimes even
                argue over whether something is cute. What is cuteness? And,
                what does it mean to be cute? These are difficult philosophical
                questions surrounding{" "}
                <a
                  href="https://plato.stanford.edu/entries/aesthetic-judgment/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aesthetic judgements.
                </a>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <img
              src={"/images/misc/cute-1.png"}
              alt="cute1"
              className={classes.cute1pic}
            />
          </Grid>
        </Grid>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Here are four different conceptions of cuteness...</b>
          </Typography>
          <br />
          <br />
          <ViewsTable />
        </div>

        <Grid container spacing={24}>
          <Grid item sm={0} md={1} />
          <Grid item sm={12} md={11}>
            <div className={classes.separationWithborder}>
              <div style={{ paddingLeft: "8px" }}>
                <Typography variant="h5">
                  <b>Cuteness as Subjective</b>
                </Typography>
                <blockquote className={classes.blockquote}>
                  <p style={{ paddingLeft: "8px" }}>
                    "Beauty is no quality in things themselves: It exists merely
                    in the mind which contemplates them; and each mind perceives
                    a different beauty. One person may even perceive deformity,
                    where another is sensible of beauty; and every individual
                    ought to acquiesce in his own sentiment, without pretending
                    to regulate those of others."
                  </p>
                </blockquote>
                <cite style={{ float: "right" }}>– David Hume</cite>
                <br />
                <br />{" "}
                <Typography variant="p">
                  If{" "}
                  <a
                    href="https://plato.stanford.edu/entries/beauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    beauty{" "}
                  </a>
                  is in the eye of the beholder, perhaps cuteness is too. When
                  you disagree with someone about which dog is cuter, there is
                  no fact of the matter, there is just cuteness for you and
                  cuteness for them. Everyone can have their own standards
                  provided they are not incoherent. On this view, a vote on{" "}
                  cuteness will be an indication of
                  how much people’s subjective views overlap, but cannot tell us
                  which dog is cutest since cuteness is determined by everyone
                  individually.
                  <br />
                  <br />
                  While the subjective may be appealing, it has some problems.
                  Consider these cases:
                  <br />
                  <ol>
                    <li>
                      A friend of yours approaches you and lets you know that
                      the trash bag full of trash is very cute.
                    </li>
                    <li>
                      Someone tells you that the cat over there is very cute.
                      When you ask why, the tell you that they licked the cat
                      and it tastes cute.{" "}
                    </li>
                    <li>
                      You’re a doctor. A patient comes in and says that they
                      need medicine because their knee is feeling very cute.{" "}
                    </li>
                  </ol>
                  In each case it seems the person is simply making inaccurate
                  claims about cuteness. If so, cuteness cannot be merely
                  subjective. There must be some standards or rules about
                  cuteness attributions outside of their own views.
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item sm={0} md={1} />
          <Grid item sm={12} md={11}>
            <div className={classes.separationWithborder}>
              <div style={{ paddingLeft: "8px" }}>
                <Typography variant="h5">
                  <b>Intersubjective Cuteness</b>
                </Typography>
                <br />
                <Typography variant="p">
                  {" "}
                  Perhaps cuteness is not in the eye of one beholder, but many.
                  Cuteness could be intersubjective: something is “cute” if a
                  community or group regards it as cute. On this view, you can
                  be wrong about your cuteness judgements if they don’t match
                  the views of your community. Individuals can be wrong, but
                  communities cannot. Just as a{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Speech_community"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    linguistic community
                  </a>{" "}
                  cannot be wrong about what their words mean while individuals
                  in those communities may be mistaken. Determining whether a
                  dog is cute, is simply a matter of figuring out what the group
                  thinks. A vote is a reliable way to{" "}assess the opinion of a community
                  .
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item sm={0} md={1} />
          <Grid item sm={12} md={11}>
            <div className={classes.separationWithborder}>
              <div style={{ paddingLeft: "8px" }}>
                <Typography variant="h5">
                  <b>Realist (Objective) Cuteness</b>
                </Typography>
                <br />
                <Typography variant="p">
                  {" "}
                  Perhaps what makes a dog cute is what the dogs is like, not
                  what people or communities think about the dog. Being cute is
                  just like being furry, or having a long tail: it is an
                  objective feature of the dog. If a person or group regards a
                  dog as cute but that dog does not exhibit any properties of
                  cuteness, then they are simply wrong.
                  <br />
                  <br />
                </Typography>
                <Typography variant="p">
                  If cuteness is objectively real, what features determine
                  cuteness? On what properties or features of a dog, if any,
                  does it supervene? And, how can we figure out if something is
                  actually cute? To fully answer these questions we would need
                  to have a robust account of cuteness. However, there is often
                  significant agreement about cuteness and what sorts of things
                  are cute. And if people are, more often than not, accurate
                  assessing true cuteness, then we can use{" "}voting to get evidence of
                  cuteness.
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item sm={0} md={1} />
          <Grid item sm={12} md={11}>
            <div className={classes.separationWithborder}>
              <div style={{ paddingLeft: "8px" }}>
                <Typography variant="h5">
                  <b>Non-cognitive (Emotive) Cuteness</b>
                </Typography>
                <br />
                <Typography variant="p">
                  {" "}
                  A{" "}
                  <a
                    href="https://plato.stanford.edu/entries/moral-cognitivism/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    non-cognitivist account{" "}
                  </a>{" "}
                  of cuteness holds that cuteness is no more than a particular
                  response from an observer. Saying “that dog is cute” is the
                  same as simply saying “Awww!” -- it is not a declarative
                  sentence about something, it is simply an expression of an
                  attitude like “Yum!” or “Ouch!” On this view, there is no
                  right or wrong about cuteness judgements because they are not
                  “judgements” they are merely expressions of a feeling. One
                  might determine that there are facts about a dog and about
                  people that make it more or less likely to elicit an “awww”,
                  but cuteness consists of the response, not those facts. For a
                  non-cognitivist conception of cuteness, a{" "}vote on cuteness may tell us
                  something about the tendencies of certain dogs to elicit the
                  “awww” reaction from voters, but cannot determine which dog is
                  cutest as there is no fact of the matter about this.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>

        <div style={{ marginTop: "30px" }}>
          <Grid container spacing={24}>
            <Grid item sm={12} md={6}>
              <img
                src={"/images/misc/cute-2.png"}
                alt="cute2"
                className={classes.cute1pic}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <div className={classes.whatIs}>
                <Typography variant="h5">
                  <b>What is a dog?</b>
                </Typography>
                <Typography variant="p">
                  This may sound like a strange question, but think about it for
                  a minute. Is a fox a dog? What about a wolf? No? Then what
                  about a wolf-dog hybrid? It turns out that it is difficult to
                  draw the lines between species and that there may not be a
                  single correct way to do so. This is known as the{" "}
                  <a
                    href="https://plato.stanford.edu/entries/species/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    species problem.
                  </a>{" "}
                  If we hope to find the cutest dog, we need to know which
                  animals to consider, which is made difficult by the
                  complicated{" "}
                  <a
                    href="https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1004016"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    genetic and evolutionary history of dogs.
                  </a>{" "}
                </Typography>
              </div>
            </Grid>

            <Grid item sm={12} md={6}>
              <div className={classes.whatIs}>
                <Typography variant="h5">
                  <b>What are we judging?</b>
                </Typography>
                <Typography variant="p">
                  We want people to judge the cuteness of the dogs. This is
                  distinct from the cuteness of the dog photo, the cuteness of
                  the dog behavior, and the cuteness of the dog’s story. For
                  these reasons, we placed several{" "}
                  <a href="/governance">restrictions</a> on the photo
                  submissions in an attempt to have voters focus on the cuteness
                  of the dog itself.
                </Typography>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <img
                src={"/images/misc/cute-3.png"}
                alt="cute3"
                className={classes.cute1pic}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PhilOfCuteness);
