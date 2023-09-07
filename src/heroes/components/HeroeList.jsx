/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { getHeroByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroeList = ({ publisher }) => {

  // solo se llama la f(x) getHeroByPublisher cada vez que cambia el publisher 
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {heroes.map((h) => (
          <HeroCard hero={h} key={h.id} />
        ))}
      </div>
    </>
  );
};
