import "./aboutPage.css"
import React from 'react'
import Navbar from '../../components/shared/navbar/Navbar'
import Footer from '../../components/shared/footer/Footer'
import TimelineList from "../../components/timeline/TimelineList"


const AboutPage = () => {
  return (
    <>
      <section id="aboutPage">
        <Navbar />
        <h1 className="section-title"><span>My </span> Time<span>li</span>ne</h1>
        <TimelineList />
        <Footer />
      </section>
    </>
  )
}

export default AboutPage