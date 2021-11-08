import React from 'react';

import resumePDF from '../../assets/AnkurShahi.pdf';

const Resume = ()=>{
    return(
        <section className="resume-section">
            <h2 className="my-2">Resume</h2>

            <div className="resume-download">
                <p>Download my <a className="downloadButton" href={resumePDF} download="resume_ankur.pdf">resume</a>.</p>
            </div>
            
            <div>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>
                        <p>HTML</p>
                    </li>
                    <li>
                        <p>CSS</p>
                    </li>
                    <li>
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <p>jQuery</p>
                    </li>
                    <li>
                        <p>responsive design</p>
                    </li>
                    <li>
                        <p>React</p>
                    </li>
                    <li>
                        <p>Bootstrap</p>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>
                        <p>APIs</p>
                    </li>
                    <li>
                        <p>Node</p>
                    </li>
                    <li>
                        <p>Express</p>
                    </li>
                    <li>
                        <p>MySQL, Sequelize</p>
                    </li>
                    <li>
                        <p>MongoDB, Mongoose</p>
                    </li>
                    <li>
                        <p>REST</p>
                    </li>
                    <li>
                        <p>GraphQL</p>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Education History</h3>
                <ul>
                    <li>Program: Full-Stack Web Development Certificate</li>
                    <li>Year: 2021</li>
                    <li>University: University of Toronto School of Continuing Studies</li>
                </ul>
            </div>
    </section>
    )
};

export default Resume;