import React from 'react'
import AuthHeader from 'src/components/AuthHeader'

const Auth = ({ children }) => {
  document.body.className = 'bg-white'

  return (
    <React.Fragment>
      <AuthHeader />
      <div className="d-flex justify-content-center">{children}</div>
    </React.Fragment>
  )
}

export default Auth
