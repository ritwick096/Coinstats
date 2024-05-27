import React from 'react'
import './Navbar.css'
import logo from './assets/logo_website.png'
import DarkMode from './DarkMode'

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div className="left">
        <img src={logo} alt="Logo" />
        <h1 className='first'>Coin</h1>
        <h1 className="second">Stats</h1>
      </div>
      <div className="right">
        <DarkMode />
      </div>
    </div>
  )
}

export default Navbar