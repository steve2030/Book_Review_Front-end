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
            <Link to="/" className='links'>Home</Link>
          </li>
          <li>
            <Link to="/booklist" className='links'>BookList</Link>
          </li>
          {/* <li>
            <Link to='/bookdetails' className='links'>Book Details</Link>
          </li> */}
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
}

export default Navbar