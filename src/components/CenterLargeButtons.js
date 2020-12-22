import React from 'react'
import './styles/centerLargeButtons.css'
import { Link } from 'react-router-dom'

const CenterLargeButtons = ({linkPersonal, FirstButtonLabel, linkGroup, SecondButtonLabel}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="buttons-container">
          <p className="blue-primary-button"><Link to={linkPersonal}>{FirstButtonLabel}</Link></p>
          <p className="purple-primary-button"><Link to={linkGroup}>{SecondButtonLabel}</Link></p>
        </div>
      </div>
    </div>
  )
};

export default CenterLargeButtons