import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img className='card-image' src={props.item.image_url}/>
            <div className='card-stats'>
                <span className='genre'>{props.item.genre}</span>
                <span className='book-rating'>{props.item.rating}</span>
            </div>
            <h4 className='book-title'>{props.item.title}</h4>
            <p className='author-info'><em>By {props.item.author}</em></p>
        </div>
    );
}