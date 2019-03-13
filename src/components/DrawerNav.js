import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BackupIcon from "@material-ui/icons/Backup";
import { Link } from 'react-router-dom'
import { IconButton } from "@material-ui/core";

const styles = {
  list: {
    width: 250
  },
  colorAlternative: {
    color: "#ffffff"
  }

};

class DrawerNav extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
            <ListItem component={Link} to="/">
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={Link} to="/about">
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
            <ListItemText primary="The Philosophical Stuff" />
            </ListItem>
            <ListItem component={Link} to="/submit">
                <ListItemIcon>
                    <BackupIcon />
                </ListItemIcon>
            <ListItemText primary="Submit Your Dog" />
            </ListItem>
            <ListItem component={Link} to="/vote">
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
            <ListItemText primary="Vote" />
            </ListItem>

        </List>
      </div>
    );



    return (
      <div>
        <IconButton onClick={this.toggleDrawer("left", true)} style={classes.icon} color="alternative">

            <MenuIcon color="alternative" />

        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
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
