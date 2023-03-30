/** @format */

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageStateIncrement, pageStateRefresh } from './store/slicer/InputStateSlice'
import axios from 'axios'
import MarsPhoto from './MarsPhoto'
import'./MarsPhotos.css'

const apiKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'

function MarsPhotos() {
  const dispatch = useDispatch()

  let rover = useSelector((state) => state.InputState.rover)
  let sol = useSelector((state) => state.InputState.sol)
  let camera = useSelector((state) => state.InputState.camera)
  let page = useSelector((state) => state.InputState.page)

const [allphotos, setAllphotos] = useState(false)
const [photos, setPhotos] = useState([])
const [fetching,setFetching] = useState(false)
let cam
if (camera === '') {
  cam = ''
} else {
  cam = `&camera=${camera}`
}

let fetchUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}${cam}&page=${page}&api_key=${apiKey}`

 
    console.log(photos)

  const scrollHandler =(e)=>{
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)<100){
      setFetching(true)
      
      console.log('scroll')
    }
  }
  
  
  useEffect(()=>{
    document.addEventListener('scroll',scrollHandler)
    return function(){
      document.removeEventListener('scroll',scrollHandler)
    }
    },[])
    

    useEffect(()=>{
      if (fetching&!allphotos){
        dispatch(pageStateIncrement())
        console.log('pageFetch',fetchUrl)
        axios(fetchUrl)
          .then((response) => {
            if (response.data.photos.length === 0) {
              setAllphotos(true)
              console.log(
                `No photos available for this page. Please choose another camera or sol.`
              )
              
            }
            if(response.data.photos.length<25){
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
    },[fetching])


  useEffect(() => {
   
   dispatch(pageStateRefresh())
   setFetching(false)
    setAllphotos(false)
    setPhotos([])
    console.log('usualFetch',fetchUrl)
    console.log(rover,'sol=', sol,'camera=', camera,'page=',page)
      axios(fetchUrl)
        .then((response) => {
          if (response.data.photos.length === 0) {
            console.log(
              `No photos available for sol ${sol} and(or) camera ${camera}. Please choose another camera or sol.`
            )
            setPhotos([])
            setAllphotos(false)
          } 
          if(response.data.photos.length<25){
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
console.log(allphotos,fetching)
  return (
    <div className='photo-container'>
      {photos?.map((photo ,index) => (
        <MarsPhoto key={index} photo={photo} />
      ))}
    </div>
  )
}

export default MarsPhotos