import React from 'react'
import image1 from '../images/icons8-academic-80 1.png';
import image2 from '../images/icons8-poetry-64 1.png';
import image3 from '../images/icons8-journal-64 1.png';
import image4 from '../images/icons8-ibooks-64 1.svg';
import hero from "../css/hero.css"


export default function Categories() {
    return (
    // <div className='categories'>
    //   <h3>Categories</h3>
    //   <div className='card-categories'>
    //   <div className='book-types'><img src={image1} className="image1" alt="" /><p>Academic</p></div>  
    //   <div className='book-types'><img src={image2} className="image2" alt="" /><p>Poetry</p></div> 
    //   <div className='book-types'><img src={image3} className="image3" alt="" /><p>Journal</p></div>
    //   <div className='book-types'><img src={image4} className="image4" alt="" /><p>Fiction</p></div> 
    // </div>
    // </div>
<>

<div className="pagetwo">
    <div className="container my-5">
        <h2 className=""> <strong>Categories</strong></h2>
            <div className="row mt-5 align-items-center text-center">
                
                <div className="col-md-3 ">
                    <div className="cathold">

                        <img src={image1} className="img-fluid mx-auto p-3" alt="" />
                        <p className="text-center my-3">Academic</p>
                </div>
          
            </div>  
            <div className="col-md-3 ">
                    <div className="cathold">

                        <img src={image2} className="img-fluid mx-auto p-3" alt="" />
                        <p className="text-center my-3">Poetry</p>
                </div>
          
            </div>  
            <div className="col-md-3 ">
                    <div className="cathold">

                        <img src={image3} className="img-fluid mx-auto p-3" alt="" />
                        <p className="text-center my-3">Journal</p>
                </div>
          
            </div>  
            <div className="col-md-3 ">
                    <div className="cathold">

                        <img src={image4} className="img-fluid mx-auto p-3" alt="" />
                        <p className="text-center my-3">Fiction</p>
                </div>
          
            </div>  
        </div>
    </div>
    </div>
    
</>
    );
}