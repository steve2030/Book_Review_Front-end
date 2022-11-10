import React from 'react'
import data from '../data'
import Card from './Card'
import BookListHero from './BookListHero'
//import Navbar from './Navbar'
//import Footer from './Footer'
import { useEffect, useState } from 'react'

const BookList = () => {
        
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/author")
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])
    // Object.keys(cardData).map(
    //     (i) => console.log(cardData[i].books[0]["id"],"Hello")
    // )
    const cards = Array.from(cardData).map(item => {
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
    })

    
        return (
            <div>
                <BookListHero />
                <div className='cards-list'>
                    {cards}
                </div>
            </div>
        );
}

export default BookList