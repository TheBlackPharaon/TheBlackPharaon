import React from 'react'
import './portfolio.css'
import clock from '../../assets/portfolio/clock.png'
import shoppingcart from '../../assets/portfolio/shoppingcart.png'
import rolexwine from '../../assets/portfolio/rolexwine.png'
import ericmo from '../../assets/portfolio/ericmo.png'


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
    link1: 'Instagram',
    link2: 'Behance',
    link2content: 'https://www.instagram.com/p/CcGV6JBqU4Y/',
    link1content: 'https://www.behance.net/gallery/141977049/What-If-Rolex-Was-A-Branded-Wine'

  },
  {
    id: '2',
    image: ericmo,
    title: 'La Chronique D\'EricMo',
    link1: 'Instagram',
    link2: 'YouTube',
    link1content: 'https://www.instagram.com/ericmo14/guide/mes-chroniques/18245589145014301/?utm_medium=copy_link',
    link2content: 'https://www.youtube.com/channel/UCMJXCB9TT8jrPjTdXBYWPbQ',
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
          graphicdesigndata.map(({id, image, title, link1, link2, link1content, link2content}) => {
            return (
              <article key={id} className="portfolio__item" >
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={link1content} className="btn" target="_blank">{link1}</a>
                  <a href={link2content} className="btn btn-primary" target="_blank">{link2}</a>
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