/** @format */

import React from 'react'
import './index.css'

const GenericSelector = ({
  options,
  value,
  onChange,
  title,
  id,
  additionalOption,
}) => {
  return (
    <div>
      <label className='selectorlabel' htmlFor={title}>
        {title}
      </label>

      <select
        className='genericSelector'
        id={id}
        value={value}
        onChange={onChange}>
        {additionalOption}
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GenericSelector
