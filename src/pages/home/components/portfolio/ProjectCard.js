import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ id, title, shortDescription, projectUrl }) => {

    return (
        <div className="project-item">
            <Link to={`/project-page/${id}`}>
                <div className="project-img">
                    <img src={projectUrl} alt="project" />
                </div>
                <div className="project-info">
                    <h2>{title}</h2>
                    <p>{(shortDescription.length > 150) ? shortDescription.slice(0, 150) + '...' : shortDescription}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard