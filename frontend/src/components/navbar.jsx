import React from 'react'
import style from '@/styles/navbar.module.css'
import { NavLink } from 'react-router-dom'
const navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.navLinks}>
                <li> <NavLink className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ""} `} to="/" >Home</NavLink> </li>
                <li> <NavLink className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ""} `} to="/register">Register</NavLink> </li>
                <li> <NavLink className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ""} `} to="/admin/dashboard">Admin View</NavLink> </li>
            </ul>
        </nav >
    )
}

export default navbar
