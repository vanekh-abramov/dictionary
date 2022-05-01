import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../constants/internalLinks'

export const fetchDictionary = createAsyncThunk(
  'data/fetchData',
  async function (inp, { rejectWithValue }) {
    try {
      const response = await fetch(API + inp)
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const setError = (state, action) => {
  state.status = 'rejected'
  state.error = action.payload
}

const toolkitSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: null,
    error: null
  },
  extraReducers: {
    [fetchDictionary.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchDictionary.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.data = action.payload
    },
    [fetchDictionary.rejected]: setError
  }
})

export default toolkitSlice.reducer
