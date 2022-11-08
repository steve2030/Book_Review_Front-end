<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar
=======
=======
import { Link } from "react-router-dom";

>>>>>>> origin/collaborator22
export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="home"> PICK BOOK </Link>
        <ul>
            <li>
                <Link to="/book">Books</Link>
            </li>
            <li>
                <Link to="/book">Popular</Link>
            </li>

            <li>
                <Link to="/contact">Contact</Link>
            </li>

            <li>
                <Link to="/signup"><button>SignUp</button></Link>
            </li>

            <li>
                <Link to="/login"><button>Login</button></Link>
            </li>
        </ul>
    </nav>
}
>>>>>>> origin/development
