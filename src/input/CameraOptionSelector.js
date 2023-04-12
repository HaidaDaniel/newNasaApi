/** @format */

import { useSelector, useDispatch } from 'react-redux'
import { cameraStateChange } from '../store/slicer/InputStateSlice'
import GenericSelector from '../myComponents/GenericSelector/GenerisSelector'

export default function CameraOptionSelector() {

  const dispatch = useDispatch()
  const roverName = useSelector((state) => state.InputState.rover)
  const selectedSol = useSelector((state) => state.InputState.sol)
  const data = useSelector((state) => state.roverData)
  let cameraOptions = data[roverName]?.photos[selectedSol]?.cameras
  const selectedCamera = useSelector((state) => state.InputState.rover.camera)

  console.log(cameraOptions)
  function handleCameraChange(event) {
    dispatch(cameraStateChange(event.target.value))
  }
  const Alloption = () => {
    return <option defaultValue={'selected'} value={''}> AllCameras</option>
  }
  return (
    <div>
      <div>

        {data ? (
          <GenericSelector id={'camera-select'} options={cameraOptions} value={selectedCamera} onChange={handleCameraChange} title={'Camera'} add={<Alloption />} />
        ) : ''}
      </div>


    </div>
  )
}
