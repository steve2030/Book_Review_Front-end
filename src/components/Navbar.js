
import React from 'react'
import { Link } from "react-router-dom"
import logo from '../images/navbar-logo.png'

const Navbar = () => {
  return (
   <header>
      <div className='logo'>
        <img alt='PICK BOOK' src={logo}/>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booklist">BookList</Link>
          </li>
          <li>Add Book</li>
          <li>Contact</li>
        </ul>
    </nav>
    <div className='buttons'>
          <button className='green'>Sign Up</button>
          <button>Login</button>
      </div>
   </header>
  );




