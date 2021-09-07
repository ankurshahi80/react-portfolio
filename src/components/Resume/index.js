import React from 'react';

import resumePDF from '../../assets/AnkurShahi.pdf';

const Resume = ()=>{
    return(
        <section className="resume-section">
            <h1>Resume</h1>
            <div>
                <h2>Work History</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur voluptas adipisci eveniet expedita dolor, quaerat commodi quidem ipsa illum inventore harum officia. Animi omnis veniam ad voluptas dolores officia!</p>
            </div>
            <div>
                <h2>Technical Skills</h2>
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
                        <p>Node.js</p>
                    </li>
                    <li>
                        <p>Express.js</p>
                    </li>
                    <li>
                        <p>React</p>
                    </li>
                    <li>
                        <p>SQL, mySQL2</p>
                    </li>
                    <li>
                        <p>noSQL, MongoDB</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Education History</h2>
                <ul>
                    <li>Program: Coding Boot Camp</li>
                    <li>Year: 2021</li>
                    <li>University: University of Toronto</li>
                </ul>
            </div>
            
        <div className="resume-download">
            <h3 className="title-3">Download My Resume.</h3>
            <p>If you would like to know more, please download my resume!</p>
            <a className="downloadButton" href={resumePDF} download="resume_ankur.pdf">Download PDF</a>
        </div>
    </section>
    )
};

export default Resume;