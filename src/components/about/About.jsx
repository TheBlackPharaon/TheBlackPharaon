import React from 'react'
import './about.css'
import ME from '../../assets/profilepic01.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div class="container about__container">
        <div className="about__me">
          <img className="about__me-image" src={ME} alt="about__me" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          Quis id id exercitation magna duis culpa velit quis nulla tempor. Ad reprehenderit 
          sunt elit duis tempor veniam non voluptate sit pariatur aliqua cupidatat pariatur. 
          Laboris cillum mollit aute proident mollit ex amet duis minim velit. Excepteur ad qui 
          Lorem magna. Qui velit veniam ea reprehenderit ad commodo labore ea occaecat excepteur
           sit dolor.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About