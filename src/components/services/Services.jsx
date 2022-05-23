import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const devservicedata = [
  {
    title: 'Web Integration'
  }
]

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
        
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Development</h3>
            </div>

            <ul className="service__list">
              {
                devservicedata.map(({title}, index) => {
                  return (
                    <li>
                      <BiCheck className="service__list-icon"/>
                      <p>{title}.</p>
                    </li>
                  )
                })
              }
            </ul>
          </article>

          { /* end of web & mobile*/}
          <article className="service">
            <div className="service__head">
              <h3>Graphic Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>UI / UX design.</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Voluptate anim qui laboris et ex mollit esse.</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Voluptate anim qui laboris et ex mollit esse.</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Voluptate anim qui laboris et ex mollit esse.</p>
              </li>
            </ul>
          </article>

        </div>
    </section>
  )
}

export default Services