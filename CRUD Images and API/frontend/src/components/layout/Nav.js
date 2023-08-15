import React from 'react';
import { NavLink } from "react-router-dom"
import '../../styles/components/Layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div className='link'><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></div>
            <div className='link'><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink></div>
            <div className='link'><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined}>Novedades</NavLink></div>
            <div className='link'><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></div>
            <div className='link'><NavLink to="/galeria" className={({ isActive }) => isActive ? "activo" : undefined}>Galeria</NavLink></div>
        </nav>
    )
}

export default Nav;