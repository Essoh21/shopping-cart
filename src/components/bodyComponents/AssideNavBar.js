import { Link } from "react-router-dom"

const AssideNavBar = () => {
    return (
        <nav className="AssideNavBar">
            <ul>
                <li><Link to="Kurokos Basket">KuroKos Basket</Link></li>
                <li><Link to="Planets">Planets</Link></li>
                <li><Link to="Super mens">Super Mens</Link></li>
            </ul>
        </nav>
    )
}

export default AssideNavBar