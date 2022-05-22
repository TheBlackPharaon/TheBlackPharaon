import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><BsLinkedin /></a>
        <a href=""><FaGithub /></a>
        <a href=""><FaInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer