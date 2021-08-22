/* eslint-disable indent */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import NavBar from './NavBar'

import WineIndex from './Wines/WineIndex'
import WineDetails from './Wines/WineDetails'
import Register from './Auth/Register'
import Login from './Auth/Login'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/wines' component={WineIndex} />
      <Route path='/wines/:id' component={WineDetails} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
    </Switch>
    </BrowserRouter>
  )
}

export default App