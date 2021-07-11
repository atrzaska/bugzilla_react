import React from 'react'
import Routes from 'src/router'
import Toast from 'src/components/Toast'
import Modal from 'src/components/Modal'

const App = () => (
  <React.Fragment>
    <Routes />
    <Toast />
    <Modal />
  </React.Fragment>
)
export default App
