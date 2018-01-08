import React from "react";
import Aux from "../../../hoc/Aux.js";
import Backdrop from "../Backdrop/Backdrop";
import css from "./Modal.css";

const modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} onClick={props.onDismiss}/>
      <div
        className={css.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          visibility: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
