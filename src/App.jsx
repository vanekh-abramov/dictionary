import React from 'react'
import { AppBar, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { HOME_ROUTE } from './constants/routerLinks'
import s from './app.module.scss'

const App = () => {
  return (
    <div className={s.container}>
      <AppBar className={s.app_bar}>
        <nav>
          <Button className={s.button}>
            <NavLink to={HOME_ROUTE}>Home</NavLink>
          </Button>
        </nav>
      </AppBar>
      <AppRouter />
    </div>
  )
}

export default App
