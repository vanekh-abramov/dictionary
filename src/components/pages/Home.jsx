import { Input, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDictionary } from '../../toolkitRedux/toolkitSlice'
import s from './home.module.scss'
import { ERROR_ROUTE } from '../../constants/routerLinks'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [word, setWord] = useState('')
  const { error } = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputHandler = (e) => {
    setWord(e.target.value)
  }
  const fetchVocabulary = () => {
    dispatch(fetchDictionary(word))
    error ? navigate(ERROR_ROUTE) : navigate('/' + word)
  }

  return (
    <div className={s.container}>
      <Input
        placeholder="Enter word"
        autoFocus={true}
        value={word}
        onChange={(e) => inputHandler(e)}
      />
      <Button
        sx={{
          fontSize: '2rem',
          transition: 'all 0.5s linear',
          '&:hover': {
            color: '#fff',
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7]
          }
        }}
        onClick={fetchVocabulary}
      >
        Enter
      </Button>
    </div>
  )
}

export default Home
