import React from 'react'
import woman from '../images/woman-reading.svg'

export default function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='left-container'>
                <h3><em>Welcome</em> To Book Reviews</h3>
                <p>Your one-stop shop to review your favorite books. Comprises a wide collection of novels, academic papers, journals, fiction books, and poetry articles. A great resource for those eager to quench their creative and imaginative thirst.</p>
                <button className='button green hero-btn'>Review Now</button>
            </div>
            <img alt='woman reading' src={woman}/>
        </div>
    );
}