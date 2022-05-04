import { Box, Link, Typography } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { ERROR_ROUTE } from '../../constants/routerLinks'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IWord } from '../../models/IWord'
import { fetchDictionary } from '../../store/reducers/ActionCreators'
import s from './result.module.scss'

type wordParams = {
  word: string | undefined;
};

const Result: FC = () => {
  const { data, status, error } = useAppSelector((state) => state.data)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const myWord: IWord = data[0] || {}
  const { word } = useParams<wordParams>()

  useEffect(() => {
    dispatch(fetchDictionary(word))
  }, [])

  useEffect(() => {
    if (error) navigate(ERROR_ROUTE)
  })

  return (
    <div className={s.container}>
      {status && (
        <Typography
          key={uuidv4()}
          variant="h4"
          align="center"
          paragraph={true}
          color={'red'}
        >
          Loading...
        </Typography>
      )}
      <Box
        key={uuidv4()}
        sx={{
          bgcolor: 'background.paper',
          marginTop: '1rem',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: '50vw',
          maxWidth: '1440px'
        }}
      >
        <Typography key={uuidv4()} variant="h4" align="center" paragraph={true}>
          Word
        </Typography>
        <Typography
          key={uuidv4()}
          sx={{
            bgcolor: '#edeaea',
            borderRadius: '0.5rem',
            padding: '0.5rem'
          }}
        >
          {myWord.word}
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
          minWidth: '50vw',
          maxWidth: '1440px'
        }}
      >
        <Typography key={uuidv4()} variant="h4" align="center" paragraph={true}>
          Phonetic
        </Typography>
        <Typography
          key={uuidv4()}
          sx={{
            bgcolor: '#edeaea',
            borderRadius: '0.5rem',
            padding: '0.5rem'
          }}
        >
          {myWord.phonetic}
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
          minWidth: '50vw',
          maxWidth: '1440px'
        }}
      >
        <Typography key={uuidv4()} variant="h4" align="center" paragraph={true}>
          Phonetics
        </Typography>
        {myWord.phonetics?.map((el) => (
          <div key={uuidv4()}>
            <Box key={uuidv4()}>
              {el.audio && (
                <Typography
                  key={uuidv4()}
                  sx={{
                    bgcolor: '#edeaea',
                    borderRadius: '0.5rem',
                    padding: '0.5rem'
                  }}
                >
                  <audio key={uuidv4()} controls src={el.audio}>
                    Your browser does not support the
                    <code key={uuidv4()}>audio</code> element.
                  </audio>
                </Typography>
              )}
              {el.sourceUrl && (
                <Typography
                  key={uuidv4()}
                  sx={{
                    bgcolor: '#edeaea',
                    borderRadius: '0.5rem',
                    padding: '0.5rem'
                  }}
                >
                  <Link key={uuidv4()} href={el.sourceUrl} underline="none">
                    {el.sourceUrl}
                  </Link>
                </Typography>
              )}
            </Box>
          </div>
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
          minWidth: '50vw',
          maxWidth: '1440px'
        }}
      >
        <Typography key={uuidv4()} variant="h4" align="center" paragraph={true}>
          Meanings
        </Typography>
        {myWord.meanings?.map((el) => (
          <div key={uuidv4()}>
            <Typography
              key={uuidv4()}
              sx={{
                bgcolor: '#edeaea',
                borderRadius: '0.5rem',
                padding: '0.5rem'
              }}
            >
              {el.partOfSpeech}
            </Typography>
          </div>
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
          minWidth: '50vw',
          maxWidth: '1440px'
        }}
      >
        <Typography key={uuidv4()} variant="h4" align="center" paragraph={true}>
          Definition
        </Typography>
        {myWord.meanings?.map((el) => (
          <div key={uuidv4()}>
            {el.definitions?.map((el) => (
              <div key={uuidv4()}>
                <Typography
                  key={uuidv4()}
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
                {el.example && (
                  <Typography
                    key={uuidv4()}
                    sx={{
                      bgcolor: '#edeaea',
                      borderRadius: '0.5rem',
                      padding: '0.5rem'
                    }}
                  >
                    {el.example}
                  </Typography>
                )}
              </div>
            ))}
          </div>
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
          minWidth: '50vw',
          maxWidth: '1440px'
        }}
      >
        <Typography key={uuidv4()} variant="h4" align="center" paragraph={true}>
          Synonyms
        </Typography>
        {myWord.meanings?.map((el) => (
          <div key={uuidv4()}>
            {el.synonyms?.map((el) => (
              <Typography
                key={uuidv4()}
                sx={{
                  bgcolor: '#edeaea',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  fontWeight: 500,
                  color: '#d31919'
                }}
              >
                {el}
              </Typography>
            ))}
            {el.definitions?.map((el) => (
              <div key={uuidv4()}>
                {el.synonyms?.map((el) => (
                  <Typography
                    key={uuidv4()}
                    sx={{
                      bgcolor: '#edeaea',
                      borderRadius: '0.5rem',
                      padding: '0.5rem',
                      fontWeight: 500,
                      color: '#d31919'
                    }}
                  >
                    {el}
                  </Typography>
                ))}
              </div>
            ))}
          </div>
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
          minWidth: '50vw',
          maxWidth: '1440px'
        }}
      >
        <Typography key={uuidv4()} variant="h4" align="center" paragraph={true}>
          Antonyms
        </Typography>
        {myWord.meanings?.map((el) => (
          <div key={uuidv4()}>
            {el.antonyms?.map((el) => (
              <Typography
                key={uuidv4()}
                sx={{
                  bgcolor: '#edeaea',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  fontWeight: 500,
                  color: '#d31919'
                }}
              >
                {el}
              </Typography>
            ))}
            {el.definitions?.map((el) => (
              <div key={uuidv4()}>
                {el.antonyms?.map((el) => (
                  <Typography
                    key={uuidv4()}
                    sx={{
                      bgcolor: '#edeaea',
                      borderRadius: '0.5rem',
                      padding: '0.5rem',
                      fontWeight: 500,
                      color: '#d31919'
                    }}
                  >
                    {el}
                  </Typography>
                ))}
              </div>
            ))}
          </div>
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
          minWidth: '90vw',
          maxWidth: '1440px'
        }}
      >
        <Typography key={uuidv4()} variant="h4" align="center" paragraph={true}>
          License
        </Typography>
        <Typography
          key={uuidv4()}
          sx={{
            bgcolor: '#edeaea',
            borderRadius: '0.5rem',
            padding: '0.5rem'
          }}
        >
          {myWord.license?.name}
        </Typography>
        <Typography
          key={uuidv4()}
          sx={{
            bgcolor: '#edeaea',
            borderRadius: '0.5rem',
            padding: '0.5rem'
          }}
        >
          <Link key={uuidv4()} href={myWord.license?.url} underline="none">
            {myWord.license?.url}
          </Link>
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
          minWidth: '90vw',
          maxWidth: '1440px'
        }}
      >
        <Typography key={uuidv4()} variant="h4" align="center" paragraph={true}>
          Wiki
        </Typography>
        {myWord.sourceUrls?.map((el) => (
          <div key={uuidv4()}>
            <Typography
              key={uuidv4()}
              sx={{
                bgcolor: '#edeaea',
                borderRadius: '0.5rem',
                padding: '0.5rem'
              }}
            >
              <Link key={uuidv4()} href={el} underline="none">
                {el}
              </Link>
            </Typography>
          </div>
        ))}
      </Box>
    </div>
  )
}

export default Result
