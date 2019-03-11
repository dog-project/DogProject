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

import ImageUpload from "./components/ImageUpload";

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
    marginRight: theme.spacing.unit
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
  },
  input: {
    display: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

export class Submit extends Component {
  state = {
    image: null
  };

  onChange = (e) => {
      console.log(e.target.pic);
      const file = e.target.pic;
      
      this.setState( {pic: file });

      console.log(this.state)
  }


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
          <ListItem className={classes.container}>

              <ImageUpload />

          </ListItem>
        </List>
      </Grid>
    );
  }
}

Submit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Submit);
