import React from 'react'
import Home from './components/Home'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/author")
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])
    
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home 
        
        />}/>
        <Route path='/booklist'element={<BookList 
        
        />}/>
        <Route path='/bookdetails/:id' element={<BookDetails 
        
        />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;