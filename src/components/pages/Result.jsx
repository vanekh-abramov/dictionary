import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ERROR_ROUTE } from '../../constants/routerLinks'
// import { useFetchWord } from '../../hooks/useFetchWord'
import { fetchDictionary } from '../../toolkitRedux/toolkitSlice'
import { v4 as uuidv4 } from 'uuid'
// import { color } from '@mui/system'

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
      {!error ?? naviagate(ERROR_ROUTE)}
      <Box
        sx={{
          bgcolor: 'background.paper',
          marginTop: '1rem',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: '50vw'
        }}
      >
        <Typography variant="h4" align="center" paragraph={true}>
          Word
        </Typography>
        <Typography
          sx={{
            bgcolor: '#edeaea',
            borderRadius: '0.5rem',
            padding: '0.5rem'
          }}
        >
          {word.word}
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          marginTop: '1rem',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: '50vw'
        }}
      >
        <Typography variant="h4" align="center" paragraph={true}>
          Phonetic
        </Typography>
        <Typography
          sx={{
            bgcolor: '#edeaea',
            borderRadius: '0.5rem',
            padding: '0.5rem'
          }}
        >
          {word.phonetic}
        </Typography>
      </Box>
      <Box
        key={uuidv4()}
        sx={{
          bgcolor: 'background.paper',
          marginTop: '1rem',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: '50vw'
        }}
      >
        <Typography variant="h4" align="center" paragraph={true}>
          Phonetics
        </Typography>
        {word.phonetics?.map((el) => (
          <>
            <Typography
              sx={{
                bgcolor: '#edeaea',
                borderRadius: '0.5rem',
                padding: '0.5rem'
              }}
            >
              {el.audio}
            </Typography>
            <Typography
              sx={{
                bgcolor: '#edeaea',
                borderRadius: '0.5rem',
                padding: '0.5rem'
              }}
            >
              {el.sourceUrl}
            </Typography>
          </>
        ))}
      </Box>
      <Box
        key={uuidv4()}
        sx={{
          bgcolor: 'background.paper',
          marginTop: '1rem',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: '50vw'
        }}
      >
        <Typography variant="h4" align="center" paragraph={true}>
          Meanings
        </Typography>
        {word.meanings?.map((el) => (
          <>
            <Typography
              sx={{
                bgcolor: '#edeaea',
                borderRadius: '0.5rem',
                padding: '0.5rem'
              }}
            >
              {el.partOfSpeech}
            </Typography>
          </>
        ))}
      </Box>
      <Box
        key={uuidv4()}
        sx={{
          bgcolor: 'background.paper',
          marginTop: '1rem',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: '50vw'
        }}
      >
        <Typography variant="h4" align="center" paragraph={true}>
          Definition
        </Typography>
        {word.meanings?.map((el) => (
          <>
            {el.definitions?.map((el) => (
              <>
                <Typography
                  sx={{
                    bgcolor: '#edeaea',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    fontWeight: 500,
                    color: '#d31919'
                  }}
                >
                  {el.definition}
                </Typography>
                <Typography
                  sx={{
                    bgcolor: '#edeaea',
                    borderRadius: '0.5rem',
                    padding: '0.5rem'
                  }}
                >
                  {el.example}
                </Typography>
              </>
            ))}
          </>
        ))}
      </Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          marginTop: '1rem',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: '90vw'
        }}
      >
        <Typography variant="h4" align="center" paragraph={true}>
          License
        </Typography>
        <Typography
          sx={{
            bgcolor: '#edeaea',
            borderRadius: '0.5rem',
            padding: '0.5rem'
          }}
        >
          {word.license?.name}
        </Typography>
        <Typography
          sx={{
            bgcolor: '#edeaea',
            borderRadius: '0.5rem',
            padding: '0.5rem'
          }}
        >
          {word.license?.url}
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          marginTop: '1rem',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: '90vw'
        }}
      >
        <Typography variant="h4" align="center" paragraph={true}>
          Wiki
        </Typography>
        {word.sourceUrls?.map((el) => (
          <Typography
            key={uuidv4()}
            sx={{
              bgcolor: '#edeaea',
              borderRadius: '0.5rem',
              padding: '0.5rem'
            }}
          >
            {el}
          </Typography>
        ))}
      </Box>
    </div>
  )
}

export default Result
