import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroesById } from '../../helpers/getHeroesById'

export const HeroScreen = () => {

  const { idHero } = useParams();
  const navigate = useNavigate()

  const hero = useMemo(() => {
    return getHeroesById(idHero)
  }, [idHero]) 

  if(!hero){
    return <Navigate to="/" />
  }

  const imageHero = `/assets/images/${hero.id}.jpg`

  const handleReturn = () => {
    // if(hero.publisher === "DC Comics"){
    //   navigate('/dc', { replace: true })
    // } else {
    //   navigate('/marvel', { replace: true })
    // }
    navigate(-1)
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imageHero} alt={hero.superhero} className="img-thumbnail"/>
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button type="button" className="btn btn-primary" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  )
}
