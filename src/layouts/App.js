import React from 'react'
import Header from 'src/components/Header'
import Sidebar from 'src/components/Sidebar'

const App = ({ children }) => {
  document.body.className = 'bg-light'

  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <div className="wrapper">
        <div className="pt-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
