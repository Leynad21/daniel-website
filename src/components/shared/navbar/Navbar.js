import React, { useState, useRef } from 'react'
import "./navbar.css"
import logoImg from "../../../assets/images/logo_1-nobg.png"
import { FaBars, FaTimes } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const NavRef = useRef()
    const [hide, setHide] = useState(false)

    const showNavBar = () => {
        NavRef.current.classList.toggle("responsive-nav")
    }

    const hideElement = () => {
        setHide((prev) => !prev)
    }


    return (
        <header id="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <HashLink to={"/#hero"} >
                        <img src={logoImg} alt="daniel_logo" />
                    </HashLink>
                </div>

                <nav ref={NavRef} className='navbar__list'>
                    <HashLink to={"/#about"} >About</HashLink>
                    <HashLink to={"/#portfolio"}>Projects</HashLink>
                    <HashLink to={"/#contact"}>Contact</HashLink>
                    <button className='nav-btn nav-close-btn' onClick={() => { showNavBar(); hideElement() }}>
                        <FaTimes />
                    </button>
                </nav>
                <button className={`nav-btn nav-close-btn ${hide && 'hide-element'}`} onClick={() => { showNavBar(); hideElement() }}
                >
                    <FaBars />
                </button>
            </div>


        </header>
    )
}

export default Navbar