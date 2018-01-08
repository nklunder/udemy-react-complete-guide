import React from "react";
import css from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const ingredients = [
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildControls = props => {
  return (
    <div className={css.BuildControls}>
      <p>
        Curent Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {ingredients.map(item => {
        return (
          <BuildControl
            key={item.label}
            label={item.label}
            added={() => props.ingredientAdded(item.type)}
            removed={() => props.ingredientRemoved(item.type)}
            disabled={props.disabled[item.type]}
          />
        );
      })}
      <button
        className={css.OrderButton}
        onClick={props.onOrderButtonClick}
        disabled={!props.purchasable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
