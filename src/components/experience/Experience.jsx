import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const devdata = [
  {
    skill: 'HTML',
    level: 'Experimented',
  }, 
  {
    skill: 'CSS',
    level: 'Experimented',
  }, 
  {
    skill: 'JavaScript',
    level: 'Medium',
  }, 
  {
    skill: 'Bootstrap',
    level: 'Experimented',
  }, 
  {
    skill: 'PHP',
    level: 'Basic',
  }, 
  {
    skill: 'React',
    level: 'Medium',
  },
  {
    skill: 'Java',
    level: 'Meduim',
  }, 
  {
    skill: 'Spring',
    level: 'Medium',
  }, 
  {
    skill: 'Flutter',
    level: 'Medium',
  }
]

const graphicdesigndata = [
  {
    skill: 'Adobe Photoshop',
    level: 'Experimented',
  }, 
  {
    skill: 'Adobe Illustrator',
    level: 'Experimented',
  }, 
  {
    skill: 'Adobe InDesign',
    level: 'Medium',
  }, 
  {
    skill: 'Adobe Premiere Pro',
    level: 'Medium',
  },
  {
    skill: 'Adobe After Effect',
    level: 'Medium',
  }, 
  {
    skill: 'Figma',
    level: 'Medium',
  }, 
  {
    skill: 'Adobe XD',
    level: 'Experimented',
  },
  {
    skill: 'UX/UI Design',
    level: 'Experimented',
  }
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills Do I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Development</h3>
          <div className="experience__content">
            {
              devdata.map(({skill, level}, index) => {
                return (
                  <article key={index} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>  
                    <h4>{skill}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
                )
              })
            }
          </div>
        </div>

        <div className="experience__frontend">
        <h3>Graphic Design</h3>
        <div className="experience__content">
            {
              graphicdesigndata.map(({ skill, level }, index) => {
                return (
                  <article key={index} className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{skill}</h4>
                      <small className="text-light">{level}</small>
                    </div>
                  </article>
                )
              })
            }
        </div>
      </div>

      </div>

    </section>
  )
}

export default Experience