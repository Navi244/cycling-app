import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Cycling from './pages/Cycling'

ReactDOM.render(
  <BrowserRouter>
    <Cycling />
  </BrowserRouter>,
  document.getElementById('root')
);

