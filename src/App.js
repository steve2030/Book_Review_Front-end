import React from 'react';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Review from './components/Review';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/> 
     <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/BookList' element={<BookList />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
