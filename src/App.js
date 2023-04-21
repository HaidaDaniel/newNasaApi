/** @format */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css'
import WelcomePage from './WelcomePage/WelcomePage'
import GalleryPage from './GalleryPage/GalleryPage';





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
