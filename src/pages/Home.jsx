import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const Home = ({ fetchData }) => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('All')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    if (filter === 'All') {
      setFilteredData(data)
    } else {
      const filtered = data.filter(property => property.city === filter)
      setFilteredData(filtered)
    }
  }, [data, filter])

  return (
    <>
      <Header title="Property List" subtitle="See all the houses you want!" />
    </>
  )
}

export default Home
