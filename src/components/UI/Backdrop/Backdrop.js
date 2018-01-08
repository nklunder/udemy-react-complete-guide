import React from "react";
import css from "./Backdrop.css";

const backdrop = props =>
  props.show ? <div className={css.Backdrop} onClick={props.onClick} /> : null;

export default backdrop;
