import React from 'react';
import './styles/header.css'
import 'bootstrap/dist/css/bootstrap.css'

const Header = ({title}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col header">
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Header;