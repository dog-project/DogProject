import React, { Component } from "react";
import PropTypes from "prop-types";
//import classNames from "classnames";
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//import MenuItem from "@material-ui/core/MenuItem";

import Grid from "@material-ui/core/Grid";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
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
    '&:hover' : {
      backgroundColor: grey[900],
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
    email: "",
    dog_age: "",
    dog_breed: "",
    dog_weight: null,
    pic: null,
    picURL: "",
    checked1: false,
    checked2: false,
    checked3: false
  };

  uploadImage = e => {
    //upload the image to the database and get its ID in return to be sent with the save request
  };

  sendToAPI = () => {
    //send the data to the API and emsure 200 response
    alert("not implemented yet: save in database");
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
    console.log(this.state);
    this.sendToAPI();
  };

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
                  Northeastern Philosophy Department Members who currently meet
                  one of the following qualifications:
                </p>
                <ul>
                  <li>Philosophy Department Faculty Member</li>
                  <li>Phliosophy Combined Major</li>
                  <li>PPE Major</li>
                </ul>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <p>*Some other details about the contest*</p>
              </ListItemText>
            </ListItem>
            <Divider />
            <form onSubmit={this.onSubmit.bind(this)}>
              <h3>Your Information</h3>
              <ListItem className={classes.container}>
                <Input
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
              </ListItem>
              <h3>Your Dog's Information</h3>
              <ListItem>
                <Input
                  id="outlined-age-input"
                  label="Dog Age (In Human Years)"
                  className={classes.textField}
                  type="text"
                  name="dogAge"
                  margin="normal"
                  variant="outlined"
                  placeholder="Dog Age (In Human Years)"
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
                  name="dogBreed"
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
                {/* <RadioGroup
                aria-label="Dog's Weight Range (Lbs)"
                name="dogWeight"
                className={classes.group}
                onChange={this.onChange}
                style={{display: 'inline', margin: 'auto'}}
             >
                <FormControlLabel
                  value="12"
                  control={<Radio />}
                  label="0-12"
                  required
                  
                />
                <FormControlLabel
                  value="25"
                  control={<Radio />}
                  label="13-25"
                  
                />
                <FormControlLabel
                  value="50"
                  control={<Radio />}
                  label="26-50"
                  
                />
                <FormControlLabel
                  value="100"
                  control={<Radio />}
                  label="51-100"
                  
                />
                <FormControlLabel
                  value="100plus"
                  control={<Radio />}
                  label="100+"
                  
                />
              </RadioGroup> */}

                <label>
                  <input type="radio" name="dog-weight" value="0-12" required />
                  0-12
                </label>
                <label>
                  <input type="radio" name="dog-weight" value="13-25" />
                  13-25
                </label>
                <label>
                  <input type="radio" name="dog-weight" value="26-50" />
                  26-25
                </label>
                <label>
                  <input type="radio" name="dog-weight" value="51-100" />
                  51-100
                </label>
                <label>
                  <input type="radio" name="dog-weight" value="100+" />
                  100+
                </label>
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
                  label="I certify that this dog is owned by me or my direct family, or that  live with this dog"
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
                  label="I certify that I own the image, submitted above, of my dog, and I grant Northeastern University the rights to redistribute this image as they see fit"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked3}
                      onChange={this.onCheck("checked3")}
                      value="checked3"
                      required
                    />
                  }
                  label="I certify that this image was taken recently and accurately reflects the current appearence of my dog"
                />
              </ListItem>
              <Button
                variant="contained"
                type="submit"
                onSubmit={this.onSubmit}
                color="primary"
                className={ classes.button }
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
