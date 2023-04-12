/** @format */

import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchRoverOptions } from '../store/slicer/RoverOptionsSlice.js'
import { roverStateChange } from '../store/slicer/InputStateSlice'
import { fetchRoverData } from '../store/slicer/RoverDataSlice'
import './RoverOptionsRadio.css'



const RoverOptionsRadio = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoverOptions())
    dispatch(fetchRoverData('Curiosity'))
  }, [dispatch])

  const roverOptions = useSelector((state) => state.roverOptions)


  const selectedRover = useSelector(state => state.InputState.rover)


  const handleRoverChange = (event) => {
    dispatch(roverStateChange(event.target.value))
    dispatch(fetchRoverData(event.target.value))


  }


  return (

    <div className='radio-group'>
      <h3 className='roverlabel'>Rovers</h3>
      <br />
      {roverOptions.roverOptions?.map((option, index) => (
        <label key={index}>
          <input
            className='radioInput'
            type="radio"
            value={option}
            checked={selectedRover === option}
            onChange={handleRoverChange}
          />
          {option}
        </label>
      ))}




    </div>

  )
}

export default RoverOptionsRadio
