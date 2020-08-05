import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Routing Times</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);