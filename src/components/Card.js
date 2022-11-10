import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img className='card-image' src={props.image_url} alt="CardImg"/>
            <div className='card-stats'>
                <span className='genre'>{props.genre}</span>
                <span className='book-rating'>{props.pages}</span>
            </div>
            <h4 className='book-title'>{props.title}</h4>
            <p className='author-info'><em>By {props.name}</em></p>
        </div>
    );
}