import { ReactLocation, Route } from 'react-location'

import { PATH } from './path'

import { RootPage } from '~/pages'
import { HogePage } from '~/pages/hoge'

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
