import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection';
import Categories from './Categories';
import Popular from './Popular';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categories />
      <Popular />
      <Footer />
    </div>
  );
}

export default Home