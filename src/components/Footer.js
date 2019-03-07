import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from 'react-router-dom';



const styles = {
  root: {
    width: 500
  }
};

class Footer extends React.Component {
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
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
        style = {footerStyle}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/"/>
        <BottomNavigationAction label="About" icon={<InfoIcon />} component={Link} to="/about"/>

      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

const footerStyle = {
  position: "absolute",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%",
  overflow: "hidden"
};

export default withStyles(styles)(Footer);
