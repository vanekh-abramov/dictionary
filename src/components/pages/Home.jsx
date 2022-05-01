import { Input, Button } from '@mui/material'
// import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { API } from '../../constants/internalLinks'
import { fetchDictionary } from '../../toolkitRedux/toolkitSlice'
import s from './home.module.scss'
import { ERROR_ROUTE, RESULT_ROUTE } from '../../constants/routerLinks'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [inp, setInput] = useState('sound')
  const { error } = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputHandler = (e) => {
    setInput(e.target.value)
  }
  // console.log(JSON.stringify(data))
  const fetchVocabulary = () => {
    dispatch(fetchDictionary(inp))
    error ? navigate(ERROR_ROUTE) : navigate(RESULT_ROUTE)
  }

  return (
    <>
      <Input
        className={s.input}
        placeholder="Enter word"
        autoFocus={true}
        value={inp}
        onChange={(e) => inputHandler(e)}
      />
      <Button onClick={fetchVocabulary}>Enter</Button>
    </>
  )
}

export default Home
