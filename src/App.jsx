import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';
import bg from './assets/bg-texture.png';
import logooa from './assets/logo/oa.png';
import linkedin from './assets/social/linkedin.png';
import instagram from './assets/social/instagram.png';
import mailto from './assets/social/mail-inbox-app.png';

const App = () => {
  return (
    <>
      <UnderConstruction
        background={{
          color: bg,
          textColor: '#fff',
          overlay: {
            color: '#000',
            opacity: '.5'
          }
        }}
        logo={{
          src: logooa,
          alt: 'alt text',
          style: {
            maxWidth: '440px',
          }
          
        }}
        title={{
          text: 'Hello'
        }}
        description={{
          text: 'My website is under construction. I\'ll be back soon.',
        }}
        links={[
          {
            url: 'https://www.linkedin.com/in/othnielaghey/',
            image: linkedin,
          },
          {
            url: 'https://www.instagram.com/othniel.aghey/',
            image: instagram,
          },
          {
            url: 'mailto:othnielignacio@gmail.com',
            image: mailto,
          },
        ]}
      />
    </>
  )
}

export default App