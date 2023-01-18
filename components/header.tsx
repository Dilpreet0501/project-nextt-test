// import './style1.css'
import React from 'react'

function Header() {
  return (
    <header>
      <div className="nav-bar">
        <a href="#" className="logo">Aman</a>
        <div className="navigation">
          <div className="nav-items">
            {/* <div className="nav-close-btn"></div> */}
            <a  href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">skills</a>
            <a href="#project">project</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        {/* <div className="nav-menu-btn"></div> */}
      </div>
    </header>
  );
}

export default Header
