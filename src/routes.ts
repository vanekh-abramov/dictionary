import React from 'react'
import { HOME_ROUTE, ERROR_ROUTE } from './constants/routerLinks'
import Home from './components/pages/Home'
import Result from './components/pages/Result'
import Error from './components/pages/Error'

interface IPublicRoutes {
  path: string,
  Component: React.FC
}

export const publicRoutes: IPublicRoutes[] = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: '/:word',
    Component: Result
  },
  {
    path: ERROR_ROUTE,
    Component: Error
  }
]
