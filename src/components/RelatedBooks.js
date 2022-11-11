import React,{useEffect, useState} from 'react'
import data from '../data'
import Card from './Card'

export default function RelatedBooks() {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/author")
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])
    const cards = Array.from(cardData).map(item => {
        
        return (
            <Card 
                key={item.id}
                image_url = {item.books[0]?.image_url}
                book_id = {item.books[0]?.id}
                genre = {item.books[0]?.genre}
                rating = {item.books[0]?.pages}
                title = {item.books[0]?.title}
                name = {item.name}
            />
        )
    })
    
    return (
        <div className='popular'>
            <h3>Related Books</h3>
            <div className='container'>
                <div className='row'>
                                {cards}
                            </div>
            </div>
           
        </div>
    )
}