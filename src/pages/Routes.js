import React from 'react'
import Header from '../components/Header'
import CenterLargeButtons from '../components/CenterLargeButtons'
import Footer from '../components/Footer';

const Routes = () => {
  return (
    <div>
      <Header title='Bienvenido Ivan'/>
      <CenterLargeButtons 
        linkPersonal="/ruta-personal"
        FirstButtonLabel="Ruta personal"
        linkGroup="/ruta-en-grupo"
        SecondButtonLabel="Ruta en grupo"
      />
      <Footer pie="Es un pie de página"/>
    </div>
  )
};

export default Routes