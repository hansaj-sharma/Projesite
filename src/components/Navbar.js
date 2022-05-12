// stryles images
import './Navbar.css'
import Temple from '../assets/temple.svg'

import { Link } from 'react-router-dom'


import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="logo">
                    <img src={Temple} alt="dojo logo" />
                    <span>Projesite</span>
                </li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li>
                    <button className="btn">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    )
}
