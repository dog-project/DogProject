import React, { Component } from "react";
import PropTypes from "prop-types";
//import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
//import MenuItem from "@material-ui/core/MenuItem";

import Grid from "@material-ui/core/Grid";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
    width: '50%'
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
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

export class Submit extends Component {
  state = {
    email: "",
    pic: null,
    picURL: ""
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push("/thank-you");
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.wrapper}>
        <List>
          <h2>Welcome to the Submission page for submitting a Dog</h2>
          <ListItem>
            <ListItemText>
              We are accepting anonymous submissions. In order to run a fair
              contest, we are only asking for a picture of the dog but it must
              abide by the following guidelines...
            </ListItemText>
          </ListItem>
          <Divider />
          <form onSubmit={this.onSubmit.bind(this)}>
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

            <Button variant="contained" type="submit" onSubmit={this.onSubmit}>
              Submit
            </Button>
          </form>
        </List>
      </Grid>
    );
  }
}

Submit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Submit));
