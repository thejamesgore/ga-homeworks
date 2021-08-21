/* eslint-disable indent */
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar is-light">
            <div className="container">
                <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/wines" className='navbar-item'>Wines 🍷</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar