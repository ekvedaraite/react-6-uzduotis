// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Form from './pages/Form';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://robust-safe-crafter.glitch.me/');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home data={data} fetchData={fetchData} />}
        />
        <Route
          path='/form'
          element={<Form fetchData={fetchData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
