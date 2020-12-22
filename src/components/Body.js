import React from 'react'
import StatisticsHome from './StatisticsHome'
import ServiceSelectHome from './ServiceSelectHome'
import './styles/body.css'
import 'bootstrap/dist/css/bootstrap.css'

const Body = () => {
  return(
    <div className="body">
        <StatisticsHome />
        <ServiceSelectHome />
    </div>
  )
}

export default Body 
