import React from "react";
import Logo from "../../Logo/Logo";
import css from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className={css.Toolbar}>
    <div className={css.DrawerToggle} onClick={props.onMenuClick}>
      <div />
      <div />
      <div />
    </div>
    <div className={css.Logo}>
      <Logo />
    </div>
    <nav className={css.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
