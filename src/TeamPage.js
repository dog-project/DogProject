import React, { Component } from "react";
import BioCard from "./BioCard";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {},
  header: {
    marginTop: "25px",
    marginBoton: "40px",
    padding: "25px",
    textAlign: "center"
  },
  grid: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "30px",
      paddingLeft: "30px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px"
    }
  }
});

const sam = {
  name: "Sam Merkovitz",
  bio: "Sam Merkovitz is a 3rd year Computer Science and Philosophy combined major. For this project, he primarily worked on front-end web development and user experience. His favorite breed of dog are Golden Doodles after getting a Golden Doodle puppy when he was in 3rd grade helped him overcome his previous fear of dogs."
};

const charlie = {
  name: "Charlie Haviland",
  bio: "Badly allergic to dogs"
};

const julian = {
  name: "Julian Zucker",
  bio:
    "Julian Zucker is a 3rd year Data Science major. He helped write the code for the server that receives and stores dog submissions and votes, as well as trying to solve the three-way tradeoffs between ensuring voter privacy, eliminating voter fraud, and encouraging voter participation. Miniature Australian Shepherds are his favorite breed of dog, after spending three months working on a farm with a mini named Sophie."
};

const danny = {};

const mike = {
  name: "Mike Nelson",
  bio: "Mike Nelson is a 4th-year combined Physics and Computer Science major who helped organize the RISE presentation and video. He also helped write the governance section of our website. Mike loves to spend his time skiing and his favorite dog breed is the fox red labrador retriever."
};

const andy = {
  name: "Andy Aronson",
  bio:
    "Andy Aronson is a 5th year Finance major focusing primarily on governance, oversight, and management aspects of the Dog Project. He helped to create the dog submission guidelines, the website’s privacy policy, and is actively involved in advertising the project. As an avid dog lover, Andy believes all dog breeds are cute, but Samoyeds are the cutest."
};

const chris = {};

const dan = {};

const jackie = {};

const keshav = {};

const mac = {
  name: "Mac d’Leeuwen",
  bio:
    "Mac d’Leeuwen is a 2nd year Computer Science and Philosophy combined major who worked in project management and metaphysics in the Dog Project. She helped compile information and write submissions for research forums and conferences. Mac is extremely fond of most dogs (except for small fluffy ones, which she thinks are objectively not cute) but her favorite breed is a husky."
};

const mikaela = {
  name: "Mikaela Gluck",
  bio:
    "Mikaela is a 2nd year philosophy major from Seattle. Her focus on the project was mainly in the metaphysics discussions, and her contributions include creating visuals for the RISE poster, writing the demographic questions for voters, and compiling the metaphysics page of the website. She firmly believes that her two Australian shepherd crosses are indisputably the cutest dogs."
};

const samHa = {};

const samHi = {};

const yifan = {};

const rory = {};

const ron = {};

const john = {};

class TeamPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.header}>
          <Typography variant="h2">Meet The Team</Typography>
        </Paper>
        <Grid container spacing={24} className={classes.grid}>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={sam.name}
              bio={sam.bio}
              image="sam-merkovitz"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={charlie.name}
              bio={charlie.bio}
              image="charlie-haviland"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={julian.name}
              bio={julian.bio}
              image="julian-zucker"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={danny.name}
              bio={danny.bio}
              image="placeholder"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={mike.name}
              bio={mike.bio}
              image="mike-nelson"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={andy.name}
              bio={andy.bio}
              image="andy-aronson"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={chris.name}
              bio={chris.bio}
              image="placeholder"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={dan.name}
              bio={dan.bio}
              image="placeholder"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={jackie.name}
              bio={jackie.bio}
              image="placeholder"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={keshav.name}
              bio={keshav.bio}
              image="placeholder"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={mac.name}
              bio={mac.bio}
              image="mac-d'leeuwen"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={mikaela.name}
              bio={mikaela.bio}
              image="mikaela-gluck"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={samHa.name}
              bio={samHa.bio}
              image="placeholder"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={samHi.name}
              bio={samHi.bio}
              image="placeholder"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard name={yifan.name} bio={yifan.bio}image="placeholder" />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={rory.name}
              bio={rory.bio}
              image="placeholder"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={ron.name}
              bio={ron.bio}
              image="placeholder"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <BioCard
              name={john.name}
              bio={john.bio}
              image="placeholder"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

TeamPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamPage);
