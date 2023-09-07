/* eslint-disable react/prop-types */
import {  Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? (
    <></>
  ) : (
    <p className="cart-text">{characters}</p>
  );
};

/* eslint-disable react/prop-types */
export const HeroCard = ({hero} ) => {
  console.log(hero)
  const heroImgUrl = `/assets/heroes/${hero.id}.jpg`;
  // const characters = <p className="cart-text">{hero.characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img src={heroImgUrl} alt={hero.id} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="cart-text">{hero.alter_ego}</p>
              {/* forma2. usar un condicional */}
              {/* {hero.alter_ego !== hero.characters && characters} */}

              {/* forma2. usar un componente adicional */}
              <CharactersByHero
                alter_ego={hero.alter_ego}
                characters={hero.characters}
              ></CharactersByHero>

              <p className="cart-text">
                <small className="text-muted">{hero.first_appearance}</small>
              </p>
              {/* react-router-dom */}
              <Link to={`/hero/${hero.id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
