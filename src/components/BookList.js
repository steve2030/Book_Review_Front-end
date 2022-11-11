import React from 'react'
//import data from '../data'
import Card from './Card'
import BookListHero from './BookListHero'
//import Navbar from './Navbar'
//import Footer from './Footer'
import { useEffect, useState } from 'react'

const BookList = () => {
        
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/book")
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])
    const cards = cardData.map(item => {
        return (
            <Card 
                key={item.id}
                id = {item.id}
                image_url = {item.image_url}
                genre = {item.genre}
                rating = {item.pages}
                title = {item.title}
                name = {item.name}
            />
        )
    })
    

    
        return (
            <div>
                <BookListHero />
                <div className='container'>
                    <div className='row mx-5'>
                        {cards}
                    </div>

                </div>
              
            </div>
        );
}

export default BookList