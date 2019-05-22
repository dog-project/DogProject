import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

function Home(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.div}>
        <Paper className={classes.root} elevation={6} color="secondary">
          <img
            src={"/images/husky.jpg"}
            className={classes.husky}
            alt={"NU Husky"}
          />
          <Typography
            variant="h3"
            color="primary"
            style={{ textAlign: "center" }}
            className={classes.logo}
          >
            Welcome to The Cute Dog Project
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            style={{ textAlign: "center", paddingTop: "15px" }}
          >
            Using Cute Dogs to Explore Democracy and Social Choice
          </Typography>

          <p>
            We are an undergraduate student research group in the Philosophy &
            Religion Department at Northeastern University that conducted a
            project to determine who in the Department has the cutest dog, a
            topic about which there has been long-standing and passionate
            disagreement. Instead of arguing until the end of time, three
            professors decided to set their differences aside and let us try to
            answer the question in a philosophically and scientifically rigorous
            way. This was the origin of the Cute Dog Project.
          </p>
          <p>
            One reputable method of settling disputes in judgement is to vote.
            We decided to run a vote to settle whose dog is cutest in the
            Philosophy & Religion Department (students, faculty and staff) at
            Northeastern. However, answering the deceptively simple question of
            "Who has the cutest dog?" actually requires answers to several other
            difficult questions in the areas of democracy, ethics, and social
            choice, such as:
          </p>
          <ul>
            <li>
              How can democratic processes be used fairly to resolve disputes?
            </li>
            <li>What would our voting procedure be?</li>
            <li>
              How do we balance user accessibility, voter anonymity, and
              security in an online voting system?
            </li>
            <li>
              How do we define cuteness, and what voting mechanisms work to
              identify that definition?
            </li>
            <li>
              Who would be allowed to submit photos and who would be allowed to
              vote?
            </li>
            <li>
              How does this question help us uncover answers about generalized
              social choice theories and voting procedures?
            </li>
            <li>
              How do we control for possible social and cultural biases in a way
              that allows us to accurately represent people’s true preferences?
            </li>
            <li>
              How do we collect and manage voting data in ways that are secure,
              ethical, and respect the privacy of the voters?
            </li>
          </ul>
          <Grid container spacing={24}>
            <Grid item sm={12} md={6}>
              <p>
                Determining whose dog is the cutest required us to design a
                system informed by democratic theory, social choice theory,
                information ethics, value theory, critical theory, and
                philosophy of science. We had to grapple with the same sorts of
                issues that arise in democratic practice and social
                decision-making in other contexts – for example, selecting a
                presidential candidate from a crowded primary field or selecting
                applicants for admission to a competitive university.
              </p>
              <p>
                Voting was open from April 3 to April 22, where almost 60,000
                votes were submitted by almost 1,000 unique voters. After the
                contest, we used a social choice method called Ranked Pairs to
                identify the winner. The winner of the contest was Pearl!
              </p>
            </Grid>
            <Grid sm={12} md={6}>
              <img
                src="images/dogs/57.png"
                className={classes.winner}
                alt="winner"
              />
              <Typography variant="p" style={{ textAlign: "center" }}>
                The Winner, Pearl
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography variant="p">
                This website details our contest, our methods, results, and the
                many lessons we've learned along the way. Please explore the
                site to learn more about or project, see the full results, and
                see what cute dogs can teach us about democracy.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.categoriesPaper} elevation={2}>
          <p>
            If you have questions or would like more information about the Cute
            Dog Project please contact us via{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:northeasterndogproject@gmail.com"
            >
              email
            </a>
          </p>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "30px"
  },
  div: {
    paddingTop: "30px"
  },
  header: {
    textAlign: "center",
    marginBottom: "20px"
  },
  paragraph: {
    textAlign: "center"
  },
  categoriesPaper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center"
  },
  button: {
    marginTop: "20px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: grey[900]
    }
  },
  husky: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "41%",
      maxHeight: "200px",
      maxWidth: "200px"
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10px",
      paddingLeft: "32%",
      maxHeight: "100px",
      maxWidth: "100px"
    }
  },
  logo: {
    fontFamily: "Pacifico"
  },
  winner: {
    [theme.breakpoints.up("sm")]: {
      maxHeight: "200px",
      maxWidth: "200px",
      paddingLeft: "36%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10px",
      paddingLeft: "40%",
      maxHeight: "150px",
      maxWidth: "150px"
    }
  }
});

const theme = createMuiTheme({
  palette: {
    primary: red
  },
  typography: {
    useNextVariants: true
  }
});

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
