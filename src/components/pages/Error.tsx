import React, { FC } from 'react'
import { useAppSelector } from '../../hooks/redux'

const Error: FC = () => {
  const { error } = useAppSelector((state) => state.data)

  return <h2>{error}</h2>
}

export default Error
