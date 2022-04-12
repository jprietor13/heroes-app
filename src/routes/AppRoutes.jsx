import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element= { <MarvelScreen /> } />
        <Route exact path="/marvel" element={ <MarvelScreen /> }/>
        <Route exact path="/dc" element={ <DcScreen /> }/>
        <Route exact path="/login" element={ <LoginScreen /> }/>
        <Route exact path="/search" element={ <SearchScreen /> }/>
      </Routes>
    </BrowserRouter>
  )
}
