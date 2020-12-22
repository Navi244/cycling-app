import React from 'react'
import './styles/personalRouteBody.css'
import MoleculeInputs from '../components/MoleculeInputs';

const PersonalRouteBody = () => {
  return (
    <div className="personal-route-body">
      <div className="container">
        <div className="row">
          <MoleculeInputs />
        </div>
      </div>
    </div>
  )
}

export default PersonalRouteBody