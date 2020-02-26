import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import PetsIcon from "@material-ui/icons/Pets";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import AssignmentIcon from "@material-ui/icons/Assignment";
import VpnLockIcon from "@material-ui/icons/VpnLock";
import AssessmentIcon from "@material-ui/icons/Assessment";
// import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = {
  list: {
    width: 250
  },
  colorAlternative: {
    color: "#ffffff"
  },
  item: {
    "&:hover": {
      backgroundColor: "#bdbdbd"
    }
  },
  text: {},
  nested: {
    paddingLeft: "32px"
  }
};

class DrawerNav extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    openDog: false,
    openPrimaries: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleDogClick = () => {
    this.setState({ openDog: !this.state.openDog });
  };

  handlePrimariesClick = () => {
    this.setState({ openPrimaries: !this.state.openPrimaries });
  };

  render() {
    const { classes } = this.props;

    const primaries = (
      <Collapse in={this.state.openPrimaries} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            component={Link}
            to="/primaries/"
            className={classes.nested}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.text} />
          </ListItem>
          <ListItem
            component={Link}
            to="/primaries/vote"
            className={classes.nested}
          >
            <ListItemIcon>
              <HowToVoteIcon />
            </ListItemIcon>
            <ListItemText primary="Vote" />
          </ListItem>
          <ListItem
            component={Link}
            to="/primaries/privacy-policy"
            className={classes.nested}
          >
            <ListItemIcon>
              <VpnLockIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
          </ListItem>
        </List>
      </Collapse>
    );

    const dogProject = (
      <Collapse in={this.state.openDog} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            component={Link}
            to="/dogproject/"
            className={classes.nested}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.text} />
          </ListItem>
          {/* <ListItem
            component={Link}
            to="/demographics"
            className={classes.item}
          >
            <ListItemIcon>
              <HowToVoteIcon />
            </ListItemIcon>
            <ListItemText primary="Vote" />
          </ListItem> */}
          <ListItem
            component={Link}
            to="/dogproject/meet-the-team"
            className={classes.nested}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Meet The Team" />
          </ListItem>
          <ListItem
            component={Link}
            to="/dogproject/rankings"
            className={classes.nested}
          >
            <ListItemIcon>
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText primary="Rankings" />
          </ListItem>
          <ListItem
            component={Link}
            to="/dogproject/results"
            className={classes.nested}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Voting Data" />
          </ListItem>
          <ListItem
            component={Link}
            to="/dogproject/results-and-analysis"
            className={classes.nested}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Results & Analysis" />
          </ListItem>
          <ListItem
            component={Link}
            to="/dogproject/philosophy"
            className={classes.nested}
          >
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Lessons From The Project" />
          </ListItem>
          <ListItem
            component={Link}
            to="/dogproject/privacy-policy"
            className={classes.nested}
          >
            <ListItemIcon>
              <VpnLockIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
          </ListItem>
        </List>
      </Collapse>
    );

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem component={Link} to="/" className={classes.item}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.text} />
          </ListItem>
          <ListItem button onClick={this.handlePrimariesClick}>
            <ListItemIcon>
              <HowToVoteIcon />
            </ListItemIcon>
            <ListItemText primary="Primaries Project" />
            {this.state.openPrimaries ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {primaries}
          <ListItem button onClick={this.handleDogClick}>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Dog Project" />
            {this.state.openDog ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {dogProject}
        </List>
      </div>
    );

    return (
      <div>
        <IconButton
          onClick={this.toggleDrawer("left", true)}
          style={classes.icon}
          color="alternative"
        >
          <MenuIcon color="alternative" />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerNav);
