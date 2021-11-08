import React from 'react';
import displayImage from "../../assets/displayImage.jpeg"
const About=({setCurrentLink})=>{
    return(
        <section id="about" className="about-me">
            <h2 className="my-2">About Me</h2>
            <div class="about-img">
                <img 
                    src={displayImage} 
                    style={{borderRadius:"50%", width:"100%"}}
                    alt="Ankur Shahi"
                />
            </div>    
            <div class="about-info">
                <p> 
                    I'm a full-stack web developer based in Mississauga, Toronto.
                </p>
                <p>
                    I use my instructional designing experiences to define and build user-centric MVP apps. A strategic, futuristic, and focused professional with a proven record of effectively interacting at all levels and managing agile projects. 
                </p>
                <p>
                    I earned my Full Stack Web Development certificate from the University of Toronto School of Continuing Studies Coding Boot Camp.
                </p>
            </div>
        </section>
    )
}

export default About;