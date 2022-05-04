import { fetchDictionary } from './ActionCreators'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWord } from '../../models/IWord'

interface dataState {
  data: IWord[],
  status: boolean,
  error: string
}

const initialState: dataState = {
  data: [],
  status: false,
  error: ''
}

export const WordSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDictionary.pending.type]: (state) => {
      state.status = true
      state.error = ''
    },
    [fetchDictionary.fulfilled.type]: (state, action: PayloadAction<IWord[]>) => {
      state.status = false
      state.data = action.payload
      state.error = ''
    },
    [fetchDictionary.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = false
      state.error = action.payload
    }
  }
})

export default WordSlice.reducer
