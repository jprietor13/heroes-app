import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getHeroesById } from '../../helpers/getHeroesById'

export const HeroScreen = () => {

  const { idHero } = useParams();
  const params = useParams();
  console.log(params)
  const hero = getHeroesById(idHero)

  if(!hero){
    return <Navigate to="/" />
  }

  return (
    <div>
      <h1>Hero Screen</h1>
      <p>{hero.superhero}</p>
    </div>
  )
}
