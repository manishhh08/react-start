import PokeDetails from "./PokeDetails";

function PokeCard(props) {
  //console.log(1000, props);
  //   let name = props.pokemon.name;
  //   let hp = props.pokemon.hp;
  //   let ability = props.pokemon.ability;

  let { name, hp, ability, type, attack, defense, image } = props.pokemon;
  let details = { type, hp, attack, defense };

  return (
    <div className="card">
      <div className={"card-front card-" + type.toLowerCase()}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <PokeDetails details={details} />
      </div>
      <div className="card-back">
        <h1>Ability: {ability.name}</h1>
        <p>
          Ability: {ability.name} {ability.desc}
        </p>
      </div>
    </div>
  );
}

export default PokeCard;
