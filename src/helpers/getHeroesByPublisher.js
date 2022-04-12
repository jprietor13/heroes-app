import { heroes } from "../data/dataHeroes";

export const getHeroesByPublisher = (publisher) => {

  const validatePublisher = ["DC Comics", "Marvel Comics"]

  if(!validatePublisher.includes(publisher)){
    throw new Error(`${publisher} is not a valid publisher`)
  }

  return heroes.filter(hero => {
    return hero.publisher === publisher
  })
}