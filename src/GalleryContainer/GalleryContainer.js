/** @format */

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { pageStateIncrement, pageStateRefresh } from '../store/slicer/InputStateSlice'
import MarsPhoto from '../MarsPhoto'
import PhotoModal from '../PhotoModal'
import './GalleryContainer.css'


const apiKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'

function GalleryContainer() {
  const dispatch = useDispatch()

  let rover = useSelector((state) => state.InputState.rover)
  let sol = useSelector((state) => state.InputState.sol)
  let camera = useSelector((state) => state.InputState.camera)
  let page = useSelector((state) => state.InputState.page)

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
      console.log('pageFetch', fetchUrl)
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
            console.log(response)
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
    console.log('usualFetch', fetchUrl)
    console.log(rover, 'sol=', sol, 'camera=', camera, 'page=', page)
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
      {photos && <>{photos?.map((photo, index) => (
        <MarsPhoto key={index} photo={photo} onClick={() => openModal(index)} />

      ))}</>}


      {photos.length > 1 && (
        <PhotoModal
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