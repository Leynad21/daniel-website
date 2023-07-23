import "./projectPage.css"
import React from 'react'
import { ProjectsData } from "../home/components/portfolio/ProjectsData"
import { useParams } from "react-router-dom"
import Navbar from "../../components/shared/navbar/Navbar"

const ProjectPage = () => {

    const { projectId } = useParams()

    // get project

    const singleProject = ProjectsData.find(project => project.id === parseInt(projectId))


    return (
        <>
            <Navbar />
            <div className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("${singleProject.projectUrl}")`,
                    backgroundPosition: "center"
                }}>

                <div className="banner__fadeBottom" />
            </div>
            <div className="banner__contents">
                <h1 className='banner__title'>
                    {singleProject.title}
                </h1>
                <h1 className="banner__description">
                    {singleProject.description}
                </h1>
            </div>
            <div className="banner__btnContainer">
                {
                    singleProject.gitHubUrl &&
                    <div className="banner__btn">
                        <a href={singleProject.gitHubUrl} target="_blank">GitHub</a>
                    </div>
                }
                {
                    singleProject.website &&
                    <div className="banner__btnVariant" target="_blank">
                        <a href={singleProject.website} target="_blank">Website</a>
                    </div>
                }
            </div>
        </>
    )
}

export default ProjectPage