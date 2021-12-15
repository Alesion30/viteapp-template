import React from 'react'
import ReactDOM from 'react-dom'

import '~/index.css'
import 'tailwindcss/tailwind.css'
import { Router } from './router'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
