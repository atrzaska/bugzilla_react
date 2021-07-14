import React from 'react'
import AuthHeader from 'src/components/AuthHeader'

const Legal = ({ children }) => {
  document.body.className = 'bg-white'

  const appHost = 'bugzilla.nexxy.net'
  const salesUrl = `mailto://sales@${appHost}`

  return (
    <React.Fragment>
      <AuthHeader />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {children}
            <div className="text-center my-4">
              <a className="btn btn-primary btn-lg" href={salesUrl}>
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Legal
