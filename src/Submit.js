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
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
  radioButtons: {
    display: "inline",
    justifyContent: "center"
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

export class Submit extends Component {
  state = {
    submit_pending: false,
    email: "",
    dog_years: null,
    dog_months: null,
    dog_breed: "",
    dog_weight: null,
    pic: null,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false
  };

  sendToAPI = e => {
    const redirect = this.props;
    fetch("https://us-east1-dog-project-234515.cloudfunctions.net/submit_dog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_email: e.user_email,
        dog_age: e.dog_age,
        dog_breed: e.dog_breed,
        dog_weight: e.dog_weight,
        image: e.image,
      })
    }).then(function(response) {
      console.log(response)
      if (response.status !== 200) {
        alert('A ' + response.status + ' error occurred. Please try again or contact us at northeasterndogproject@gmail.com');
      } else {
        redirect.history.push("/thank-you");
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
    this.setState({submit_pending: true});
    var file = e.target.pic.files[0];
    this.getBase64(file).then(data => {
      this.sendToAPI({
        user_email: this.state.email,
        dog_age: this.state.dog_years * 12 + this.state.dog_months,
        dog_weight: this.state.dog_weight,
        dog_breed: this.state.dog_breed,
        image: data
      });
    });
  };

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container className={classes.wrapper}>
          <List>
            <h2>Dog Submission</h2>
            <ListItem>
              <ListItemText>
                <p>
                  We are currently accepting anonymous submissions from
                  Northeastern Philosophy & Religion Department Members who currently meet
                  one of the following qualifications:
                </p>
                <ul>
                  <li>Philosophy Department Faculty Member</li>
                  <li>Phliosophy Major, Combined Major, or Minor</li>
                  <li>PPE Major</li>
                </ul>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <p>
                  These are the rules pertaining to the photograph of your dog
                  that you are allowed to submit. Please read them carefully.
                  Any violations of these rules will automatically disqualify
                  your dog from the contest.
                </p>
                <p>
                  <ul>
                    <li>
                      Recency: Within the last two months if dog is older than 1
                      year / Within the last week if dog is under 1 year
                    </li>
                    <li>
                      Props: No props. This means no toys, costumes, or any
                      other objects in the foreground besides the dog
                    </li>
                    <li>
                      Location: Wherever you can take a picture of your dog
                      without a distracting background
                    </li>
                    <li style={{paddingLeft: "15px"}}>
                      Examples: Against a plain wall, on a plainly colored floor
                      or rug, front yard, dog park (not busy)
                    </li>
                    <li>
                      Photo Quality: Must be taken by a smartphone. No DSLR
                    </li>
                  </ul>
                  <br />
                  Your submission does not guarantee that your dog will be a
                  part of The Cute Dog Project Vote Phase. We are limiting the
                  amount of dogs in the contest as we see fit. All faculty dogs
                  will be guaranteed a spot in the voting contest and the
                  remaining spots might be chosen on a first-come-first-serve
                  basis. We reserve the right to disqualify any submissions
                  based on violation of our submission guidelines as decided
                  by our Quality Control Subcommittee. While there is no
                  disqualification appeals process, you may contact us via
                  email for questions regarding your submission status.
                </p>
              </ListItemText>
            </ListItem>
            <Divider />
            <form onSubmit={this.onSubmit.bind(this)} action="/thank-you">
              <h3>Your Information</h3>
              <ListItem className={classes.container}>
                <Input
                  id="outlined-email-input"
                  label="Northeastern Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  placeholder="Northeastern Email"
                  onChange={this.onChange}
                  required
                />
              </ListItem>
              <h3>Your Dog's Information</h3>
              <ListItem>
                <Input
                  id="outlined-age-input"
                  label="Dog Age In (Human) Years"
                  className={classes.textField}
                  type="number"
                  name="dog_years"
                  margin="normal"
                  variant="outlined"
                  placeholder="Years Old"
                  onChange={this.onChange}
                  required
                />
                <Input
                  id="outlined-age-input"
                  label="Dog Age In (Human) Months"
                  className={classes.textField}
                  type="number"
                  name="dog_months"
                  margin="normal"
                  variant="outlined"
                  placeholder="Months Old"
                  onChange={this.onChange}
                  required
                />
              </ListItem>
              <ListItem>
                <Input
                  id="outlined-breed-input"
                  label="Dog Breed"
                  className={classes.textField}
                  type="text"
                  name="dog_breed"
                  margin="normal"
                  variant="outlined"
                  placeholder="Dog Breed"
                  onChange={this.onChange}
                  required
                />
              </ListItem>
              <FormLabel style={{ textAlign: "left" }}>
                Dog's Weight Range (lbs)
              </FormLabel>
              <ListItem style={{ justifyContent: "center" }}>
                <RadioGroup
                  aria-label="Dog's Weight Range (Lbs)"
                  name="dog_weight"
                  className={classes.group}
                  onChange={this.onChange}
                  style={{ display: "inline", margin: "auto" }}
                >
                  <FormControlLabel
                    value="0"
                    control={<Radio required />}
                    label="0-12"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="13-25"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="26-50"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="51-100"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="100+"
                  />
                </RadioGroup>

                {/*<label style={{padding: "0 15px"}}>
                  <input type="radio" name="dog_weight" value="0" required />
                  0-12
                </label>
                <label style={{padding: "0 15px"}}>
                  <input type="radio" name="dog-weight" value="1" />
                  13-25
                </label>
                <label style={{padding: "0 15px"}}>
                  <input type="radio" name="dog-weight" value="2" />
                  26-50
                </label>
                <label style={{padding: "0 15px"}}>
                  <input type="radio" name="dog-weight" value="3" />
                  51-100
                </label>
                <label style={{padding: "0 15px"}}>
                  <input type="radio" name="dog-weight" value="4" />
                  100+
                </label>*/}
              </ListItem>
              <ListItem>
                <Input
                  id="outlined-file-input"
                  label="pic"
                  className={classes.textField}
                  type="file"
                  accept="image/*"
                  name="pic"
                  margin="normal"
                  variant="outlined"
                  onChange={this.onChange}
                  required
                />
              </ListItem>
              <ListItem style={{textAlign: "left", paddingLeft: "25px"}}>
                *We will display your image as a square. If you don't upload a square image, we will crop your photo into a square as we best see fit.
              </ListItem>
              <h3>User Agreements</h3>
              <ListItem style={{ display: "block" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked1}
                      onChange={this.onCheck("checked1")}
                      value="checked1"
                      required
                    />
                  }
                  label="I certify that this dog is owned by me or my direct family, or that I live with this dog"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked2}
                      onChange={this.onCheck("checked2")}
                      value="checked2"
                      required
                    />
                  }
                  label="I certify that I own the image, submitted above, of my dog, and I grant the runners of this contest the rights to redistribute this image as they see fit in perpetiuity without restricton"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked3}
                      onChange={this.onCheck("checked3")}
                      value="checked4"
                      required
                    />
                  }
                  label="I certify that I meet all the criteria for submission outlined above"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked4}
                      onChange={this.onCheck("checked4")}
                      value="checked5"
                      required
                    />
                  }
                  label="I certify that I am 18 years of age or older"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked5}
                      onChange={this.onCheck("checked5")}
                      value="checked5"
                      required
                    />
                  }
                  style={{marginRight: '3px'}}
                  label="I have read the"
                />
                <a class="MuiTypography-body2-253 MuiFormControlLabel-label-330" target="_blank" href="privacy-policy">privacy policy</a>
              </ListItem>
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

Submit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Submit));
