import React from 'react'
import { Link } from 'react-router-dom'
import "./about.css"
import profileImg from "../../../../assets/images/profile1.jpg"

const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="col-left">
                    <div className="about-img">
                        <img src={profileImg} alt="profile" />
                    </div>
                </div>
                <div className="col-right">
                    <h1 className="section-title"> About <span>Me</span></h1>
                    <p>With a natural aptitude for quick learning and a strong passion for the financial market, I have made it a priority to
                        continually broaden my knowledge across a variety of fields. More recently, I have taken a
                        deep interest in the fields of programming, data science, web development, and AI, and have swiftly cultivated a versatile skill set in these domains.
                    </p>
                    <Link to="/timeline" className="btn">Check Timeline</Link>
                </div>
            </div>
        </section>
    )
}

export default About