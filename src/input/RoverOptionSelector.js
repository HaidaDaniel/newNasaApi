/** @format */

import React,{useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchRoverOptions } from '../store/slicer/RoverOptionsSlice.js'
import { roverStateChange } from '../store/slicer/InputStateSlice'
import { fetchRoverData } from '../store/slicer/RoverDataSlice'



const RoverOptionsSelector = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoverOptions())
     dispatch(fetchRoverData('Curiosity'))
}, [dispatch])

  const roverOptions = useSelector((state) => state.roverOptions)
  
  
  const selectedRover = useSelector(state => state.InputState.rover)


  const data = useSelector(state => state);
  console.log(data)

     
    
  
  
  const handleRoverChange = (event) => {
    dispatch(roverStateChange(event.target.value))
      dispatch(fetchRoverData(event.target.value))
      

  }
 

  

  
  return (
    <div>
      <label htmlFor='rover-select'>Select a rover:</label>
      <select value={selectedRover} onChange={handleRoverChange}>
        {roverOptions.roverOptions?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    
  )
}

export default RoverOptionsSelector
