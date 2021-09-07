import React from 'react';
import displayImage from "../../assets/displayImage.jpeg"
const About=({setCurrentLink})=>{
    return(
        <section id="about" className="my-5">
            <h1>About Me</h1>
            <img 
                src={displayImage} 
                className="my-2" 
                style={{borderRadius:"50%", width:"15%"}}
                alt="Ankur Shahi"
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur voluptas adipisci eveniet expedita dolor, quaerat commodi quidem ipsa illum inventore harum officia. Animi omnis veniam ad voluptas dolores officia!
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur voluptas adipisci eveniet expedita dolor, quaerat commodi quidem ipsa illum inventore harum officia. Animi omnis veniam ad voluptas dolores officia!
            </p>
        </section>
    )
}

export default About;