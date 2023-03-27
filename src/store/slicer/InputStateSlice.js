/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = { rover: 'Curiosity', sol: '1', camera: '' }


export const InputStateSlice = createSlice({
  name: 'InputState',
  initialState,
  reducers: {
    roverStateChange: (state, action) => {
      state.rover = action.payload
      state.sol = '1'
      state.camera = ''
    },
    solStateChange: (state, action) => {
      state.sol = action.payload
      state.camera = ''
    },
    cameraStateChange: (state, action) => {
      state.camera = action.payload
    },
  },
})
export const { roverStateChange, solStateChange, cameraStateChange } = InputStateSlice.actions;
export default InputStateSlice.reducer
