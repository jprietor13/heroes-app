import React from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher)

  return (
    <>
      <ul className='list-group'>
        {heroes.map(hero => 
          <li key={hero.id}>{hero.superhero}</li>
        )}
      </ul>
    </>
  )
}
