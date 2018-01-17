import React, { Component } from "react";
import Aux from "hoc/Aux/Aux";
import Toolbar from "components/Navigation/Toolbar/Toolbar";
import SideDrawer from "components/Navigation/SideDrawer/SideDrawer";
import css from "./Layout.css";

class Layout extends Component {
  state = {
    sideDrawerOpen: false
  };

  handleSideDrawerClose = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleSideDrawerOpen = () => {
    this.setState(state => ({
      sideDrawerOpen: !state.sideDrawerOpen
    }));
  };

  render() {
    return (
      <Aux>
        <Toolbar onMenuClick={this.handleSideDrawerOpen} />
        <SideDrawer
          isOpen={this.state.sideDrawerOpen}
          onClose={this.handleSideDrawerClose}
        />
        <div className={css.titleBar}>Toolbar, SideDrawer, Backdrop</div>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
