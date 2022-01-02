import { ReactLocation, Route } from 'react-location'

import { PATH } from './path'

import { HogePage } from '~/pages/hoge'
import { RootPage } from '~/pages/root'

export const location = new ReactLocation()

export const routes: Route[] = [
  {
    path: PATH.ROOT,
    element: <RootPage />,
  },
  {
    path: PATH.HOGE,
    element: <HogePage />,
  },
]
