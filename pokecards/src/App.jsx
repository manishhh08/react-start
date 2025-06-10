import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokeCard from "./PokeCard";

function App() {
  let pokemon = {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    name: "pikachu",
    type: "Electric",
    hp: 10,
    attack: 55,
    defense: 40,
    ability: {
      name: "static",
      desc: "When a Pokémon with this Ability is hit by a move that makes contact, there is a 30% chance that the attacking Pokémon will become paralyzed. This can deter physical attackers from targeting Pikachu.",
    },
  };

  let pokelist = [
    {
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      name: "pikachu",
      type: "Electric",
      hp: 10,
      attack: 55,
      defense: 40,
      ability: {
        name: "static",
        desc: "When a Pokémon with this Ability is hit by a move that makes contact, there is a 30% chance that the attacking Pokémon will become paralyzed. This can deter physical attackers from targeting Pikachu.",
      },
    },
    {
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      name: "bulbasaur",
      type: "Grass",
      hp: 45,
      attack: 49,
      defense: 49,
      ability: {
        name: "Cholorophyll",
        desc: "Boosts the Pokémon’s Speed stat in harsh sunlight.",
      },
    },
    {
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      name: "bulbasaur",
      type: "Grass",
      hp: 45,
      attack: 49,
      defense: 49,
      ability: {
        name: "Cholorophyll",
        desc: "Boosts the Pokémon’s Speed stat in harsh sunlight.",
      },
    },
  ];

  return (
    <>
      <div className="wrapper" id="pokelist">
        {/* <PokeCard pokemon={pokemon} /> */}

        {pokelist.map((item) => {
          return (
            <>
              <PokeCard pokemon={item} />
            </>
          );
        })}

        {/* {PokeCard({ pokemon, test: "objectest" })} */}
      </div>
    </>
  );
}

export default App;
