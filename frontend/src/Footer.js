import React from 'react'
import {Link} from "react-router-dom"
import "./Footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <Link to="#" className="footer__title">Questions? Contact Us</Link>
    
      <ul className="footer__links">
        <li className="footer__link">
          <Link to="#">FAQ</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Investor Relations</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Privacy</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Speed Test</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Netflix Nigeria</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Help Center</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Jobs</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Cookie Preferences</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Legal Notices</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Account</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Ways to Watch</Link></li>
        <li className="footer__link">
          <Link to="#">Corporate Information</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Only on Netflix</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Media Center</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Terms of Use</Link>
        </li>
        <li className="footer__link">
          <Link to="#">Contact Us</Link>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Footer
