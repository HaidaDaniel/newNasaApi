/** @format */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css'
import WelcomePage from './pages/welcomePage/WelcomePage'
import GalleryPage from './pages/galleryPage/GalleryPage'


function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
