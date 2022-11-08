export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="home"> Home </a>
        <ul>
            <li>
                <a href="/Books">Books</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
        </ul>
    </nav>
}