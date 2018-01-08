import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import css from "./Burger.css";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient key={ingredient + i} type={ingredient} />;
      });
    })
    .reduce((arr, ingredient) => [...arr, ...ingredient], []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
