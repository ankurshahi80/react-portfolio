import React from 'react';
import displayImage from "../../assets/displayImage.jpeg"
const About=({setCurrentLink})=>{
    return(
        <section id="about" className="my-5">
            <img 
                src={displayImage} 
                className="my-2" 
                style={{borderRadius:"50%", width:"15%", display:"block"}}
                alt="Ankur Shahi"
            />
            <h1 className="my-2">About Me</h1>
            <p> 
                I'm a full-stack web developer based in Mississauga, Toronto.
            </p>
            <p>
                I use my instructional designing experiences to define and build user-centric MVP apps. A strategic, futuristic, and focused professional with a proven record of effectively interacting at all levels and managing agile projects. 
            </p>
            <p>
                I earned my Full Stack Web Development certificate from the University of Toronto School of Continuing Studies Coding Boot Camp.
            </p>
        </section>
    )
}

export default About;