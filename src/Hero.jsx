import React from 'react'
import './Hero.css'
// import crypto from './assets/crypto.jpg'
import bgv from './assets/bgv.mp4'

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <video id="bgv" width="1570" height="785" muted loop autoPlay>
        <source src={bgv} type="video/mp4" />
      </video>
      {/* <div className="left-hero">
        <img src={crypto} alt="crypto" />
      </div> */}
      <div className="right-hero">
        <h1 className="heading">
            CoinStats
        </h1>
        <h2 className="subheading">
            Cryptocurrency Tracker
        </h2>
        <p className="para">
            All-in-one cryptocurrency tracking app. View the latest prices, changes in the last 24 hours, volume, market capitalization and read the latest crypto news.
        </p>
      </div>
    </div>
  )
}

export default Hero
