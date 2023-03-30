import RoverOptionSelector from './input/RoverOptionSelector'
import SolOptionSelector from './input/SolOptionSelector'
import CameraOptionSelector from './input/CameraOptionSelector'
import './InputHeader.css'



function InputHeader() {
    return (
      <div className='InputHeader'>
        
        <RoverOptionSelector />
        <SolOptionSelector />
        <CameraOptionSelector />
       
      </div>
    )
  }
  
  export default InputHeader