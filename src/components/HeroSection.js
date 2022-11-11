import React from 'react'
import woman from '../images/woman-reading.svg'
import { Link } from "react-router-dom"
import hero from "../css/hero.css"
//import BookList from './BookList'

export default function HeroSection() {

   
    return (

        

<div className="container">
    <div className="row align-items-center" >
        <div className="col-md-6 col-lg-6">
            <p className="h3 spacing"> <span className='welcome h3'>Welcome</span> To  Book Reviews</p>
            <p className="my-5 lead">A review gives the reader a concise summary of the content. This includes a relevant description of the topic as well as its overall perspective, argument, or purpose.</p>
            <Link>
            <button className="btn btn-primary">
                 Review Now
            </button>   
            </Link>
            

        </div>
        <div className="col-md-6 col-lg-6">
            <img src={woman} className="img-fluid" alt="" />

        </div>

    </div>
</div>




);
}
