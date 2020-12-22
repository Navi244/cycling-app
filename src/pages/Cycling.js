import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Routes from './Routes'
import PersonalRoute from './PersonalRoute'
import GroupRoute from './GroupRoute'
import Statistics from './Statistics'
import PersonalStats from './PersonalStats'

function Cycling() {
  return (
    <Switch>
      <Route exact path='/' component={Cycling}>
        <Header title='Bienvenido Ivan'/>
        <Body />
        <Footer pie="Footer"/>
      </Route>
      <Route exact path="/route" component={Routes}></Route>
      <Route exact path="/ruta-personal" component={PersonalRoute}></Route>
      <Route exact path="/ruta-en-grupo" component={GroupRoute}></Route>
      <Route exact path="/estadisticas" component={Statistics}></Route>
      <Route exact path="/estadisticas-personales" component={PersonalStats}></Route>
    </Switch>
    );
}

export default Cycling 