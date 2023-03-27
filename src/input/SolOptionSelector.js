/** @format */

import { useDispatch, useSelector } from 'react-redux'
import { solStateChange } from '../store/slicer/InputStateSlice'

export default function SolOptionSelector() {
  const dispatch = useDispatch()
  const roverName = useSelector((state) => state.InputState?.rover)
  const selectedSol = useSelector((state) => state.InputState?.sol)
  const data = useSelector((state) => state.roverData)
  let solOptions= data[roverName]?.photos
  //   {data===undefined&&(solOptions = data[roverName].photos.map((sol) => sol))
  //   console.log(solOptions)}
   console.log(data[roverName]?.photos)
  
  

  const handleSolChange = (event) => {
    dispatch(solStateChange(event.target.value))
  }

  return (
    (<div>
      <label htmlFor='sol-select'>Select a sol:</label>
      <select id='sol-select' value={selectedSol} onChange={handleSolChange}>
        {solOptions?.map((sol) => (
          <option key={sol.earth_date} value={sol.sol}>
            {sol.sol}
          </option>
        ))}
      </select>
    </div>)
  )
}