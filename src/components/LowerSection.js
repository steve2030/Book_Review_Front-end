import React from 'react'
import {Link} from 'react-router-dom'

export default function LowerSection() {
    return (
        // <div className='lower-section'>
        //     <div className='lower-section-content'>
        //         <p>Your one-stop shop to review your favorite books. Comprises a wide collection of novels, academic papers, journals, fiction books, and poetry articles. A great resource for those eager to quench their creative and imaginative thirst.</p>
                
        //         <Link to="/booklist" className='links'>
        //         <button className='button green hero-btn lower-section-btn'>Review Now</button>
        //         </Link>
        //     </div>
        // </div>
        <div className='lower-section'>
            <div className="bg">
                <div className='callAction'>
            <div>
            <p className='text-center text-white'>Your one-stop shop to review your favorite books. Comprises a wide collection of novels, academic papers, journals, fiction books, and poetry articles. A great resource for those eager to quench their creative and imaginative thirst.</p>

            </div>                
                <div className=' d-flex justify-content-center align-items-center'>
                    <Link to="/booklist" className='links action-btn'>
                    <button className='btn btn-primary'>Review Now</button>
                    </Link>  
                </div>  
            </div>      
            </div>
             

        </div>
    );
}