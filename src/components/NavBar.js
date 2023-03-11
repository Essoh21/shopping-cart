import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li><Link to="Shop">Shop</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;