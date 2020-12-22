import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GroupStatsBody from '../components/GroupStatsBody'

const PersonalStats = () => {
  return(
    <div>
      <Header title="Bienvenido Ivan"/>
      <GroupStatsBody></GroupStatsBody>
      <Footer pie="Pie de página"/>
    </div>
  )
}

export default PersonalStats