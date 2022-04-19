import React, { useContext } from 'react'
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext)
  const [ formData, handleInputChange ] = useForm({
    userName: ''
  })
  const { userName } = formData

  const handleLogin = () => {
    if(userName.trim().length < 1) {
      return null
    }

    const data = {
      name: userName,
    }

    const action = {
      type: types.login,
      payload: data
    }

    dispatch(action)

    navigate('/', { replace: true })

  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <input 
        type="text" 
        className='form-control'
        placeholder='Nombre Usuario'
        autoComplete='off'
        name="userName"
        value={userName}
        onChange={handleInputChange}
      />
      <button type="button" className='btn btn-primary mt-2' onClick={handleLogin}>Login</button>
    </div>
  )
}
