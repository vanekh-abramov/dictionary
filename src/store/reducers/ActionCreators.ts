import { IWord } from '../../models/IWord'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from '../../constants/internalLinks'

export const fetchDictionary = createAsyncThunk(
  'data/fetchData',
  async (word: string | undefined, thunkAPI) => {
    try {
      const response = await axios.get<IWord>(API + word)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)
