import React from 'react'
import data from '../data'
import Card from './Card'
import BookListHero from './BookListHero'

const BookList = () => {
        const cards = data.map(item => {
            return (
                <Card 
                    key={item.id}
                    item = {item}
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