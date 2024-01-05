// Home.jsx
import React, { useEffect } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Cards from '../components/Cards';

const Home = ({ data, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header />
      <MainSection />
      <Cards data={data} />
    </>
  );
};

export default Home;
