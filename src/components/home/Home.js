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
            Welcome to The Social Choice and Democracy Group
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            style={{ textAlign: "center", paddingTop: "15px" }}
          >
            Exploring Democracy and Social Choice
          </Typography>

          <p>
            We are an undergraduate student research group in the Philosophy &
            Religion Department at Northeastern University that conducts projects
            to explore social choice and democracy. 
          </p>
          <p>
            In 2020 we are conducting a project to determine how different voting systems
            would impact the results of the election. Stay tuned for more information on 
            how to participate.
          </p>
          <p>
            In 2018-2019 we conducted a project 
            to determine who in the Department has the cutest dog, a
            topic about which there has been long-standing and passionate
            disagreement. Instead of arguing until the end of time, three
            professors decided to set their differences aside and let us try to
            answer the question in a philosophically and scientifically rigorous
            way. This was the origin of the Cute Dog Project.
          </p>
            <Grid item sm={12}>
              <Typography variant="p">
                This website details our contest, our methods, results, and the
                many lessons we've learned along the way. Please explore the
                site to learn more about our projects, see full results, and
                see what we've learned about democracy.
              </Typography>
            </Grid>
        </Paper>

        <Paper className={classes.categoriesPaper} elevation={2}>
          <p>
            If you have questions or would like more information about the group please contact us via{" "}
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
