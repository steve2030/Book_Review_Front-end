import React from 'react'
import Home from './components/Home'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'

function App() {
  return (
    <div className="App">
      <Home />
      <BookList />
      <BookDetails />
    </div>
  );
}

export default App;
