import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { RoverDataSlice } from './slicer/RoverDataSlice'
import { FiltersStateSlice } from './slicer/FiltersStateSlice'
import { RoverOptionsSlice } from './slicer/RoverOptionsSlice'

const rootReducer = combineReducers({
  roverOptions: RoverOptionsSlice.reducer,
  roverData: RoverDataSlice.reducer,
  FiltersState: FiltersStateSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})