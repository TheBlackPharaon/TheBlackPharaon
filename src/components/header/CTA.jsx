import React from 'react'
import CV from '../../assets/cvavril2022.pdf'

const CTA = () => {
  return (
    <div className="cta">
        {/*<a href={CV} download className="btn">Download CV</a>*/}
        <a href="#portfolio" className="btn">Portfolio</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    
    </div>
  )
}

export default CTA