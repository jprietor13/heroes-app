import { heroes } from '../data/dataHeroes';

export const getHeroesByName = (name) => {
  return heroes.filter(heroe => {
    return heroe.superhero.toLowerCase().includes(name)
  })
}