import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin,AiOutlineMail,AiFillPhone } from 'react-icons/ai';

const Project=()=>{

    const github = require(`../../assets/GitHub-logo.png`).default;

    const [projects]=useState([
        { 
            name: 'RunBuddy', 
            displayName:'Run Buddy',
            background:require(`../../assets/RunBuddy.jpg`).default,
            link: 'https://ankurshahi80.github.io/run-buddy/',
            github:'https://github.com/ankurshahi80/run-buddy',
            description:'Run Buddy - an HTML and CSS project'
        },
        { 
            name: 'CountingCalories',
            displayName:'Counting Calories',
            background:require(`../../assets/CountingCalories.jpg`).default,
            link: 'https://uot-project-grp.github.io/project01-calorie-tracker/',
            github:'https://github.com/uot-project-grp/project01-calorie-tracker',
            description:'Counting Calories - an HTML, CSS AND JavaScript projects'
        },
        { 
            name: 'CoWorkers',
            displayName:'CoWorkers',
            background:require(`../../assets/CoWorkers.jpg`).default,
            link: 'https://coworkers-group2.herokuapp.com/',
            github:'https://github.com/Group2Project2UofTCoding/coworkers',
            description: 'CoWorkers - a Full Stack MVC app using SQL'
        },
        { 
            name: 'DeepThoughts',
            displayName:'Deep Thoughts',
            background:require(`../../assets/DeepThoughts.jpg`).default,
            link: 'https://blooming-escarpment-88457.herokuapp.com/',
            github:'https://github.com/ankurshahi80/deep-thoughts',
            description: 'Deep Thoughts - a MERN app'
        },
        { 
            name: 'VintageVinyls', 
            displayName:'Vintage Vinyl Records',
            background:require(`../../assets/VintageVinyls.jpg`).default,
            link: 'https://vintage-vinyls.herokuapp.com/',
            github:'https://github.com/group01-project03/vintage-vinyl-records',
            description: 'Vintage Vinyl Records - a MERN app'
        },
        { 
            name: 'PizzaHunt', 
            displayName:'Pizza Hunt',
            background:require(`../../assets/PizzaHunt.jpg`).default,
            link: 'https://pizza-hunt-as.herokuapp.com/',
            github:'https://github.com/ankurshahi80/pizza-hunt',
            description: 'Pizza Hunt - a Progressive Web App'
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
                        {/* <img
                            src={require(`../../assets/${project.name}.jpg`).default}
                            alt={project.description}
                            className="img-thumbnail"
                            // className="cover"
                            key={project.name}
                            onClick={()=>showProject(project.link)}
                        /> */}
                        {/* <a href={project.github} target="_blank" rel="noreferrer" className="project-tag"><img src={github}/></a> */}
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-tag" ><span><AiFillGithub  color="black" size="2em"/></span></a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;