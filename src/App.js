
import React from 'react';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Review from './components/Review';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';
import BookList from './components/BookList';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/booklist'element={<BookList />}/>
        <Route path='./bookdetails' element={<BookDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
