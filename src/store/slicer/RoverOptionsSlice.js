/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchRoverOptions = createAsyncThunk(
  'RoverOptions/fetchRoverOptions',
  async () => {
    const response = await axios.get(
      'https://api.nasa.gov/mars-photos/api/v1/rovers',
      {
        params: {
          api_key: API_KEY,
        },
      }
    )

    return response.data.rovers.map((rover) => rover.name)
  }
)

export const RoverOptionsSlice = createSlice({
  name: 'RoverOptions',
  initialState: {
    roverOptions: ['Curiosity', 'Spirit', 'Opportunity', 'Perseverance'],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoverOptions.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRoverOptions.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.roverOptions = action.payload
      })
      .addCase(fetchRoverOptions.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default RoverOptionsSlice.reducer
