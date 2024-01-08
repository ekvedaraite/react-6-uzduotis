import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Form from './pages/Form';
import MainSection from './components/MainSection';
import Cards from './components/Cards';

function App() {
  const [data, setData] = useState([])
  const [selectedCity, setSelectedCity] = useState('All')

  const fetchData = async () => {
    try {
      const response = await fetch('https://robust-safe-crafter.glitch.me/')
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleCityButtonClick = (city) => {
    setSelectedCity(city)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home fetchData={fetchData} />
              <MainSection
                selectedCity={selectedCity}
                handleCityButtonClick={handleCityButtonClick}
              />
              <Cards data={data} selectedCity={selectedCity} />
            </>
          }
        />
        <Route
          path='/form'
          element={<Form fetchData={fetchData} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
