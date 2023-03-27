/** @format */

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'




const apiKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'

function MarsPhotos() {
  let rover = useSelector((state) => state.InputState.rover)
  let sol = useSelector((state) => state.InputState.sol)
  let camera = useSelector((state) => state.InputState.camera)
  // const [rover, setRover] = useState('Curiocity')
  // const [sol, setSol] = useState('')
  // const [camera, setCamera] = useState('')
  const [photos, setPhotos] = useState([])

  // useEffect(() => {
  //   if (rover && sol) {
  //     axios(
  //       `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${apiKey}`
  //     )
  //       .then((response) => {
  //         if (response.data.photos.length === 0) {
  //           alert(
  //             `No photos available for sol ${sol}. Please choose another sol.`
  //           )
  //           setCamera('')
  //           setCameraOptions([all])
  //         } else {
  //           const cameraNames = [
  //             ...new Set(
  //               response.data.photos.map((photo) => photo.camera.name)
  //             ),
  //           ]

  //           setCameraOptions(cameraNames)
  //           setCamera('')
  //         }
  //       })

  //       .catch((error) => console.error(error))
  //   }
  // }, [rover, sol])

  useEffect(() => {
    let cam
    if (camera === '') {
      cam = ''
    } else {
      cam = `&camera=${camera}`
    }

    let fetchUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}${cam}&page=1&api_key=${apiKey}`

    if (rover && sol) {
      axios(fetchUrl)
        .then((response) => {
          if (response.data.photos.length === 0) {
            console.log(
              `No photos available for sol ${sol} and(or) camera ${camera}. Please choose another camera or sol.`
            )
            setPhotos([])
          } else {
            setPhotos(response.data.photos)

            // let cameraCashedNames = roverdata
            //   .find((name) => name === rover)
            //   .photos.find((sol) => sol === sol)
            //   .cameras.map((cameraname) => cameraname)
            // console.log(cameraCashedNames)
          }
        })
        .catch((error) => console.error(error))
    }

    console.log(rover, sol, camera)
  }, [rover, sol, camera])

  return (
    <div className='photo-container'>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.img_src}
          alt={`Mars Rover ${rover} - ${photo.camera.name}`}
        />
      ))}
    </div>
  )
}

export default MarsPhotos
