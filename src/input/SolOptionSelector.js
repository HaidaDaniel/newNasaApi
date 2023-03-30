/** @format */

import { useDispatch, useSelector } from 'react-redux'
import { solStateChange } from '../store/slicer/InputStateSlice'

export default function SolOptionSelector() {
  const dispatch = useDispatch()
  const roverName = useSelector((state) => state.InputState?.rover)
  const selectedSol = useSelector((state) => state.InputState?.sol)
  const data = useSelector((state) => state.roverData)
  let solOptions= data[roverName]?.photos
  
  
  

  const handleSolChange = (event) => {
    dispatch(solStateChange(event.target.value))
  }

  return (
    (<div>
      <label htmlFor='sol-select'>Select a sol:</label>
      <select id='sol-select' value={selectedSol} onChange={handleSolChange}>
        {data?(solOptions?.map((sols) => (
          <option key={sols.earth_date} value={sols.sol}>
            {sols.sol}
          </option>
        ))):<option>loading...</option>}
      </select>
    </div>)
  )
}