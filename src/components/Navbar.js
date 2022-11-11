import React from 'react'
import { Link } from "react-router-dom"
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
  //  <header>
  //     <div className='logo'>
  //       <img alt='PICK BOOK' src={logo}/>
  //     </div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/" className='links'>Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/booklist" className='links'>BookList</Link>
  //         </li>
  //         <li>
  //           <Link to='/upload_book' className='links'>Add Book</Link>
  //         </li>
  //         <li>Contact</li>
  //       </ul>
  //   </nav>
  //   <div className='buttons'>
  //         <button className='green'>Sign Up</button>
  //         <button>Login</button>
  //     </div>
  //  </header>
  <>
 <div className="container">
  <nav className="navbar navbar-expand-lg ">
    <div className='logo'>
      <a routerLink="/"><img src={logo}  alt=""/>
      </a>
    </div>
    <a className="navbar-brand" to='/'></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/booklist' >Book List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/upload_book'>Add Book</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" >Contact</Link>
        </li>
     
      </ul>
    </div>
  </nav>

</div> 
  </>
  );
}

export default Navbar