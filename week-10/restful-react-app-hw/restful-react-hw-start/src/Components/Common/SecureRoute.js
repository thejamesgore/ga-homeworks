import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { getUserStatus } from '../../lib/Auth'

const SecureRoute = ({ component: Component, path, exact = false }) => {
  if (getUserStatus()) {
    return <Route component={Component} path={path} exact={exact} />
  }
  return <Redirect to="/login/" />
}

export default SecureRoute
