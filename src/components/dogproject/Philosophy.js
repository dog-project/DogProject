import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import PhilOfCuteness from "./PhilOfCuteness"
import CuteAcrossCultures from "./CuteAcrossCultures"
import SocialChoice from "./SocialChoice"
import LessonsForDemocracy from "./LessonsForDemocracy";
import Governance from "./Governance";

function TabContainer(props) {
  return (
    <Typography component="div" >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {

    textIndent: "0em"
  },
  header: {
    marginTop: "20px",
    marginBottom: "30px",
    textAlign: "center"
  },
  whatIs: {
    padding: "20px"
  },
  cute1pic: {
    maxHeight: "100%",
    maxWidth: "100%"
  },

  separation: {
    display: "inline-block",
    marginTop: "30px",
    marginBottom: "30px"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    },
    alternative: {
      main: "#ffffff"
    }
    // error: will use the default color
  }
});

class Philosophy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>

        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs value={value} onChange={this.handleChange} variant="scrollable" scrollButtons="auto">
                <Tab label="What is Cuteness?" />
                <Tab label="Cuteness Across Cultures" />
                <Tab label="Social Choice Theory" />
                <Tab label="Lessons for Democracy" />
                <Tab label="Ethics and Governance" />

              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><PhilOfCuteness /></TabContainer>}
            {value === 1 && <TabContainer><CuteAcrossCultures /></TabContainer>}
            {value === 2 && <TabContainer><SocialChoice /></TabContainer>}
            {value === 3 && <TabContainer><LessonsForDemocracy /></TabContainer>}
            {value === 4 && <TabContainer><Governance /></TabContainer>}
            
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(Philosophy);
