<<<<<<< HEAD
import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar
=======
export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="home"> Home </a>
        <ul>
            <li>
                <a href="/book">Books</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
}
>>>>>>> origin/development
