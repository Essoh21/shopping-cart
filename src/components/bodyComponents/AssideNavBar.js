import { Link } from "react-router-dom"

const AssideNavBar = (props) => {
    return (
        <nav className="AssideNavBar">
            <h4 style={{ color: "#555", textTransform: "uppercase" }}>Cathegories</h4>
            <ul>
                <li><Link to="Basket">KuroKos Basket</Link></li>
                <li><Link to="Planet">Planets</Link></li>
                <li><Link to="Actor">Super Mens</Link></li>
                <li><Link to="Foot">Foot Players</Link></li>
            </ul>
        </nav>
    )
}

export default AssideNavBar