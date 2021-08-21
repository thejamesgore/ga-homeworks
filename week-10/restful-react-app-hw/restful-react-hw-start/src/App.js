/* eslint-disable indent */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import NavBar from './NavBar'
import Index from './index'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/wines' component={Index} />
      <Route exact path='/' component={Home} />
    </Switch>
    </BrowserRouter>
  )
}

export default App
