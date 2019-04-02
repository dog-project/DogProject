import React, { Component } from "react";
import BioCard from "./BioCard";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "10px",
    textAlign: "center"
  },
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
  bio:
    "Sam Merkovitz is a 3rd year Computer Science and Philosophy combined major. For this project, he primarily worked on front-end web development and user experience. His favorite breed of dog are Golden Doodles after getting a Golden Doodle puppy when he was in 3rd grade helped him overcome his previous fear of dogs."
};

const charlie = {
  name: "Charlie Haviland",
  bio:
    "Charlie is a 5th year Computer Science & Finance Combined Major and Ethics Minor primarily involved with designing and implementing the front-end of this website, as well as solving broader issues that arise in any voting process. Despite his love for dogs he was born badly allergic to all dogs (even hypo-allergenic ones) and hopes to someday grow out of his allergy and own a dog."
};

const julian = {
  name: "Julian Zucker",
  bio:
    "Julian Zucker is a 3rd year Data Science major. He helped write the code for the server that receives and stores dog submissions and votes, as well as trying to solve the three-way tradeoffs between ensuring voter privacy, eliminating voter fraud, and encouraging voter participation. Miniature Australian Shepherds are his favorite breed of dog, after spending three months working on a farm with a mini named Sophie."
};

const danny = {
  name: "Daniel Rassaby",
  bio: "I’m Daniel Rassaby, a current third year Computer Science student. I’m also getting minors in math and ethics. I joined the dog project so I can combine a lot of the things I love, from writing some of the backend code for this website to discussions of mathematical representation of preferences to philosophical reasoning about meaning and categorization. Outside of the dog project, I can often be found listening to podcasts, traveling, and trying new foods.  I  don’t have a favorite dog breed, but I usually like big dogs the most. Feel free to check out my website if you want to know more about me: https://danielrassaby.com."
};

const mike = {
  name: "Mike Nelson",
  bio:
    "Mike Nelson is a 4th-year combined Physics and Computer Science major who helped organize the RISE presentation and video. He also helped write the governance section of our website. Mike loves to spend his time skiing and his favorite dog breed is the fox red labrador retriever."
};

const andy = {
  name: "Andy Aronson",
  bio:
    "Andy Aronson is a 5th year Finance major focusing primarily on governance, oversight, and management aspects of the Dog Project. He helped to create the dog submission guidelines, the website’s privacy policy, and is actively involved in advertising the project. As an avid dog lover, Andy believes all dog breeds are cute, but Samoyeds are the cutest."
};

const chris = {
  name: "Christopher Osborne",
  bio:
    "Christopher is a fourth-year Philosophy and Environmental Studies Combined Major. He will be graduating in August of 2019. His primary interests in Philosophy include environmental ethics and transcendental metaphysics. His favorite dog breed is the Alaskan Malamute."
};

const dan = {};

const jackie = {
  name: "Jackson Reimer",
  bio:
    "Jackson Reimer is a 4th year Politics, Philosophy and Economics major. As teaching assistant for the Cute Dog Project, he has been primarily involved in project management tasks ensuring that different teams are communicating with one another and working towards aligned goals. This has included matching people to assignments that leverage their unique skill set and ensuring that each member of the team is aware of each other’s contributions. Jackson owns a 10 year old mini-golden doodle puppy named Chester who’s loving zeal and polite demeanor leave him second to none in the city of Los Angeles."
};

const keshav = {
  name: "Keshav Sharma",
  bio:
    "Keshav Sharma is a 3rd year Politics, Philosophy and Economics major  with a concentration in Logic and Game Theory from New Delhi, India. For the dog project, he mostly worked on governance related issues like writing the rules and regulations of the contest, and passionately opposing Elo counts as a method of vote aggregation. His favorite dogs is Huskies, although if he were to buy a dog he’d choose a German Shepherd first, which are a close second favorite."
};

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

const samHa = {
  name: "Sam Haas",
  bio:
    "Sam Haas is a senior in the Philosophy, Political Science, and Economics program with minors in ethics and data science. He has previously worked on research projects involving artificial intelligence and data ethics, poverty alleviation, and housing policy. He doesn’t have a dog, but adopting a Golden Retriever is on his post-graduation to-do list."
};

const yifan = {
  name: "Yifan Wang",
  bio: `Yifan Wang is a 5th year philosophy major. His roles focus on educating people about what is a dog and why it's cute (because it's a hard question) as well as critical theory about how different languages and culture affect people’s concept of cuteness. He insists that it would be metaphysically "healthier" for the whole project if we were to include a cat, a cartoon dog and a human wearing a dog costume in the voting pool.`
};

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
        <Grid container spacing={24} className={ classes.grid }>
        <Grid item s={6} md={3}>
          <BioCard name={andy.name} bio={andy.bio} image="andy-aronson" />
        </Grid>

        <Grid item s={6} md={3}>
          <BioCard
            name={charlie.name}
            bio={charlie.bio}
            image="charlie-haviland"
          />
        </Grid>
        <Grid item s={6} md={3}>
          <BioCard name={chris.name} bio={chris.bio} image="chris-osborne" />
        </Grid>
        <Grid item s={6} md={3}>
          <BioCard name={dan.name} bio={dan.bio} image="placeholder" />
        </Grid>

        <Grid item s={6} md={3}>
          <BioCard name={danny.name} bio={danny.bio} image="danny-rassaby" />
        </Grid>

        <Grid item s={6} md={3}>
          <BioCard name={jackie.name} bio={jackie.bio} image="jackie-reimer" />
        </Grid>
        <Grid item s={6} md={3}>
          <BioCard name={julian.name} bio={julian.bio} image="julian-zucker" />
        </Grid>
        <Grid item s={6} md={3}>
          <BioCard name={keshav.name} bio={keshav.bio} image="keshav-sharma" />
        </Grid>
        <Grid item s={6} md={3}>
          <BioCard name={mac.name} bio={mac.bio} image="mac-d'leeuwen" />
        </Grid>
        <Grid item s={6} md={3}>
          <BioCard
            name={mikaela.name}
            bio={mikaela.bio}
            image="mikaela-gluck"
          />
        </Grid>
        <Grid item s={6} md={3}>
          <BioCard name={mike.name} bio={mike.bio} image="mike-nelson" />
        </Grid>
        <Grid item s={6} md={3}>
          <BioCard name={samHa.name} bio={samHa.bio} image="sam-haas" />
        </Grid>
          <Grid item s={6} md={3}>
            <BioCard name={sam.name} bio={sam.bio} image="sam-merkovitz" />
          </Grid>

          <Grid item s={6} md={3}>
            <BioCard name={yifan.name} bio={yifan.bio} image="yifan-wang" />
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.root}>
              <Typography variant="h6">
                This research was supervised by Rory Smead, Associate Professor
                of Philosophy and Rossetti Professor for the Humanities, and
                funded by the Rossetti Family Program for the Advancement of
                Humanities.
              </Typography>
            </Paper>
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
