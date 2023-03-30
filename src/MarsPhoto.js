import React from 'react'
import'./MarsPhoto.css'

function MarsPhoto(props) {
  const { photo } = props

  return (
    <img className='img'
      key={photo.id}
      src={photo.img_src}
      alt={`somePhotos`}
    />
  )
}

export default MarsPhoto

// Mars Rover ${photo.name} - ${photo.camera.name}