import React, { useState, useEffect } from 'react'

import { Content } from './components/Content'
import { Sidebar } from './components/Sidebar'

import './App.css'

function App() {
  const [image, setImage] = useState('/Shimeji-play-ground.png');

  const KEY = import.meta.env.VITE_NASA_API_KEY;

  return (
  <>
    <div className="container">
      <Content imageUrl={image}></Content>
      <Sidebar></Sidebar>
    </div>
  </>
  )
}

export default App
