import { useRef, useState } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import RecipeCard from "./component/RecipeCard";

function App() {
  const [meal, setMeal] = useState("Sample recipe");

  const [meals, setMeals] = useState([]);
  const [mealRecipe, setMealRecipe] = useState(false);

  const searchRef = useRef(null);

  // const handleOnClick = () => {
  //   alert("Button clicked");
  // };

  //use api to retrive data
  const generateMealRecipe = async () => {
    //alert("button has been clicked");
    let searchValue = searchRef.current.value;

    if (searchValue) {
      let mealResponse = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue
      );

      console.log(mealResponse);
      setMeal(mealResponse.data.meals[0].strMeal);

      setMeals(mealResponse.data.meals);
    }
  };
  const handleOnChange = (event) => {
    setMealRecipe(event.target.value);
  };
  return (
    <>
      <div className="wrapper bg-dark text-white p-4 rounded-5">
        <div className="container d-flex flex-column gap-5">
          <div className="row">
            <div className="col">
              <h1>Meal Recipe</h1>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-column gap-2 ">
              <div className="d-flex gap-4 ">
                <input className="w-100" type="text" ref={searchRef} />
              </div>
              <button
                className="rounded-pill bg-sucess"
                onClick={generateMealRecipe}
              >
                Click here for recipe
              </button>
            </div>
          </div>
          <div className="row gap-5">
            {meals.map((m) => {
              return (
                <>
                  <RecipeCard meal={m} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
