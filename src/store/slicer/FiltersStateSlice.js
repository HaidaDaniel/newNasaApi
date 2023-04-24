/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = { rover: 'Curiosity', sol: 1, camera: '', page: '1' }


export const FiltersStateSlice = createSlice({
  name: 'FiltersState',
  initialState,
  reducers: {
    roverStateChange: (state, action) => {
      state.rover = action.payload
      state.sol = 1
      state.camera = ''
      state.page = 1
    },
    solStateChange: (state, action) => {
      state.sol = action.payload
      state.camera = ''
      state.page = 1
    },
    cameraStateChange: (state, action) => {
      state.camera = action.payload
    },
    pageStateIncrement: (state) => {
      state.page += 1
    },
    pageStateRefresh: (state) => {
      state.page = 1
    }
  },
})
export const { roverStateChange, solStateChange, cameraStateChange, pageStateIncrement, pageStateRefresh } = FiltersStateSlice.actions;
export default FiltersStateSlice.reducer
