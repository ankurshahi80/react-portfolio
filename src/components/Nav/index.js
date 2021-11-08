import React from 'react';

const Nav =(props)=>{

    const navList =['About Me', 'Portfolio', 'Contact', 'Resume']
    
    return(
        <nav>
            <ul>
                { navList.map(nav => (
                    <li class="mx-2" key={nav}>
                        <a  href={'#'+ nav.toLowerCase()}
                            onClick={()=>props.handlePageChange(nav)}
                            className={
                                props.currentPage===nav?'nav navActive':'nav'
                            }
                        >
                            {nav}        
                        </a>
                    </li>            
                ))}
            </ul>
        </nav>
    )
};

export default Nav;