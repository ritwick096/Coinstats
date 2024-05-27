import React from "react";
import "./Description.css";
import video1 from "./assets/video1.mp4";

const Descrition = () => {
  return (
    <div className="des-wrapper">
      <div className="des-heading">
        <h1>All-In-One Crypto Tracker</h1>
        <p>
          We’re the only platform on the market that supports all major crypto
          platforms and protocols.
        </p>
      </div>
      <div className="bottom-des">
        <div className="left-des">
          <h2 className="des-subheading">Stay on top of crypto. All the time, any time.</h2>
          <p className="des-text">Please keep me updated by email with the latest crypto news, research findings, reward programs, event updates, coin listings and more information from CoinMarketCap.</p>
          <input className="des-email" type="text" placeholder="Enter your email" required />
          <button className="sub">Subscribe</button>
        </div>
        <div className="right-des">
          <video width="750" height="500" muted loop autoPlay>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Descrition;
