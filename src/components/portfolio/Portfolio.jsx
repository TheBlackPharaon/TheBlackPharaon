import React from 'react'
import './portfolio.css'
import clock from '../../assets/portfolio/clock.png'
import shoppingcart from '../../assets/portfolio/shoppingcart.png'
import rolexwine from '../../assets/portfolio/rolexwine.png'


const devdata = [
  {
    id: '1',
    image: clock,
    title: 'Analog & Digital Clock',
    github: 'https://github.com/othnielaghey/analog-digital-clock',
    demo: 'https://othnielaghey.github.io/analog-digital-clock/'
  },
  {
    id: '2',
    image: shoppingcart,
    title: 'Shopping Cart',
    github: 'https://github.com/othnielaghey/JavaScript-Shopping-Cart',
    demo: 'https://othnielaghey.github.io/JavaScript-Shopping-Cart/'
  }
]

const graphicdesigndata = [
  {
    id: '1',
    image: rolexwine,
    title: 'Rolew Wine',
    behance: 'https://www.behance.net/gallery/141977049/What-If-Rolex-Was-A-Branded-Wine',
    instagram: 'https://www.instagram.com/p/CcGV6JBqU4Y/'
  }
]

const Portfolio = () => {
  return (
    <bloc id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <h5>Devlopment</h5>
      <br/>

      <div className="container portfolio__container">
        {
          devdata.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item" >
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

      <br/>
      <br/>
      <h5>Graphic Design</h5>
      <br/>

      <div className="container portfolio__container">
        {
          graphicdesigndata.map(({id, image, title, behance, instagram}) => {
            return (
              <article key={id} className="portfolio__item" >
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={instagram} className="btn" target="_blank">Instagram</a>
                  <a href={behance} className="btn btn-primary" target="_blank">Behance</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </bloc>
  )
}

export default Portfolio