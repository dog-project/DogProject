import React, { Component } from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
//import classNames from "classnames";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
//import MenuItem from "@material-ui/core/MenuItem";

import Grid from "@material-ui/core/Grid";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
//import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
//import TextField from "@material-ui/core/TextField";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",

    margin: "10px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    minWidth: "50%"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  wrapper: {
    marginTop: "30px",
    paddingLeft: "15px",
    paddingRight: "15px",
    border: "2px solid black",
    borderRadius: "15px",
    mozBorderRadius: "15px"
  },
  button: {
    margin: theme.spacing.unit,
    "&:hover": {
      backgroundColor: grey[900]
    }
  },
  input: {
    display: "none"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  group: {
    display: "flex"
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

export class Demographics extends Component {
  state = {
    gender: null,
    age: null,
    neu_affiliation: null,
    education_level: null,
    location: null,
    dog_ownership: null,
    redirect_to_vote: false,
    voter_id: null,
    dog1id: null,
    dog2id: null
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  proceedToVote(id) {
    this.setState({ redirect_to_vote: true, voter_id: id });
  }

  validDateData() {
    var validData = false;
    var age = parseInt(this.state.age);
    education = parseInt(this.state.education_level);

    if (age< 18) {
      alert("You must be 18 years or older to vote");
    }
    else if (age > 120) {
      alert("You are too old to vote, please alert the Guinness Book of World Records")
    }
    else {
      validData = true;
    }


    // if (this.state.neu_affiliation !== null) {
    //   if (this.state.neu_affiliation === "Current Student" && this.state.education)
    // }

    return validData;
  }

  sendToAPI = () => {
    const that = this; // I laughed out loud at this https://stackoverflow.com/questions/49684217/how-to-use-fetch-api-in-react-to-setstate
    var age = null;
    var education = null;
    var validData = this.validDateData();
    if (this.state.age !== null) {
      age = parseInt(this.state.age);

    }

    if (this.state.education_level !== null) {
      education = parseInt(this.state.education_level);
    }




    if (validData) {
      fetch(
        "https://us-east1-dog-project-234515.cloudfunctions.net/register_voter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            gender_identity: this.state.gender,
            age: age,
            education: education,
            location: this.state.location,
            dog_ownership: this.state.dog_ownership,
            northeastern_relationship: this.state.neu_affiliation
          })
        }
      ).then(function(response) {
        if (response.status !== 200) {
          alert(
            "A " +
              response.status +
              " error occurred. Please try again or contact us at northeasterndogproject@gmail.com"
          );
        }

        response.json().then(function(data) {
          that.setState({
            voter_id: data.voter_uuid,
            dog1id: data.dog1,
            dog2id: data.dog2,
            redirect_to_vote: true
          });
        });
      });
    }
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  onSubmit = e => {
    e.preventDefault();
    this.sendToAPI();
  };

  render() {
    const { classes } = this.props;
    const redirectToVote = this.state.redirect_to_vote;
    if (redirectToVote) {
      return (
        <Redirect
          to={{
            pathname: "/vote",
            state: {
              userId: this.state.voter_id,
              dog1id: this.state.dog1id,
              dog2id: this.state.dog2id
            }
          }}
        />
      );
    }
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container className={classes.wrapper}>
          <List>
            <h2>Demographic Information</h2>
            <ListItem>
              <ListItemText>
                Please feel free to provide your demographic information. We are
                trying to get an idea of our voting population. All the fields
                are optional. All information is anonymous.
              </ListItemText>
            </ListItem>
            <Divider />
            <form onSubmit={this.onSubmit.bind(this)}>
              <h3>Gender Identity</h3>
              <ListItem className={classes.group}>
                <RadioGroup
                  aria-label="Do you currently identify as:"
                  name="gender"
                  className={classes.group}
                  onChange={this.onChange}
                >
                  <FormControlLabel
                    value="Masculine"
                    control={<Radio /*required*/ />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Feminine"
                    control={<Radio />}
                    label="Female"
                  />

                  <Input
                    id="outlined-gender-input"
                    className={classes.textField}
                    type="text"
                    name="gender"
                    margin="normal"
                    variant="outlined"
                    onChange={this.onChange}
                    placeholder="Other, please specify"
                  />
                </RadioGroup>
              </ListItem>
              <h3>Your age</h3>
              <ListItem>
                <Input
                  id="outlined-age-input"
                  placeholder="How old are you as of today?"
                  className={classes.textField}
                  type="number"
                  name="age"
                  margin="normal"
                  variant="outlined"
                  onChange={this.onChange}
                  // required
                />
              </ListItem>
              <h3>Northeastern Affiliation</h3>
              <h4>
                Are you affiliated with Northeastern as either a student or
                faculty member?
              </h4>
              <ListItem>
                <FormLabel />
                <RadioGroup
                  aria-label="Are you affiliated with Northeastern as either a student or faculty member?"
                  name="neu_affiliation"
                  className={classes.group}
                  onChange={this.onChange}
                >
                  <FormControlLabel
                    value="No"
                    control={<Radio /*required*/ />}
                    label="No"
                  />
                  <FormControlLabel
                    value="Current Student"
                    control={<Radio />}
                    label="Current Student"
                  />
                  <FormControlLabel
                    value="Alumni"
                    control={<Radio />}
                    label="Alumni"
                  />
                  <FormControlLabel
                    value="Faculty"
                    control={<Radio />}
                    label="Faculty"
                  />
                  <FormControlLabel
                    value="Staff"
                    control={<Radio />}
                    label="Staff"
                  />
                </RadioGroup>
              </ListItem>
              <h3>Education Level</h3>
              <h4>What is your current education level?</h4>
              <ListItem>
                <FormLabel />
                <RadioGroup
                  aria-label="Current Education Level"
                  name="education_level"
                  className={classes.group}
                  onChange={this.onChange}
                >
                  <FormControlLabel
                    value="0"
                    control={<Radio /*required*/ />}
                    label="No High School"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Some High School"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="High School Diploma or Equivalent"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Vocational Training"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Some College"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="Associate's Degree"
                  />
                  <FormControlLabel
                    value="6"
                    control={<Radio />}
                    label="Bachelor's Degree"
                  />
                  <FormControlLabel
                    value="7"
                    control={<Radio />}
                    label="Post Undergraduate Education (Master's, Specialist, Doctorate)"
                  />
                </RadioGroup>
              </ListItem>

              <h3>Location</h3>
              <h4>Where do you call home?</h4>

              <ListItem>
                <RadioGroup
                  aria-label="Home"
                  name="location"
                  className={classes.group}
                  onChange={this.onChange}
                >
                  <FormControlLabel
                    value="Midwest"
                    control={<Radio /*required*/ />}
                    label="Midwest (Illinois, Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska, Ohio, North Dakota, South Dakota, Wisconsin)"
                  />
                  <br />
                  <FormControlLabel
                    value="Northeast"
                    control={<Radio />}
                    label="Northeast (Connecticut, Maine, Massachusetts, New Hampshire, New Jersey, New York, Pennsylvania, Rhode Island, Vermont)"
                  />
                  <br />
                  <FormControlLabel
                    value="South"
                    control={<Radio />}
                    label="South (Arkansas, Alabama, Delaware, District of Columbia, Florida, Georgia, Kentucky, Louisiana, Maryland, Mississippi, North Carolina, Oklahoma, South Carolina, Tennessee, Texas, Virginia, West Virginia)"
                  />
                  <br />
                  <FormControlLabel
                    value="West"
                    control={<Radio />}
                    label="West (Alaska, Arizona, California, Colorado, Hawaii, Idaho, Montana, Nevada, New Mexico, Oregon, Utah, Washington, Wyoming)"
                  />
                  <br />
                  <FormControlLabel
                    value="Puerto Rico Or Similar"
                    control={<Radio />}
                    label="Puerto Rico or other U.S. territories"
                  />
                  <br />

                  <Input
                    id="outlined-gender-input"
                    className={classes.textField}
                    type="text"
                    name="location"
                    margin="normal"
                    variant="outlined"
                    onChange={this.onChange}
                    placeholder="Other, please specify"
                  />
                </RadioGroup>
              </ListItem>
              <ListItem />
              <Button
                variant="contained"
                type="submit"
                onSubmit={this.onSubmit}
                color="primary"
                className={classes.button}
              >
                Continue
              </Button>
            </form>
          </List>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

Demographics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Demographics));
