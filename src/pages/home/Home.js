import React from 'react'
import Hero from './components/hero/Hero'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Footer from '../../components/shared/footer/Footer'
import Navbar from '../../components/shared/navbar/Navbar'
import Skills from './components/skills/Skills';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Fade big duration={1200} opposite={true} >
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </Fade>
    </div>
  )
}

export default Home