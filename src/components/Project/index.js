import React, { useState } from 'react';

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
            name: 'FoodFestival', 
            displayName:'Food Festival',
            background:require(`../../assets/FoodFestival.jpg`).default,
            link: 'https://ankurshahi80.github.io/food-festival/',
            github:'https://github.com/ankurshahi80/food-festival',
            description: 'Food Festival - a Progressive Web App'
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
            <div className="flex-row">
                {projects.map((project,i)=>(
                    <div className="project-box">
                        <img
                            src={require(`../../assets/${project.name}.jpg`).default}
                            alt={project.description}
                            className="img-thumbnail mx-1"
                            key={project.name}
                            onClick={()=>showProject(project.link)}
                        />
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-tag"><img src={github}/></a>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Project;