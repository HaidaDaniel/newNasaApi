import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { RoverDataSlice } from './slicer/RoverDataSlice'
import { InputStateSlice } from './slicer/InputStateSlice'
import { RoverOptionsSlice } from './slicer/RoverOptionsSlice'

const rootReducer = combineReducers({
  roverOptions: RoverOptionsSlice.reducer,
  roverData: RoverDataSlice.reducer,
  InputState: InputStateSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})