import React from 'react';
// import "./styles.css";
import {Navbar,HeroSection,Categories,Popular,Home,Books,Contact,SignUp,Login,Footer} from './components/';
import {Box} from '@mui/material';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from 'react-router-dom';

function App() {
  return( 
    <>
  <Navbar />
  <div className='app'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Books />} />
      <Route path="popular" element={<Popular />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>

   {/* <HeroSection /> */}
   <Categories />
   <Popular />
   <Footer />
  </div>
  </>
  );
}

export default App;
