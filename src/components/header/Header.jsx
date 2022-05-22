import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
  <header>
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Othniel Aghey</h1>
      <h5 className="text-light">Developer, Graphic Designer, Video Editor, Creative.</h5>
      <CTA />
      <HeaderSocials />
      
      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  </header>
  )
}

export default Header