import React from 'react';
import Modal from 'react-modal';
import './MyModal.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';



function MyModal({ isOpen, onRequestClose, handlePrevImage, handleNextImage, currentImageIndex, photos }) {


  console.log(photos[currentImageIndex])
  return (
    <Modal className={'ReactModal'} isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className='modal-block'>
        <div className='modal-imgcontainer'>
          <button className='left' onClick={handlePrevImage}>
            <ArrowBackIosIcon />
          </button>
          <div className='modal-divimg'><img className='modal-image' src={photos[currentImageIndex]['img_src']} alt={photos[currentImageIndex]} /></div>

          <button className='right' onClick={handleNextImage}>
            <ArrowForwardIosIcon />
          </button>
        </div>
        <div className='modal-imgtext'>
          <h3>Camera:{photos[currentImageIndex]['camera']['full_name']}</h3>
          <p>Earth date:{photos[currentImageIndex]['earth_date']}</p>
          <p>Id:{photos[currentImageIndex]['id']}</p>
        </div>
        <button className='modal-close' onClick={onRequestClose}><CloseIcon /></button>
      </div>
    </Modal>
  )
}

export default MyModal