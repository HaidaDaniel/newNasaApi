import React from 'react'
import './MarsPhoto.css'

function MarsPhoto(props) {
  const { photo, onClick } = props
  const handleClick = () => {
    onClick(photo.id)
  }


  return (
    <img className='img'
      key={photo.id}
      src={photo.img_src}
      alt={`somePhotos`}
      onClick={handleClick}
    />
  )
}

export default MarsPhoto

// Mars Rover ${photo.name} - ${photo.camera.name}