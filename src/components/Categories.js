import React from 'react';
import image1 from '../images/icons8-academic-64 1.svg';
import image2 from '../images/icons8-poetry-64 1.svg';
import image3 from '../images/icons8-journal-64 1.svg';
import image4 from '../images/icons8-ibooks-64 1.svg'; 

const Categories = () => {
  return (
    <div className='categories'>
      <h1>Categories</h1>
      <div className='card-categories'>
      <div className='book-types'><img src={image1} className="image1" alt="" /><p>Academic</p></div>  
      <div className='book-types'><img src={image2} className="image2" alt="" /><p>Poetry</p></div> 
      <div className='book-types'><img src={image3} className="image3" alt="" /><p>Journal</p></div>
      <div className='book-types'><img src={image4} className="image4" alt="" /><p>Fiction</p></div> 

    </div>
    </div>
   
  )
}

export default Categories