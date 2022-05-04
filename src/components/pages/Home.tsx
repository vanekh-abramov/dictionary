import { Input, Button } from '@mui/material'
import React, { useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchDictionary } from '../../store/reducers/ActionCreators'
import { useAppDispatch } from '../../hooks/redux'
import s from './home.module.scss'
import { v4 as uuidv4 } from 'uuid'

const Home: FC = () => {
  const [word, setWord] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  const fetchVocabulary = () => {
    dispatch(fetchDictionary(word))
    navigate('/' + word)
  }

  return (
    <div className={s.container}>
      <Input
        key={uuidv4()}
        placeholder="Enter word"
        autoFocus={true}
        value={word}
        onChange={inputHandler}
      />
      <Button
        key={uuidv4()}
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
