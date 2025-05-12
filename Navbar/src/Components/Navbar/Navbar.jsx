import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import AboutPage from '../Pages/About/AboutPage'
import ServicesPage from '../Pages/Service/ServicePage'
import ContactPage from '../Pages/Contact/ContactPage'
import { useState } from 'react'

import './Navbar.css'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Router>
            <nav className='navbar'>
                <div className='navbar-logo'>Website</div>
                <div className='menu' onClick={toggleMenu}>
                    <div className='menu-icon'></div>
                    <div className='menu-icon'></div>
                    <div className='menu-icon'></div>
                </div>
                <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
                    <li>
                        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    )
}

export default Navbar
