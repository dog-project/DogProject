import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

import DrawerNav from "./DrawerNav";


const styles = {
  root: {
    flexGrow: 1,

  },
  grow: {
    flexGrow: 1,
    textDecoration: 'none',
    textAlign: 'center',
    marginLeft: -50,
  },
  menuButton: {
    marginLeft: -12,

  }
};

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
      main: "#ffffff",
    }
    // error: will use the default color
  }
});

function Navbar(props) {
  const { classes } = props;
  return (

    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <DrawerNav />
            <Typography variant="h6" color="inherit" className={classes.grow} component={Link} to="/" style={{fontFamily: "Pacifico"}}>
              The Social Choice and Democracy Group
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>

  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
