import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
            <li className="nav-link"><Link to="/jobs">Your Jobs</Link></li>
            <li className="nav-link"> <Link to="/">Instructions</Link></li>
            <li className="nav-link"><Link to="/sign-up">Sign up</Link></li>
            <li className="nav-link"><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;
