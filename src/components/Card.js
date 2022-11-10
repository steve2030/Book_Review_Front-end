import React from 'react'
import { useNavigate } from 'react-router-dom';
import hero from "../css/hero.css"


export default function Card(props) {
    
    const navigate = useNavigate();
    const navigateToBookDetails = () => {
        navigate(`/bookdetails/${props.book_id}`);

    };
    return (
        // <div className='card' onClick={navigateToBookDetails}>
        //     <img className='card-image' src={props.image_url} alt="CardImg"/>
        //     <div className='card-stats'>
        //         <span className='genre'>{props.genre}</span>
        //         <span className='book-rating'>{props.rating}</span>
        //     </div>
        //     <h4 className='book-title'>{props.title}</h4>
        //     <p className='author-info'><em>By {props.name}</em></p>
        // </div>
        <div className="col-md-4">
            <div className="my-3">
                <img src={props.image_url}  onClick={navigateToBookDetails} alt="" />
                <p className='text-muted h6'><em>{props.genre}</em></p>
                <p>{props.title}</p>
                <p className="author">{props.name}</p>
            </div>
        </div>
      
    );
}