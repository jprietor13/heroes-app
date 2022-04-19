import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRoutes } from './routes/AppRoutes'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false } 
}

export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    if(user){
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  return (
    <>
      <AuthContext.Provider value={{ user, dispatch }}>
      <AppRoutes />
      </AuthContext.Provider> 
    </>
  )
}
