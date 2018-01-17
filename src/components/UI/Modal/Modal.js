import React, { Component } from "react";
import Aux from "hoc/Aux/Aux.js";
import Backdrop from "../Backdrop/Backdrop";
import css from "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} onClick={this.props.onDismiss} />
        <div
          className={css.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            visibility: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
