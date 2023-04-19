/** @format */

import { useSelector, useDispatch } from 'react-redux'
import { cameraStateChange } from '../store/slicer/InputStateSlice'
import GenericSelector from '../GenericComponents/GenericSelector/GenerisSelector'

export default function CameraOptionSelector() {

  const dispatch = useDispatch()
  const roverName = useSelector((state) => state.InputState.rover)
  const selectedSol = useSelector((state) => state.InputState.sol)
  const data = useSelector((state) => state.roverData)
  // let cameraOptions = data[roverName]?.photos[selectedSol]?.cameras
  const selectedCamera = useSelector((state) => state.InputState.rover.camera)
  const cameraOptions = data[roverName]?.photos.find(photo => photo.sol === parseInt(selectedSol)).cameras;



  function handleCameraChange(event) {
    dispatch(cameraStateChange(event.target.value))
  }
  const Alloption = () => {
    return <option value={''} selected> AllCameras</option>
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
