import React from 'react';

const Nav =(props)=>{

    const navList =['About Me', 'Portfolio', 'Contact', 'Resume']
    
    return(
        <header className="navbar">
            <div className="wrapper">
                <div className="left">
                    <h2>
                        <a href="/">Ankur Shahi</a>
                    </h2>
                </div>
                <div className="right">
                    <nav>
                        <ul className="flex-row">
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
                </div>
            </div>
        </header>
    )
};

export default Nav;