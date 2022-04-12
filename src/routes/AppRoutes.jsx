import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={ <LoginScreen /> }/>
        <Route exact path="*" element={ <DashboardRoutes /> } />
      </Routes>
    </BrowserRouter>
  )
}
