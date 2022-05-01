import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
  const { data, status } = useSelector((state) => state.data)
  console.log(data)

  return (
    <div>
      {status === 'loading' && <h2>Loading...</h2>}
      {data.map(() => (
        <div key={1}>
          {data[0].word}
        </div>
      ))}
    </div>
  )
}

export default Result
