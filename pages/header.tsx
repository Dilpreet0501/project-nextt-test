// import './style1.css'
import React from 'react'
import Styles  from '../styles/header.module.css';
function Header() {
  return (
    <header >
      <div className="nav-bar">
        <a href="#" className="logo"></a>
        <div className="navigation">
          <div className="nav-items">
            {/* <div className="nav-close-btn"></div> */}
            <a  href="../">LOGIN</a>
            <a href="/about">BUY land</a>
            <a href="/skill">SELL land</a>
            <a href="/blog">regsterd</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        {/* <div className="nav-menu-btn"></div> */}
      </div>
    </header>
  );
}

export default Header
