import React from 'react'

const MoleculeInputs = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <label>Ubicación actual</label>
              <input type="text" className="form-control" placeholder="¿En donde estás?" />
            </div>
            <div className="form-group">
              <label>Destino</label>
              <input type="text" className="form-control" placeholder="¿A dónde vas?" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MoleculeInputs