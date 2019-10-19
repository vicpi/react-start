import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
    return <div className="footer">
        <ul className="menu">
            <li>
                <Link to="/">Main</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </div>
}

export default Footer