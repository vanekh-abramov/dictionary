import { HOME_ROUTE, RESULT_ROUTE, ERROR_ROUTE } from '../src/constants/routerLinks'
import Home from '../src/components/pages/Home'
import Result from './components/pages/Result'
import Error from './components/pages/Error'

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: RESULT_ROUTE,
    Component: Result
  },
  {
    path: ERROR_ROUTE,
    Component: Error
  }
]
