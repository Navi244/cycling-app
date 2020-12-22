import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CenterLargeButtons from '../components/CenterLargeButtons'

const Statistics = () => {
  return(
    <div>
      <Header title='Bienvenido Ivan'/>
      <CenterLargeButtons 
        linkPersonal="/estadisticas-personales"
        FirstButtonLabel="Estadísticas personales"
        linkGroup="/estadisticas-en-grupo"
        SecondButtonLabel="Estadísticas de amigos"
      />
      <Footer pie="Es un pie de página"/>
    </div>
  )
}

export default Statistics