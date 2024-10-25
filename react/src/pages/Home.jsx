import React from 'react'

import Main from '../components/Main'
import BrandsSection from '../components/BrandsSection'
import AppFeatures from '../components/AppFeatures'
import HowDoesItWork from '../components/HowDoesItWork'
import MakeMoney from '../components/MakeMoney'
import Clients from '../components/Clients'
import Questions from '../components/Questions'
import Subscribe from '../components/Subscribe'

const home = () => {
  return (
    <>
      <Main />
      <BrandsSection />
      <AppFeatures />
      <HowDoesItWork />
      <MakeMoney />
      <Clients />
      <Questions />
      <Subscribe />
    </>
  )
}

export default home