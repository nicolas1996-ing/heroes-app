import { heroes } from "../data/heroes";

export const getHeroByName = (heroName = "") => {
  if (heroName.trim().length <= 0) return [];
  return heroes.filter((h) =>
    h.superhero.toLowerCase().includes(heroName.toLocaleLowerCase())
  );
};
