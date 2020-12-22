import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PersonalStatsBody from '../components/PersonalStatsBody'

const PersonalStats = () => {
  return(
    <div>
      <Header title="Bienvenido Ivan"/>
      <PersonalStatsBody></PersonalStatsBody>
      <Footer pie="Pie de página"/>
    </div>
  )
}

export default PersonalStats