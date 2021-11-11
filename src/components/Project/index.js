import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin,AiOutlineMail,AiFillPhone } from 'react-icons/ai';
import { FaGlobe } from "react-icons/fa";

const Project=()=>{

    const github = require(`../../assets/GitHub-logo.png`).default;

    const [projects]=useState([
        { 
            name: 'RunBuddy', 
            displayName:'Run Buddy',
            background:require(`../../assets/RunBuddy.jpg`).default,
            link: 'https://ankurshahi80.github.io/run-buddy/',
            github:'https://github.com/ankurshahi80/run-buddy',
            description:'HTML and CSS'
        },
        { 
            name: 'CountingCalories',
            displayName:'Counting Calories',
            background:require(`../../assets/CountingCalories.jpg`).default,
            link: 'https://uot-project-grp.github.io/project01-calorie-tracker/',
            github:'https://github.com/uot-project-grp/project01-calorie-tracker',
            description:'HTML, CSS AND JavaScript'
        },
        { 
            name: 'CoWorkers',
            displayName:'CoWorkers',
            background:require(`../../assets/CoWorkers.jpg`).default,
            link: 'https://coworkers-group2.herokuapp.com/',
            github:'https://github.com/Group2Project2UofTCoding/coworkers',
            description: 'A Full Stack MVC app using SQL'
        },
        { 
            name: 'DeepThoughts',
            displayName:'Deep Thoughts',
            background:require(`../../assets/DeepThoughts.jpg`).default,
            link: 'https://blooming-escarpment-88457.herokuapp.com/',
            github:'https://github.com/ankurshahi80/deep-thoughts',
            description: 'A MERN app'
        },
        { 
            name: 'VintageVinyls', 
            displayName:'Vintage Vinyl Records',
            background:require(`../../assets/VintageVinyls.jpg`).default,
            link: 'https://vintage-vinyls.herokuapp.com/',
            github:'https://github.com/group01-project03/vintage-vinyl-records',
            description: 'A MERN app'
        },
        { 
            name: 'PizzaHunt', 
            displayName:'Pizza Hunt',
            background:require(`../../assets/PizzaHunt.jpg`).default,
            link: 'https://pizza-hunt-as.herokuapp.com/',
            github:'https://github.com/ankurshahi80/pizza-hunt',
            description: 'A Progressive Web App'
        }
    ]);

    const showProject=(link)=> {
        window.open(link,'_blank');
    }
    return (
        <div>
            <div className="flex-row space-between">
                {projects.map((project,i)=>(
                    <div className="project-box" key={i} style={{backgroundImage: `url(${project.background})`}}>
                        <a href={project.link} target="_blank" rel="noreferrer" className="project-tag">
                            <div className="project-info">
                                <h3>{project.displayName}</h3>
                                <p>{project.description}</p>
                                <div className="project-icons">
                                    <span onClick={ ()=> showProject(project.link)} className="project-link"><FaGlobe/></span>
                                    <span onClick={ ()=> showProject(project.github)}className="project-link" ><AiFillGithub/></span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;