import React from "react";
import burgerLogo from "../../assets/burger-logo.png"
import css from "./Logo.css"

const logo = () => (
  <div className={css.Logo}>
    <img src={burgerLogo} alt="Burger Builder logo"/>
  </div>
);

export default logo;