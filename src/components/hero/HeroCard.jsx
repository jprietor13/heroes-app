import React from 'react'
import { NavLink } from 'react-router-dom'

const heroImage = require.context('../../assets/images', true)

export const HeroCard = ({ id,
superhero, 
publisher, 
alter_ego,
first_appearance,
characters }) => {

 
  return (
    <div className='col'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImage(`./${id}.jpg`)} alt={superhero} className="card-img-top" />
          </div>
          <div className='col-8'>
            <h4 className='card-title mt-2'>{superhero}</h4>
            <p className='card-text'>{alter_ego}</p>
            {alter_ego !== characters &&
              <p className='text-muted'>{characters}</p>
            }
            <p className='card-text'>{first_appearance}</p>
            <NavLink to={`/hero/${id}`}>
              Mas...
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
