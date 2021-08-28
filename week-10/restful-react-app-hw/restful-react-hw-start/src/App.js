/* eslint-disable indent */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SecureRoute from './Components/Common/SecureRoute'

import Home from './Components/Common/Home'
import NavBar from './Components/Common/NavBar.js'

import WineIndex from './Components/Wines/WineIndex.js'
import WineDetails from './Components/Wines/WineDetails'
import WineNew from './Components/Wines/WineNew'
import WineEdit from './Components/Wines/WineEdit'


import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/wines' component={WineIndex} />
      <SecureRoute path='/wines/new' component={WineNew} />
      <SecureRoute path='/wines/:id/edit' component={WineEdit} />
      <Route path='/wines/:id' component={WineDetails} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
    </Switch>
    </BrowserRouter>
  )
}

export default App