import React from 'react'
import { Navigate } from 'react-router'

function PrivateRoute({isLoggedIn , children}) {
  return isLoggedIn ? children : <Navigate to="/login"/>
}

export default PrivateRoute