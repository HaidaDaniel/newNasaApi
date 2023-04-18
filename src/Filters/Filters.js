import RoverOptionsRadio from '../input/RoverOptionsRadio'
import SolOptionSelector from '../input/SolOptionSelector'
import CameraOptionSelector from '../input/CameraOptionSelector'
import './Filters.css'



function Filters(props) {
  const { className } = props
  return (
    <div className={className}>
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