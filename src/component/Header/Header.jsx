import React from 'react'
import './Header.css'
import logo from './logo.svg'

let Header = ({isLogoExpanded}) => {
    return (
        <div className="head-container" >
            <img className={`head-logo ${isLogoExpanded? "head-logo-expanded" : "head-logo-contracted"} `}
            src={logo}
            alt="Covid logo" />
            <h1  className={`head-text ${isLogoExpanded? "head-text-expanded" : "head-text-contracted"} `} >Covid Tracker</h1>
        </div>
    )
}

export default Header;