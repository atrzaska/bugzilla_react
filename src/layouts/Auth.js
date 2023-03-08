import React from 'react'
import AuthHeader from 'src/components/AuthHeader'

const Auth = ({ children }) => {
  document.body.className = 'bg-white'

  return (
    <>
      <AuthHeader />
      <div className="d-flex justify-content-center">{children}</div>
    </>
  )
}

export default Auth
