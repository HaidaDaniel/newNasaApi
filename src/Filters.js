import RoverOptionsRadio from './input/RoverOptionsRadio'
import SolOptionSelector from './input/SolOptionSelector'
import CameraOptionSelector from './input/CameraOptionSelector'
import './Filters.css'



function Filters() {
  return (
    <div className='filters'>
      <div className='filterTitleBlock'>
        <h3 className='filterTitle'>Filters</h3>
        <div class="textLineFilter"></div>
      </div>

      <RoverOptionsRadio />
      <SolOptionSelector />
      <CameraOptionSelector />

    </div>
  )
}

export default Filters