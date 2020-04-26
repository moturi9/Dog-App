import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App'

import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)
