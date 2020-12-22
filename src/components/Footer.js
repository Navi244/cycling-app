import React from 'react'

const Footer = ({pie}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col footer">
          <p>{pie}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer