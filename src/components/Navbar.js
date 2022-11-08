import { Link } from "react-router-dom";

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="home"> Home </Link>
        <ul>
            <li>
                <Link to="/book">Books</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
}