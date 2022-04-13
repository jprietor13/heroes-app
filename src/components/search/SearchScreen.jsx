import React from 'react'
import { useForm } from '../../hooks/useForm'

export const SearchScreen = () => {

  const [ {searchText} , handleInputChange ] = useForm()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText)
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
     </div>
    </div>
  )
}
