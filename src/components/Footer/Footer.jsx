import React from "react";
import yellowLogo from "../../images/yellowLogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-elem">
          <div className="footer-logo">
            <img src={yellowLogo} alt="" />
            <span>Community</span>
          </div>
          <div className="footer-lists">
            <div>
              <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="year">
        <h2>2021</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
