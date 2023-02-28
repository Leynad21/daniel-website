import React, { useState } from 'react'
import "./portfolio.css"
import { ProjectsData } from "./ProjectsData"
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

const Portfolio = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpanded = () => {
        setExpanded(!expanded);
    }



    return (
        <section id="portfolio">
            <div className="container portfolio__container">
                <h1 className="section-title">Portfol<span>i</span>o</h1>
                <div className="all-projects">
                    {ProjectsData.map((item) => {
                        if (!expanded) {
                            return (
                                item.isFeatured &&
                                <ProjectCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    shortDescription={item.shortDescription}
                                    description={item.description}
                                    projectUrl={item.projectUrl}
                                />
                            )
                        } else {
                            return (
                                <ProjectCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    shortDescription={item.shortDescription}
                                    description={item.description}
                                    projectUrl={item.projectUrl}
                                />
                            )
                        }
                    })
                    }
                </div>
                <div className="btn portfolio__btn" onClick={handleExpanded}>
                    {!expanded ? "See More" : "See Less"}
                </div>
            </div>
        </section >
    )
}

export default Portfolio