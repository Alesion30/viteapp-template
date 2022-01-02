import { Router, Outlet } from 'react-location'

import { routes, location } from './routes'

export const AppRouter: React.VFC = () => {
  return (
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  )
}
