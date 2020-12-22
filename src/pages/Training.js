import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TrainingBody from '../components/TrainingBody'

const Training = () => {
  return(
    <div>
      <Header title="Bienvenido Ivan"/>
        <TrainingBody />
      <Footer pie="Pie de página"/>
    </div>
  )
};

export default Training