import React from 'react';
import "./styles.css";
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Review from './components/Review';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Contact from './components/Contact';
import BookList from './components/BookList';
import Popular from './components/Popular';
import SignUp from './components/SignUp';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';


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

  </div>
  </>
  );
}

export default App;
