import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes'
import { v4 as uuidv4 } from 'uuid'

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={uuidv4()} path={path} element={<Component />} />
      ))}
    </Routes>
  )
}

export default AppRouter
