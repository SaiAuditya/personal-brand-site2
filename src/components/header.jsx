import React, { useState } from "react";
import "./header.css";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">

                <div className="logo">
                    <a href="#">My Portfolio</a>
                </div>


                <nav className="desktop-nav">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>


                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="menu-icon"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>


            {isOpen && (
                <nav className="mobile-nav">
                    <div className="mobile-nav-links">
                        <a href="#home" className="nav-link">Home</a>
                        <a href="#skills" className="nav-link">Skills</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
