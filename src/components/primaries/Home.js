import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
            Welcome to Primaries Project
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            style={{ textAlign: "center", paddingTop: "15px" }}
          >
            Using the Democratic Primaries to Explore Democracy and Social Choice
          </Typography>

          <p>
            We are an undergraduate student research group in the Philosophy &
            Religion Department at Northeastern University that conducted a
            project to determine how election systems can impact the results of the
            Democratic Presedential Primaries
          </p>
        </Paper>

        <Paper className={classes.categoriesPaper} elevation={2}>
          <p>
            If you have questions or would like more information about this project
             please contact us via{" "}
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
