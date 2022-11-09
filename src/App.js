import React from 'react'
import Home from './components/Home'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/booklist'element={<BookList />}/>
        <Route path='/bookdetails' element={<BookDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
