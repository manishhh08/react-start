import React from "react";

const RecipeCard = ({ meal }) => {
  return (
    <div className="col-5">
      <div style={{ width: "100px", height: "100px", objectFit: "cover" }}>
        {" "}
        <img
          style={{ width: "100%", height: "100%" }}
          src={meal.strMealThumb}
          alt=""
        />
      </div>
      <div>Title: {meal.strMeal}</div>
      <div>Instructions: {meal.strInstructions}</div>
      <div>Ingredients: {meal.strIngredient1}</div>
    </div>
  );
};

export default RecipeCard;
