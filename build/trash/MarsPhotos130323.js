/** @format */

import React, { useState, useEffect } from 'react'
const all = 'AllCameras'
const apiKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'

function MarsPhotos() {
  const [roverOptions, setRoverOptions] = useState([])
  const [rover, setRover] = useState('Curiosity')
  const [solOptions, setSolOptions] = useState([])
  const [sol, setSol] = useState('')
  const [cameraOptions, setCameraOptions] = useState([''])
  const [camera, setCamera] = useState('')
  const [photos, setPhotos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const roverNames = data.rovers.map((rover) => rover.name)
        setRoverOptions(roverNames)
        setRover(roverNames[0])
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    if (rover) {
      fetch(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}/?api_key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          const solNumbers = data.photo_manifest.photos.map(
            (photo) => photo.sol
          )

          setSolOptions(solNumbers)
          setSol('1')

          setCamera('')
        })
        .catch((error) => console.error(error))
    }
  }, [rover])

  useEffect(() => {
    if (rover && sol) {
      fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.photos.length === 0) {
            setError(
              `No photos available for sol ${sol}. Please choose another sol.`
            )
            setCamera('')
            setCameraOptions([all])
          } else {
            setError(null)

            const cameraNames = [
              ...new Set(data.photos.map((photo) => photo.camera.name)),
            ]
            setCameraOptions(cameraNames)
            setCamera('')
          }
        })
        .catch((error) => console.error(error))
    }
  }, [rover, sol])

  useEffect(() => {
    let cam
    if (camera === '') {
      cam = ''
    } else {
      cam = `&camera=${camera}`
    }

    let fetchUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}${cam}&page=1&api_key=${apiKey}`
    console.log(fetchUrl)
    if (rover && sol) {
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.photos.length === 0) {
            setError(
              `No photos available for sol ${sol} and(or) camera ${camera}. Please choose another camera or sol.`
            )
            setPhotos([])
          } else {
            setPhotos(data.photos)
            setError(null)
          }
        })
        .catch((error) => console.error(error))
    }

    console.log(rover, sol, camera)
  }, [rover, sol, camera])

  function handleRoverChange(event) {
    const selectedRover = event.target.value
    setRover(selectedRover)
    setSol('')
    setSolOptions([])
    setCamera('')
    setCameraOptions([])
    setPhotos([])
    setError(null)
  }

  function handleSolChange(event) {
    const selectedSol = event.target.value
    setSol(selectedSol)
    setCamera('')
    setCameraOptions([])
    setPhotos([])
    setError(null)
  }
  function handleCameraChange(event) {
    const selectedCamera = event.target.value
    setCamera(selectedCamera)
    setPhotos([])
    setError(null)
  }

  return (
    <div>
      <h1>Mars Rover Photos</h1>
      <label htmlFor='rover-select'>Select a rover:</label>
      <select id='rover-select' value={rover} onChange={handleRoverChange}>
        {roverOptions.map((roverName) => (
          <option key={roverName} value={roverName}>
            {roverName}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor='sol-select'>Select a sol:</label>
      <select id='sol-select' value={sol} onChange={handleSolChange}>
        {solOptions.map((solNumber) => (
          <option key={solNumber} value={solNumber}>
            {solNumber}
          </option>
        ))}
      </select>
      <br />
      {error && <p>{error}</p>}

      <>
        <label htmlFor='camera-select'>Select a camera:</label>
        <select id='camera-select' value={camera} onChange={handleCameraChange}>
          <option value={''}> {all}</option>
          {cameraOptions?.map((cameraName) => (
            <option key={cameraName} value={cameraName}>
              {cameraName}
            </option>
          ))}
        </select>
        <br />
      </>

      <div className='photo-container'>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.img_src}
            alt={`Mars Rover ${rover} - ${photo.camera.name}`}
          />
        ))}
      </div>
    </div>
  )
}

export default MarsPhotos
