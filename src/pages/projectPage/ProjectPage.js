import "./projectPage.css"
import React from 'react'
import { ProjectsData } from "../home/components/portfolio/ProjectsData"
import { useParams } from "react-router-dom"
import Navbar from "../../components/shared/navbar/Navbar"

const ProjectPage = () => {

    const { projectId } = useParams()

    // get project

    const singleProject = ProjectsData.find(project => project.id === parseInt(projectId))

    console.log("project:", singleProject);


    return (
        <>
            <Navbar />
            <div className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("${singleProject.projectUrl}")`,
                    backgroundPosition: "center center"
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
            {
                singleProject.gitHubUrl &&
                <div className="banner__btn">
                    <a href={singleProject.gitHubUrl}>GitHub</a>
                </div>
            }
        </>
    )
}

export default ProjectPage