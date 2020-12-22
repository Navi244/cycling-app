import React from 'react'
import './styles/groupStatsBody.css'

const GroupStatsBody = () => {
  return(
    <div className="personal-stats-body">
      <div className="container">
        <div className="row">
          <div className="col"></div>
            <div className="col align-self-center">
              <p>Descripción</p>
            </div>
          <div className="col"></div>
        </div>
      </div>
      <div className="container personal-stats-container">
        <div className="row personal-stats-section">
          <div className="col-sm-12 section-stats">
            <p>Fecha: 14/04/2020</p>
          </div>
          <div className="col-sm-12 section-stats">
            <p>Distancia: 15km</p>
          </div>
          <div className="col-sm-12 section-stats">
            <p>Calorías: 12345</p>
          </div>
          <div className="col-sm-12 section-stats">
            <p>Velocidad promedio: 28km/h</p>
          </div>
          <div className="col-sm-12 section-stats">
            <p>Imagen:</p>
          </div>
        </div>
      </div>
      <div className="container personal-stats-container">
        <div className="row personal-stats-section">
          <div className="col-sm-12 section-stats">
            <p>Fecha: 02/07/2020</p>
          </div>
          <div className="col-sm-12 section-stats">
            <p>Distancia: 25km</p>
          </div>
          <div className="col-sm-12 section-stats">
            <p>Calorías: 4676454</p>
          </div>
          <div className="col-sm-12 section-stats">
            <p>Velocidad promedio: 35km</p>
          </div>
          <div className="col-sm-12 section-stats">
            <p>Imagen:</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupStatsBody