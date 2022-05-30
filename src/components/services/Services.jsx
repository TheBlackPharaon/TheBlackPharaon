import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const devservicedata = [
  {
    title: 'Web Integration'
  },
  {
    title: 'Website Conception'
  },
  {
    title: 'Mobile App Conception'
  },
  {
    title: 'Webmastering'
  },
  {
    title: 'Website Redesign'
  },
]

const graphicdesignservicedata = [
  {
    title: 'Logo Conception'
  },
  {
    title: 'Brand Identity'
  },
  {
    title: 'UX/UI Design'
  },
  {
    title: 'Posters, Banners, Flyers'
  },
  {
    title: 'Video Edition'
  },
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
            {
              graphicdesignservicedata.map(({title}, index) => {
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

        </div>
    </section>
  )
}

export default Services