import { useState } from "react";
import "./App.css";
import image1 from "./assets/logo.jpg";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("Sample Joke");

  const [apiData, setApiData] = useState(false);

  let jokeList = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why can’t you hear a pterodactyl go to the bathroom? Because the 'P' is silent!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Did you hear about the cheese factory explosion? There was nothing left but de-brie.",
    "I would tell you a construction joke, but I’m still working on it.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "What did one wall say to the other? I'll meet you at the corner.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "I'm afraid for the calendar. Its days are numbered.",
    "Why did the orange stop? It ran out of juice.",
    "How do you make holy water? You boil the hell out of it.",
    "Parallel lines have so much in common… it’s a shame they’ll never meet.",
    "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
    "I told my computer I needed a break, and now it won’t stop sending me KitKats.",
    "I couldn’t figure out why the baseball kept getting bigger. Then it hit me.",
    "Want to hear a roof joke? The first one's on the house.",
    "Why did the coffee file a police report? It got mugged.",
    "I used to be addicted to soap, but I’m clean now.",
    "What do you call a belt made of watches? A waist of time.",
    "What did the zero say to the eight? Nice belt!",
    "Why was the broom late? It swept in.",
    "Why don’t scientists trust stairs? Because they’re always up to something.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why did the chicken go to the séance? To talk to the other side.",
    "What do you call a snowman with a six-pack? An abdominal snowman.",
    "I used to hate facial hair, but then it grew on me.",
    "What happens when you go to the bathroom in France? European.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call an alligator in a vest? An investigator.",
    "Why don’t you ever see elephants hiding in trees? Because they’re so good at it.",
    "What’s orange and sounds like a parrot? A carrot.",
    "Why did the man get hit by a bike every day? He was stuck in a vicious cycle.",
    "What do you call a dog that can do magic? A Labracadabrador.",
    "What do you call two birds in love? Tweethearts.",
    "Why don’t oysters donate to charity? Because they’re shellfish.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels.",
    "What kind of music do mummies listen to? Wrap music.",
    "How do you organize a space party? You planet.",
    "Why did the cookie go to the hospital? Because it felt crummy.",
    "How does the moon cut his hair? Eclipse it.",
    "Why did the banker switch careers? He lost interest.",
  ];

  const generateJoke = async () => {
    console.log("apiData", apiData);
    // alert("JOKE GENERATED");
    if (apiData) {
      // generate joke from api
      // let response = await fetch(
      //   "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
      // );

      // let data = await response.json();

      // console.log(data.joke);
      // setJoke(data.joke);

      let response = await axios.get(
        "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
      );

      console.log(response.data.joke);

      setJoke(response.data.joke);
    } else {
      // else use the static jokes
      const randomIndex = Math.floor(Math.random() * jokeList.length);
      setJoke(jokeList[randomIndex]);
    }
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.checked);
    setApiData(event.target.checked);
  };

  return (
    <>
      <div className="wrapper bg-dark text-white p-4 rounded-5">
        <div className="container d-flex flex-column gap-5">
          <div className="row">
            <div className="col">
              <img
                src={image1}
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
              <h1>Joke generator</h1>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-column gap-2">
              <div className="d-flex gap-4">
                <label htmlFor="api-toggle">API</label>
                <input
                  type="checkbox"
                  name="api-toggle"
                  onChange={handleOnChange}
                />
              </div>
              <button
                className="rounded-pill bg-success"
                onClick={generateJoke}
              >
                Click to generate joke
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">{joke}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
