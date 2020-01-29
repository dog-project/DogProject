import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerNav from "./DrawerNav";


class NavMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;


    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <IconButton style={style} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Button>
        <DrawerNav />
      </div>
    );
  }
}

const style = {
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
      color: "#ffffff"
    },
  };

export default NavMenu;