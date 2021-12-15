import { PathRouteProps, LayoutRouteProps, IndexRouteProps } from 'react-router-dom'

import { PATH } from './path'

import { RootPage } from '~/screens/root'
import { XXXPage } from '~/screens/xxx'

type Route = PathRouteProps | LayoutRouteProps | IndexRouteProps

export const routes: Route[] = [
  {
    path: PATH.ROOT,
    element: <RootPage />,
  },
  {
    path: PATH.XXX,
    element: <XXXPage />,
  },
]
