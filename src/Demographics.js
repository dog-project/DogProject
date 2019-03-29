import React, { Component } from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
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
    gender: "",
    age: "",
    neu_affiliation: "",
    education_level: "",
    location: ""
  };

  sendToAPI = e => {
    const redirect = this.props;
    fetch(
      "https://us-east1-dog-project-234515.cloudfunctions.net/submit_user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          //Demographics Info
        })
      }
    ).then(function(response) {
      console.log(response);
      if (response.status !== 200) {
        alert(
          "A " +
            response.status +
            " error occurred. Please try again or contact us at northeasterndogproject@gmail.com"
        );
      } else {
        redirect.history.push({
          pathname: "/vote",
          state: { userId: response.data.userId } //something like this
        });
      }
    });
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
    this.sendToAPI({
      user_email: this.state.email,
      dog_age: this.state.dog_years * 12 + this.state.dog_months,
      dog_weight: this.state.dog_weight,
      dog_breed: this.state.dog_breed
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container className={classes.wrapper}>
          <List>
            <h2>Demographic Information</h2>
            <ListItem>
              <ListItemText>
                Collecting some demographic information
              </ListItemText>
            </ListItem>
            <Divider />
            <form onSubmit={this.onSubmit.bind(this)} action="/thank-you">
              <h3>Gender Identity</h3>
              <ListItem className={classes.group}>
                <RadioGroup
                  aria-label="Do you currently identify as:"
                  name="gender"
                  className={classes.group}
                  onChange={this.onChange}
                >
                  <FormControlLabel
                    value="M"
                    control={<Radio required />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="F"
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
                  required
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
                    value="Y"
                    control={<Radio required />}
                    label="Yes"
                  />
                  <FormControlLabel value="N" control={<Radio />} label="No" />
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
                    value="some_high"
                    control={<Radio required />}
                    label="Some High School"
                  />
                  <FormControlLabel
                    value="high_school"
                    control={<Radio required />}
                    label="High School Diploma or Equivalent"
                  />
                  <FormControlLabel
                    value="vocation"
                    control={<Radio required />}
                    label="Vocational Training"
                  />
                  <FormControlLabel
                    value="some_college"
                    control={<Radio required />}
                    label="Some College"
                  />
                  <FormControlLabel
                    value="associate"
                    control={<Radio required />}
                    label="Associate's Degree"
                  />
                  <FormControlLabel
                    value="bachelor"
                    control={<Radio required />}
                    label="Bachelor's Degree"
                  />
                  <FormControlLabel
                    value="post_undergrad"
                    control={<Radio required />}
                    label="Post Undergraduate Education (Master's, Specialist, Doctorate"
                  />

                  <Input
                    id="outlined-gender-input"
                    className={classes.textField}
                    type="text"
                    name="education_level"
                    margin="normal"
                    variant="outlined"
                    onChange={this.onChange}
                    placeholder="Other, please specify"
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
                    value="midwest"
                    control={<Radio required />}
                    label="Midwest (Illinois, Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska, Ohio, North Dakota, South Dakota, Wisconsin)"
                  />
                  <FormControlLabel
                    value="northeast"
                    control={<Radio required />}
                    label="Northeast (Connecticut, Maine, Massachusetts, New Hampshire, New Jersey, New York, Pennsylvania, Rhode Island, Vermont)"
                  />
                  <FormControlLabel
                    value="south"
                    control={<Radio required />}
                    label="South (Arkansas, Alabama, Delaware, District of Columbia, Florida, Georgia, Kentucky, Louisiana, Maryland, Mississippi, North Carolina, Oklahoma, South Carolina, Tennessee, Texas, Virginia, West Virginia)"
                  />
                  <FormControlLabel
                    value="west"
                    control={<Radio required />}
                    label="West (Alaska, Arizona, California, Colorado, Hawaii, Idaho, Montana, Nevada, New Mexico, Oregon, Utah, Washington, Wyoming)"
                  />
                  <FormControlLabel
                    value="puerto_rico_or_similar"
                    control={<Radio required />}
                    label="Puerto Rico or other U.S. territories"
                  />

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
                Submit
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
