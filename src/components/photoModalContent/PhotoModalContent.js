/** @format */

import React from 'react'
import Modal from 'react-modal'
import { useMediaQuery } from 'react-responsive';
import './PhotoModalContent.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'

function PhotoModalContent({
  isOpen,
  onRequestClose,
  handlePrevImage,
  handleNextImage,
  currentImageIndex,
  photos,
}) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <Modal
      className={'photomodalcontent'}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'modal-overlay'}
      >
      <div className='modal-block'>
        <div className='modal-imgslider'>
        {!isSmallScreen && <button className='left' onClick={handlePrevImage}>
            <ArrowBackIosIcon fontSize="large" />
          </button>}
          
          <div className='modal-sliderimg'> 
            <img
              className='modal-image'
              src={photos[currentImageIndex]['img_src']}
              alt={photos[currentImageIndex]}
            />
          </div>
          {isSmallScreen && <button className='left' onClick={handlePrevImage}>
            <ArrowBackIosIcon fontSize="medium" />
          </button>}
          {isSmallScreen &&  <button className='right' onClick={handleNextImage}>
            <ArrowForwardIosIcon fontSize="medium" />
          </button>}
          {!isSmallScreen && <button className='right' onClick={handleNextImage}>
            <ArrowForwardIosIcon fontSize="large" />
          </button>}
          
        </div>
        <div className='modal-imgtext'>
          <p>{photos[currentImageIndex]['camera']['full_name']}</p>
          <br />
          <p>Earth date:{photos[currentImageIndex]['earth_date']}</p>
          <p>Id:{photos[currentImageIndex]['id']}</p>
        </div>
        <button className='modal-close' onClick={onRequestClose}>
          <CloseIcon fontSize="large" />
        </button>
      </div>
    </Modal>
  )
}

export default PhotoModalContent
