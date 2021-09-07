import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'

const NavBar = () => {
    return (
        <BrowserRouter>
        <div>
        <nav class='top'>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">GALLERY</Link></li>
                <li><Link to="/contact">MENU</Link></li>
                <li><Link to="/events">ABOUT</Link></li>
            </ul>
        </nav>
        </div>
        </BrowserRouter>
    )
}

export default NavBar;