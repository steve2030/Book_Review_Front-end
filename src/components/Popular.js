import React from 'react';
import Card from './Card';
import Data from './Data'

export default function Popular() {
    const cards = Data.map(item => {
        return (
            <Card 
                key={item.id}
                item = {item}
            />
        )
    })

    return (
        <div>
            <h1>Popular</h1>
            <div className='cards-list'>
                {cards}
            </div>
        </div>
    );
}