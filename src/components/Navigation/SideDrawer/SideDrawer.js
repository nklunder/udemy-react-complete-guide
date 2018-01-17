import React from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "components/UI/Backdrop/Backdrop";
import Aux from "hoc/Aux/Aux";
import css from "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = props => {
  return (
    <Aux>
      <Backdrop show={props.isOpen} onClick={props.onClose} />
      <div
        className={
          [css.SideDrawer, props.isOpen ? css.Open : css.Close].join(" ")
        }
      >
        <div className={css.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
