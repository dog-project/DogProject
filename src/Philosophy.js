import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
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
class Philosophy extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange} variant="scrollable" scrollButtons="auto">
              <Tab label="Metaphysics" />
              <Tab label="Governance" />
              <Tab label="Social Choice" />
              {/* <Tab label="stuff" />
              <Tab label="other" />
              <Tab label="b Choice" /> */}
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Metaphysics</TabContainer>}
          {value === 1 && <TabContainer>Governance</TabContainer>}
          {value === 2 && <TabContainer>Social Choice</TabContainer>}
          {/* {value === 3 && <TabContainer>Metaphysics</TabContainer>}
          {value === 4 && <TabContainer>Governance</TabContainer>}
          {value === 5 && <TabContainer>Social Choice</TabContainer>} */}
        </div>
      </MuiThemeProvider>
    );
  }
}

Philosophy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Philosophy);
