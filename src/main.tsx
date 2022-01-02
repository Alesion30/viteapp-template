import React from 'react'
import ReactDOM from 'react-dom'

import '~/index.css'
import 'tailwindcss/tailwind.css'
import { AppRouter } from './router'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
)
