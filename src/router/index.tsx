import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { routes } from './routes'

export const Router: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((routeProps, i) => (
          <Route key={i} {...routeProps} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
