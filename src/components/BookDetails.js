import React from 'react'
import image from '../images/retro-image.png'
import RelatedBooks from './RelatedBooks';


const BookDetails = () => {
  return (
    <div>
        <div className='book-data'>
          <img src={image}/>
          <div className='book-details'>
            <h2 className='book-title review-page'>1984 Orwell</h2>
            <p className='author-info review-page'><em>By Robert Harris</em></p>
            <p className='review-page'>Description</p>
            <div className='review-page span-element'>
              <p><em>Fiction</em></p>
              <p>4.5</p>
            </div>
            <p>Your one-stop shop to review your favorite books. Comprises a wide collection of novels, academic papers, journals, fiction books, and poetry articles. A great resource for those eager to quench their creative and imaginative thirst.</p>
            <div className='buttons review'>
              <button className=' green book-btn'>Review Book</button>
              <button className=' red book-btn'>Delete Book</button>
            </div>
          </div>
        </div>
        <RelatedBooks />
    </div>
  );
}

export default BookDetails