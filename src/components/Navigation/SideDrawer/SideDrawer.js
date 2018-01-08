import React from "react";
import Logo from "../../Logo/Logo";
import css from "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = props => {
  return (
    <div className={css.SideDrawer}>
      <div className={css.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
