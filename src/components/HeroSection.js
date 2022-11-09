import React from 'react'
import image from '../images//Woman reading-pana 1.svg';


const HeroSection = () => {
  return ( 
  <div className="herosection">
       <div className='herocontainer'>
        <h2 className='header'> Welcome To Book Reviews</h2>
        <p >A review gives the reader a concise summary of the content. 
            This includes a relevant description of the topic as well as its overall perspective, 
            argument, or purpose</p>
            <button type="button" class="btn btn-primary">Review Now</button>

       </div>
       <img src={image} className="image" alt="woman" />
        
    </div>
   
  )
}



export default HeroSection