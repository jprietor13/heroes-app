import { heroes } from "../data/dataHeroes";

export const getHeroesById = (id) => {
  return heroes.find(hero => {
    return hero.id === id
  })
}