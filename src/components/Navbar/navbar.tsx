import { NavLink } from "react-router";
import './navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="page-links">
                <NavLink to="/employees">Employees</NavLink>
                <NavLink to="/organization">Organization</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;