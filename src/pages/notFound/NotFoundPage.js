import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/", {})
        }, 3000)
    }, [])




    return (
        <div>
            <h1>Page Not Found</h1>
            <h2>Redirecting to the Home Page...</h2>
        </div>
    )
}

export default AboutPage