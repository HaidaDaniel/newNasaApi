/** @format */

import { useSelector, useDispatch } from 'react-redux'
import { cameraStateChange } from '../store/slicer/InputStateSlice'

export default function CameraOptionSelector() {
  const all = 'AllCameras'
  const dispatch = useDispatch()
  const roverName = useSelector((state) => state.InputState.rover)
  const selectedSol = useSelector((state) => state.InputState.sol)
  const data = useSelector((state) => state.roverData)
  let cameraOptions = data[roverName]?.photos[selectedSol].cameras
  const selectedCamera = useSelector((state) => state.InputState.rover.camera)
  
  
  function handleCameraChange(event) {
    dispatch(cameraStateChange(event.target.value))
  }

  return (
    <div>
      <label htmlFor='camera-select'>Select a camera:</label>
      <select
        id='camera-select'
        value={selectedCamera}
        onChange={handleCameraChange}>
        {data ?( <option value={''}> {all}</option>, 
          cameraOptions?.map((cameraName) => (
          <option key={cameraName} value={cameraName}>
            {cameraName}
          </option>
        ))):(<option>Loadind... </option>)}
      </select>
    </div>
  )
}
