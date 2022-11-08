import React from 'react';
import "./styles.css";
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Review from './components/Review';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';

function App() {
  return( 
    <>
  <Navbar />
  <div className='app'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Books />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  </div>
  </>
  );
}

export default App;
