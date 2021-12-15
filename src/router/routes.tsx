import { PathRouteProps, LayoutRouteProps, IndexRouteProps } from 'react-router-dom'

import { PATH } from './path'

import { RootPage } from '~/pages'
import { HogePage } from '~/pages/hoge'

type Route = PathRouteProps | LayoutRouteProps | IndexRouteProps

export const routes: Route[] = [
  {
    path: PATH.ROOT,
    element: <RootPage />,
  },
  {
    path: PATH.Hoge,
    element: <HogePage />,
  },
]
