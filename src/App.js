/** @format */

import React from 'react'

import MarsPhotos from './MarsPhotos'
import RoverOptionSelector from './input/RoverOptionSelector'
import SolOptionSelector from './input/SolOptionSelector'
import CameraOptionSelector from './input/CameraOptionSelector'



function App() {
  return (
    <div className='App'>
      <RoverOptionSelector />
      <SolOptionSelector />
      <CameraOptionSelector />
      <MarsPhotos />
    </div>
  )
}

export default App
