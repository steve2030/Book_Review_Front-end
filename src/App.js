import React from 'react'
import Home from './components/Home'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import FilterCategory from './components/FilterCategory'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import UploadBook from './components/uploadBook'
function App() {
  const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/book")
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
        <Route path='/category/:name' element={<FilterCategory />} />
        {/* <Route path='popular/:id' element={<BookDetails />}/> */}
         <Route path='/upload_book' element={<UploadBook 
        
        />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;