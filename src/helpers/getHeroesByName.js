import { heroes } from '../data/dataHeroes';

export const getHeroesByName = (name) => {
  if(name === ""){
    return []
  }
  return heroes.filter(heroe => {
    return heroe.superhero.toLowerCase().includes(name)
  })
}