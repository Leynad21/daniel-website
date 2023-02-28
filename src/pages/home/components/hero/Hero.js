import React from 'react'
import "./hero.css"
import heroImg from "../../../../assets/images/Dany-fato-escadas.jpg"
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero__container">
        <div className='hero__name'>
          <h1>Hello, <span></span></h1>
          <h1> My Name is <span></span></h1>
          <h1>Daniel <span></span></h1>
        </div>
      </div>
      <Fade duration={1200}>
        <div className="hero__image">
          <img src={heroImg} alt="profile suit" />
        </div>
      </Fade>
    </section>

  )
}

export default Hero  