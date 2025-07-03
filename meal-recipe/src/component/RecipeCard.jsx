import React from "react";

const RecipeCard = ({ meal }) => {
  return (
    <div className="meal col-5 bg-secondary text-black d-flex justify-content-center align-items-center flex-column rounded overflow-scroll">
      <div style={{ width: "150px", height: "150px" }}>
        <img
          className="center-block"
          style={{ width: "100%", height: "100%" }}
          src={meal.strMealThumb}
          alt=""
        />
      </div>
      <div>
        <h3>Title: {meal.strMeal}</h3>
      </div>
      <div>Instructions: {meal.strInstructions}</div>
      <div>Ingredients: {meal.strIngredient1}</div>
    </div>
  );
};

export default RecipeCard;
