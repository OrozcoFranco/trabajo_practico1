import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
return (
    <nav className="navbar">
        <Link to="/clientes">
            <button className="nav-button">CLIENTES</button>
        </Link>
        <Link to="/vehiculos">
            <button className="nav-button">VEHÍCULOS</button>
        </Link>
        <Link to="/reparaciones">
            <button className="nav-button">REPARACIONES</button>
        </Link>
    </nav>
    );
};

export default Navbar