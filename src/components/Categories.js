import React from 'react'
import image1 from '../images/icons8-ibooks-64 1.svg'; 
import image2 from '../images/icons8-poetry-64 1.svg';
import image3 from '../images/icons8-journal-64 1.svg';

const Categories = () => {
  return (
    <div className='categories'>
      <div className="card">
        <img src={image1} className="image1" alt=""/>
        <img src={image2} className="image2" alt=""/>
        <img src={image3} className="image3" alt=""/>


      </div>  

    </div>
  )
}

export default Categories