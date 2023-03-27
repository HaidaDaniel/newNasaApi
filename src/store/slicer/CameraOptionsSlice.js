/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const CameraOptionsSlice = createSlice({
  name: 'CameraOptions',
  initialState,
  reducers: {
    setCameraOption(state, action) {
      state = action.payload
    },
  },
})
export const { setCameraOption } = CameraOptionsSlice.actions
export default CameraOptionsSlice.reducer
