import React from "react";
import "./Navbar.css"
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <div>Getware</div>
        
        <div><Toggle /></div>
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
            <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}>
            <li>Services</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true}>
            <li>Experience</li>
            </Link>
            <Link spy={true} to='portfolio' smooth={true}>
            <li>Portfolio</li>
            </Link>
            <Link spy={true} to='Testimonials' smooth={true}>
            <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button">Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;
