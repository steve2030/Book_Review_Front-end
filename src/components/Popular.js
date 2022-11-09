import React from 'react';
import Card from './Card';
import data from '../data'

export default function Popular() {
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
            <h2>Popular</h2>
            <div className='cards-list'>
                {cards}
            </div>
        </div>
    );
}