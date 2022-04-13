import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../helpers/getHeroesByName'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {
  const [ {searchText} , handleInputChange ] = useForm()
  const resultHeroes = useMemo(() => getHeroesByName(searchText), [searchText])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Busquedas</h1>
      <hr />
     <div className="row">
       <div className="col-5">
         <h3>Buscar</h3>
         <hr />
         <div className='form-group'>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              className='form-control'
              placeholder='Nombre del personaje...'
              autoComplete='off'
              name="searchText"
              value={searchText}
              onChange={handleInputChange}  
            />
            <button type="submit" className='btn btn-primary mt-3'>Buscar</button>
          </form>
         </div>
       </div>
       <div className='col-7'>
          {resultHeroes.map(heroes => 
            <HeroCard key={heroes.id} {...heroes}/> 
          )}
       </div>
     </div>
    </div>
  )
}
