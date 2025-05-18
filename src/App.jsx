import React, { useState, useEffect } from 'react'

import { Content } from './components/Content'

import './App.css'

function App() {
  const [image, setMedia] = useState('/Shimeji-play-ground.png');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const KEY = import.meta.env.VITE_NASA_API_KEY;

  const goBackOneDay = () => {
    setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 1)));
  };
  
  const goForwardOneDay = () => {
    setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 1)));
  };

  const formattedDate = currentDate.toISOString().split('T')[0];

  useEffect(() => {
    async function FetchApi() {
      setLoading(true);
      const url = `https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${formattedDate}`;

      try {
        const res = await fetch(url);
        const apiData = await res.json();

        setData(apiData);

        if (apiData.media_type === 'image') {
          setMedia(apiData.url);
        }
        else if (apiData.media_type === 'other') {
          setMedia(apiData.url);
        }
        else {
          setMedia('/Shimeji-play-ground.png');
        }

        console.log('DATA\n', apiData);

      } catch (error) {
        console.log("API error:", error.message);
      } finally {
        setLoading(false);
      }
    }

    FetchApi();
  }, [formattedDate, KEY]);

  return (
  <>
    {loading ? 
      <div className="loading-container">
        <p className="loading">Loading...</p>
      </div>
      :
      <Content imageUrl={image} goBackOneDay={goBackOneDay} goForwardOneDay={goForwardOneDay} formattedDate={formattedDate} data={data}></Content>
    }
  </>
  )
}

export default App
