import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
    return (
        <section id='skills'>
            <h1 className="section-title">Com<span>p</span>uter Sk<span>i</span>lls</h1>

            <div className='container skills__container'>
                <div className='skills__core-languages'>
                    <h3>Core Languages</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Python</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>SQL</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF CORE LANGUAGES */}
                <div className='skills__libraries'>
                    <h3>Libraries & Frameworks</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Django & DRF</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Redux</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Pandas</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Numpy</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Matplotlib</h4>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Seaborn</h4>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills