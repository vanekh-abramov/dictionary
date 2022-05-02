import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ERROR_ROUTE } from '../constants/routerLinks'
import { fetchDictionary } from '../toolkitRedux/toolkitSlice'

export const useFetchWord = (word) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error } = useSelector(state => state.data)
  const params = useParams()
  useEffect(() => {
    dispatch(fetchDictionary(params.word ?? word))
    !error ?? navigate(ERROR_ROUTE)
  }, [])
}
