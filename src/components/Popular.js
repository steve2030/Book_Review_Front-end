import React from 'react';
import Card from './Card';
import hero from "../css/hero.css"

//import data from '../data'
import { useState, useEffect } from 'react';

export default function Popular() {

    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/author")
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])
    const cards = Array.from(cardData).map(item => {
        // if (cardData.rating > 2){
            return (

                <Card 
                    key={item.id}
                    image_url = {item.books[0]?.image_url}
                    genre = {item.books[0]?.genre}
                    rating = {item.books[0]?.pages}
                    title = {item.books[0]?.title}
                    name = {item.name}
                />
            )
        // }
    })

    

    return (
        <div className="container mt-3 mb-3">
        <h2 className=" mt-4" ><strong>Popular</strong></h2>
        <div className="row">
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