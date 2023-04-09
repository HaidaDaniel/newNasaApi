/** @format */

import { useDispatch, useSelector } from 'react-redux'
import { solStateChange } from '../store/slicer/InputStateSlice'
import GenericSelector from '../myComponents/GenericSelector/GenerisSelector'

export default function SolOptionSelector() {
  const dispatch = useDispatch()
  const roverName = useSelector((state) => state.InputState?.rover)
  const selectedSol = useSelector((state) => state.InputState?.sol)
  const data = useSelector((state) => state.roverData)

  let solOptions= data[roverName]?.photos.map(sols=>sols.sol)
  console.log(solOptions)

  
  

  const handleSolChange = (event) => {
    dispatch(solStateChange(event.target.value))
  }

  return (
   
    (<div>
       
       
       <div>
      
        {data?(<GenericSelector id={'sol-select'} options={solOptions} value={selectedSol} onChange={handleSolChange} title={'Sol'} />

        ):<option>loading...</option>}
      
    </div>
    </div>)
  )
}