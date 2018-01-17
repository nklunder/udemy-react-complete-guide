import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withNetworkErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    render() {
      console.log(this)
      return (
        <Aux>
          <Modal show>Something bad happened</Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withNetworkErrorHandler;
