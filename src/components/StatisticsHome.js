import React from 'react'
import './styles/statisticsHome.css'
import 'bootstrap/dist/css/bootstrap.css'

const StatisticsHome = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 statistic-home">
          <p>Actividades recientes</p>
          <div className="row">
            <div className="col graphic-home">
              <p>(Mostrar una gráfica pequeña)</p>
            </div>
            <div className="col statistic-data-home">
              <div className="statistic-home-diatance">
                <p>Última distancia: 12km</p>
              </div>
              <div className="statistic-home-average-distance">
                <p>Distancia promedio: 150km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default StatisticsHome;