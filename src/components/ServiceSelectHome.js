import React from 'react'
import { Link } from 'react-router-dom'
import './styles/serviceSelectHome.css'
import 'bootstrap/dist/css/bootstrap.css'

const ServiceSelectHome = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col section-hm"><p><Link to="/estadisticas">Estadísticas</Link></p></div>
        <div className="col section-hm"><p><Link to="/entrenamiento">Entrenamiento</Link></p></div>
        <div className="w-100"></div>
        <div className="col section-hm"><p>Luz</p></div>
        <div className="col section-hm"><p>Alarma</p></div>
        <div className="w-100"></div>
        <div className="col section-hm"><p><Link to="/route">Ruta</Link></p></div>
        <div className="col section-hm"><p>Friends</p></div>
      </div>
    </div>
  );
};

export default ServiceSelectHome;