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
                    <p>
                        With a natural aptitude for quick learning, I have made it a priority to continually broaden
                        my knowledge across a variety of fields. I worked in the Finance Industry as Discretionary
                        Portfolio Manager and Financial analyst for 3 years. In the past years, I also have developed a strong
                        interest in computer science, with a primary focus on web development and data science. Through dedicated
                        efforts, I have rapidly acquired a versatile skill set, demonstrating notable proficiency, particularly in web development.
                    </p>
                    <Link to="/timeline" className="btn">Check Timeline</Link>
                </div>
            </div>
        </section>
    )
}

export default About