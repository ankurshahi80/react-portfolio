import React, { useState } from 'react';

const Project=()=>{

    const [projects]=useState([
        { 
            name: 'RunBuddy', 
            displayName:'Run Buddy',
            link: 'https://ankurshahi80.github.io/run-buddy/',
            github:'https://github.com/ankurshahi80/run-buddy',
            description:'Run Buddy - an HTML and CSS project'
        },
        { name: 'CountingCalories', description:'Counting Calories - an HTML, CSS AND JavaScript projects'},
        { name: 'CoWorkers', description: 'CoWorkers - a Full Stack MVC app using SQL'},
        { name: 'DeepThoughts', description: 'Deep Thoughts - a MERN app'},
        { name: 'FoodFestival', description: 'Food Festival - a Progressive Web App'}
    ]);

    const showProject=(link)=> {
        window.open(link,'_blank');
    }
    return (
        <div>
            <div className="flex-row">
                {projects.map((project)=>(
                    <div>
                        <a href={project.link}>{project.displayName}</a>
                        <a href={project.github}>src={require(`../../assets/GitHub-logo.png`).default}</a>
                        <img
                            src={require(`../../assets/${project.name}.jpg`).default}
                            alt={project.description}
                            className="img-thumbnail mx-1"
                            key={project.name}
                            onClick={()=>showProject(project.link)}
                        />
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Project;