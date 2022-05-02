import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {
  const { error } = useSelector((state) => state.data)
  return <h2>{error}</h2>
}

export default Error
