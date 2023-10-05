import React from 'react'
import Hero from '../../components/hero/Hero';
import CardDetails from '../../components/CardDetails/CardDetails';
import NewsUpdate from '../../components/NewsUpdate/NewsUpdate';

const Home = () => {
  return (
    <div>
      <Hero />
      <CardDetails />
      <NewsUpdate />
    </div>
  );
}

export default Home