import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection';
import Categories from './Categories';
import Popular from './Popular';
import LowerSection from './LowerSection';
//import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Popular />
      <LowerSection />
    </div>
  );
}

export default Home