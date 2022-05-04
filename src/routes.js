import { HOME_ROUTE, ERROR_ROUTE } from './constants/routerLinks'
import Home from './components/pages/Home'
import Result from './components/pages/Result'
import Error from './components/pages/Error'

export const publicRoutes = [
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
