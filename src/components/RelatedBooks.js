import React from 'react'
import data from '../data'
import Card from './Card'

export default function RelatedBooks() {
    const cardData = data.map(item => {
        return (
            <Card
            key = {item.key} 
            item = {item}
            />
        )
    })
    return (
        <div className='popular'>
            <h3>Related Books</h3>
            <div className='cards-list'>
                {cardData}
            </div>
        </div>
    )
}