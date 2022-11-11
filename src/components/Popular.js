import React from 'react';
import Card from './Card';
import hero from "../css/hero.css"

//import data from '../data'
import { useState, useEffect } from 'react';

export default function Popular() {

    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/book")
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])
    const cards = cardData.map((item) => {
        // if (cardData.rating > 2){
            return (

                <Card 
                    key={item.id} 
                    id = {item.id}
                    image_url = {item.image_url}
                    genre = {item.genre}
                    // rating = {item.?.pages}
                    title = {item.title}
                    
                />
            )
        // }
    })

    

    return (
        <div className="container mt-3 mb-3">
        <h2 className=" mt-4" ><strong>Popular</strong></h2>
        <div className="row mx-5">
              {cards}
     
    </div>
    </div>

        // <div className='popular'>
        //     <h3>Popular</h3>
        //     <div className='cards-list'>
        //         {cards}
        //     </div>
        // </div>
    );
}