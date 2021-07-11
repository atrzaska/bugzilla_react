import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getAccessToken } from 'src/services/jwt'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLoggedIn = !!getAccessToken()

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
