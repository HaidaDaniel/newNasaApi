import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { solStateChange } from '../../store/slicer/FiltersStateSlice'
import { cameraStateChange } from '../../store/slicer/FiltersStateSlice'
import { fetchRoverOptions } from '../../store/slicer/RoverOptionsSlice.js'
import { roverStateChange } from '../../store/slicer/FiltersStateSlice'
import { fetchRoverData } from '../../store/slicer/RoverDataSlice'
import GenericRadio from '../generic/radio/GenericRadio'
import GenericSelector from '../generic/selector/GenericSelector'
import './Filters.css'


function Filters(props) {
  const { className } = props

  const dispatch = useDispatch()
  const roverName = useSelector((state) => state.FiltersState?.rover)
  const selectedSol = useSelector((state) => state.FiltersState?.sol)
  const data = useSelector((state) => state.roverData)
  const selectedCamera = useSelector((state) => state.FiltersState.rover.camera)
  const cameraOptions = data[roverName]?.photos.find(photo => photo.sol === parseInt(selectedSol)).cameras;
  const solOptions = data[roverName]?.photos.map(sols => sols.sol)
  useEffect(() => {
    dispatch(fetchRoverOptions())
    dispatch(fetchRoverData('Curiosity'))
  }, [dispatch])

  const roverOptions = useSelector((state) => state.roverOptions.roverOptions)

  const selectedRover = useSelector(state => state.FiltersState.rover)

  const handleRoverChange = (event) => {
    dispatch(roverStateChange(event.target.value))
    dispatch(fetchRoverData(event.target.value))
  }



  const handleSolChange = (event) => {
    dispatch(solStateChange(event.target.value))
  }
  function handleCameraChange(event) {
    dispatch(cameraStateChange(event.target.value))
  }
  const Alloption = () => {
    return <option value={''} selected > AllCameras</option>
  }

  return (
    <div className={className}>
      <div className='filterTitleBlock'>
        <h3 className='filterTitle'>Filters</h3>
        <div class="textLineFilter"></div>
      </div>
      <GenericRadio options={roverOptions} title={'Rover'} onChange={handleRoverChange} selectedOption={selectedRover} />
      <div>
        <GenericSelector id={'sol-select'} options={solOptions} value={selectedSol} onChange={handleSolChange} title={'Sol'} />
      </div>
      <GenericSelector id={'camera-select'} options={cameraOptions} value={selectedCamera} onChange={handleCameraChange} title={'Camera'} additionalOption={<Alloption />} />
    </div>
  )
}

export default Filters