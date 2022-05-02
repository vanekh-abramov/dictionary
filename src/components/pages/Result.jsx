import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ERROR_ROUTE } from '../../constants/routerLinks'
// import { useFetchWord } from '../../hooks/useFetchWord'
import { fetchDictionary } from '../../toolkitRedux/toolkitSlice'
// import { v4 as uuidv4 } from 'uuid'

const Result = () => {
  const { data, status, error } = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const naviagate = useNavigate()
  const word = data[0] || {}
  const params = useParams()
  useEffect(() => {
    dispatch(fetchDictionary(params.word))
    !error ?? naviagate(ERROR_ROUTE)
  }, [])
  // useFetchWord(word)
  return (
    <div>
      {status === 'loading' && <h2>Loading...</h2>}
      <div>{word.word}</div>
    </div>
  )
}

export default Result
