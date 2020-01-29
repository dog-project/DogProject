import React, { Component } from "react";
import PropTypes from "prop-types";
//import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
//import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
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
    marginTop: '30px',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: '2px solid black',
    borderRadius: '15px',
    mozBorderRadius: '15px' 
  }
});

const stateOptions = [
    {
        value: 'Not Selected',
        label: ''
    },
    {
        value: 'MA',
        label: 'MA'
    },
    {
        value: 'NJ',
        label: 'NJ'
    },
    {
        value: 'CA',
        label: 'CA'
    },
    {
      value: 'VT',
      label: 'VT'
    }
]

const gender = [
    {
        value: 'Unanswered',
        label: ''
    },
    {
        value: 'M',
        label: 'Male'
    },
    {
        value: 'F',
        label: 'Female'
    },
    {
        value: 'Prefer not to say',
        label: 'Prefer not to say'
    }
]

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    geoState: "",
    gender: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.wrapper}>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange("name")}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <TextField
                id="outlined-name"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange("email")}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <TextField
                id="outlined-select-geoState-native"
                select
                className={classes.textField}
                value={this.state.geoState}
                onChange={this.handleChange("geoState")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your State"
                margin="normal"
                variant="outlined"
              >
                {stateOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12}>
            <TextField
                id="outlined-select-gender-native"
                select
                className={classes.textField}
                value={this.state.gender}
                onChange={this.handleChange("gender")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your Gender"
                margin="normal"
                variant="outlined"
              >
                {gender.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </form>
      </Grid>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
