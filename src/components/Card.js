import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';


export default function Card(props) {
    
    const navigate = useNavigate();
    const navigateToBookDetails = () => {
        navigate('/bookdetails');

    };
    return (
        <div className='card' onClick={navigateToBookDetails}>
            <img className='card-image' src={props.image_url} alt="CardImg"/>
            <div className='card-stats'>
                <span className='genre'>{props.genre}</span>
                <span className='book-rating'>{props.rating}</span>
            </div>
            <h4 className='book-title'>{props.title}</h4>
            <p className='author-info'><em>By {props.name}</em></p>
        </div>
    );
}