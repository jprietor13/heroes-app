import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <>
      <h1>Marvel Heroes</h1>
      <hr />
      <HeroList publisher={"Marvel Comics"}/>
    </>
  )
}
