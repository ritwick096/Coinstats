import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="left-footer">
        <h1 className='left-heading'>CoinStats</h1>
        <p className='left-para'>Kolkata, West Bengal, India</p>
        <p className='left-para'>2023, All Rights Reserved</p>
      </div>
      <div className="right-footer">
        <h1 className="right-heading">Company</h1>
        <p className="right-para">Kolkata, West Bengal, India</p>
        <p className="right-para">Privacy Policy</p>
        <p className="right-para">+91-98765-43210</p>
        <p className="right-para">info@coinstats.com</p>
      </div>
    </div>
  )
}

export default Footer