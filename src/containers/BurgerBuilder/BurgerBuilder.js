import React, { Component } from "react";
import Burger from "components/Burger/Burger";
import BuildControls from "components/Burger/BuildControls/BuildControls";
import OrderSummary from "components/Burger/OrderSummary/OrderSummary";
import Modal from "components/UI/Modal/Modal";
import Aux from "hoc/Aux/Aux";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-orders";
import withNetworkErrorHandler from "../../hoc/withNetworkErrorHandler/withNetworkErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    isLoading: false
  };

  updatePurchaseState(ingredients) {
    const ingredientCount = Object.keys(ingredients).reduce(
      (sum, key) => sum + ingredients[key],
      0
    );
    this.setState({ purchasable: ingredientCount > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount < 1) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  handleOrderDismiss = () => {
    this.setState({ purchasing: false });
  };

  handleOrderContinue = () => {
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Nick Klunder",
        address: {
          street: "Some Street 123",
          zipCode: 98105,
          country: "United States"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };

    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ isLoading: false, purchasing: false });
      })
      .catch(err => {
        this.setState({ isLoading: false, purchasing: false });
      });
  };

  render() {
    console.log(this.props)
    const disabled = Object.keys(this.state.ingredients).reduce((obj, key) => {
      obj[key] = this.state.ingredients[key] < 1;
      return obj;
    }, {});
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
        onCancel={this.handleOrderDismiss}
        onContinue={this.handleOrderContinue}
      />
    );

    if (this.state.isLoading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} onDismiss={this.handleOrderDismiss}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          onOrderButtonClick={this.purchaseHandler}
          disabled={disabled}
          purchasable={this.state.purchasable}
          purchasing={this.state.purchasing}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default withNetworkErrorHandler(BurgerBuilder);
