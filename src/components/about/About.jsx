import React from 'react'
import './about.css'
import ME from '../../assets/profilepic01.jpg'
import {FaCity} from 'react-icons/fa'
import {IoLanguageSharp} from 'react-icons/io5'
import {MdOutlineEmail} from 'react-icons/md'


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
              <FaCity className="about__icon" />
              <h5>Address</h5>
              <small>Lomé, Togo</small>
            </article>

            <article className="about__card">
              <IoLanguageSharp className="about__icon" />
              <h5>Languages</h5>
              <small>English, French, Spanish</small>
            </article>

            <article className="about__card">
              <MdOutlineEmail className="about__icon" />
              <h5>Mail</h5>
              <small>othnielignacio@gmail.com</small>
            </article>
          </div>

          <p>
          Hello ! I am Othniel Aghey. Developer, Graphic Designer, Video Editor, and Creative.
          Student in Computer Science degree of Software Engineering.
          <br/>
          Passionate about digital, computer technologies.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About