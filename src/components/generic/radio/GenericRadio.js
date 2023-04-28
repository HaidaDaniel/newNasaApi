/** @format */

import React from 'react'
import './index.css'

const GenericRadio = ({ options, value, onChange, title, selectedOption }) => {
    return (
        <div className='radio-group'>
            <h3 className='roverlabel'>{title}</h3>
            <br />
            {options?.map((option, index) => (
                <label key={index}>
                    <input
                        className='radioInput'
                  type='radio'
                  value={option}
                  checked={selectedOption === option}
                  onChange={onChange}
              />
              {option}
          </label>
      ))}
      </div>
    )
}

export default GenericRadio
