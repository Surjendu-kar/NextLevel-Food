import React from "react";
import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";
function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal}></MealItem>
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
