import '@popperjs/core'
import 'bootstrap'
import 'src/css/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import fetchAccessToken from 'src/services/jwt/fetchAccessToken'

fetchAccessToken().then(() =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
)
