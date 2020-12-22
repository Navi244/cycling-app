import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PersonalRouteBody from '../components/PersonalRouteBody'

const PersonalRoute = () => {
  return(
    <div>
      <Header title="Bienvenido Ivan"/>
      <PersonalRouteBody />
      <Footer pie="Pie de página"/>
    </div>
  )
};

export default PersonalRoute 