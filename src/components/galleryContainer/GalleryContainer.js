/** @format */

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { pageStateIncrement, pageStateRefresh } from '../../store/slicer/FiltersStateSlice'
import MarsPhoto from '../marsPhoto/MarsPhoto'
import PhotoModalContent from '../photoModalContent/PhotoModalContent'
import './GalleryContainer.css'


const apiKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'

function GalleryContainer() {
  const dispatch = useDispatch()

  let rover = useSelector((state) => state.FiltersState.rover)
  let sol = useSelector((state) => state.FiltersState.sol)
  let camera = useSelector((state) => state.FiltersState.camera)
  let page = useSelector((state) => state.FiltersState.page)

  const [photos, setPhotos] = useState([])
  const [allphotos, setAllphotos] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [modalimgIsOpen, setModalImgIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalImgIsOpen(true);
  };

  const closeModal = () => {
    setModalImgIsOpen(false);
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < photos.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  let cam
  if (camera === '') {
    cam = ''
  } else {
    cam = `&camera=${camera}`
  }

  let fetchUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}${cam}&page=${page}&api_key=${apiKey}`

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true)
    }
  }


  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])


  useEffect(() => {
    if (fetching & !allphotos) {
      dispatch(pageStateIncrement())
      axios(fetchUrl)
        .then((response) => {
          if (response.data.photos.length === 0) {
            setAllphotos(true)
            console.log(
              `No photos available for this page. Please choose another camera or sol.`
            )
          }

          if (response.data.photos.length < 25) {
            setAllphotos(true)
            setPhotos((prevPhotos) => [...prevPhotos, ...response.data.photos])
          }

          else {
            setPhotos((prevPhotos) => [...prevPhotos, ...response.data.photos])
            setFetching(false)
          }
        })
        .catch((error) => console.error(error))
    }
  }, [fetching])


  useEffect(() => {

    dispatch(pageStateRefresh())
    setFetching(false)
    setAllphotos(false)
    setPhotos([])
    axios(fetchUrl)
      .then((response) => {
        if (response.data.photos.length === 0) {
          console.log(
            `No photos available for sol ${sol} and(or) camera ${camera}. Please choose another camera or sol.`
          )
          setPhotos([])
          setAllphotos(false)
        }
        if (response.data.photos.length < 25) {
          setAllphotos(true)
          setFetching(false)
          setPhotos(response.data.photos)

        }
        else {
          setPhotos(response.data.photos)

        }
      })
      .catch((error) => console.error(error))



  }, [rover, sol, camera])

  return (
    <div className='gallery-container'>
      <div className="textLineMain"></div>
      {photos && <>{photos?.map((photo, index) => (
        <MarsPhoto key={index} photo={photo} onClick={() => openModal(index)} />

      ))}</>}
      {photos.length > 1 && (
        <PhotoModalContent
          isOpen={modalimgIsOpen}
          onRequestClose={closeModal}
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
          currentImageIndex={currentImageIndex}
          photos={photos}
        />
      )}

    </div>
  )
}

export default GalleryContainer