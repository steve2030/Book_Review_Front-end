import React from 'react';
import Card from './Card';
//import data from '../data'
import { useState, useEffect } from 'react';

export default function Popular() {

    const [cardData, setCardData] = useState({});
    useEffect(() => {
        fetch("http://localhost:9292/author")
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])

    const cards = Array.from(cardData).map(item => {
        return (
            <Card 
                key={item.id}
                image_url = {item.books.image_url}
                genre = {item.books.genre}
                pages = {item.books.pages}
                title = {item["books"][0]["title"]}
                name = {item["name"]}
            />
        )
    })


    return (
        <div className='popular'>
            <h3>Popular</h3>
            <div className='cards-list'>
                {cards}
            </div>
        </div>
    );
}