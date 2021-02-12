import React from 'react'
import "./Header.css"
import { RiArrowDownSLine } from 'react-icons/ri';

function Header() {
    return (
        <section className="header">
          <div className="logo">
            <img src="/images/logo.png" alt="header"/>
        </div>
        <div className="list">
          <ul>
            <li>English <RiArrowDownSLine /></li>
            
          </ul>
        </div>

        </section>
    )
}

export default Header
