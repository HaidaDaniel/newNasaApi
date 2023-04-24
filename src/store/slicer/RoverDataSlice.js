/** @format */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'

export const fetchRoverData = createAsyncThunk(
  'roverData/fetchRoverData',
  async (roverName, { getState }) => {
    const data = getState()

    if (data.roverData[data.FiltersState.rover] === undefined) {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${API_KEY}`
      );

      return (response.data.photo_manifest)
    }
    else
      return (data.roverData.FiltersState.rover)

  }
)

export const RoverDataSlice = createSlice({
  name: 'RoverData',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoverData.fulfilled, (state, action) => {
      const roverName = action.meta.arg
      state[roverName] = action.payload
    })
  },
})
