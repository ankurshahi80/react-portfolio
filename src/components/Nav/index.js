import React from 'react';

const Nav =(props)=>{

    const navList =['About Me', 'Portfolio', 'Contact', 'Resume']
    
    return(
        <header className="navbar">
                <div className="left">
                    <h2>
                        <a href="/">Ankur Shahi</a>
                    </h2>
                </div>
                <nav>
                    <ul className=" flex-row flex-end">
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
        </header>
    )
};

export default Nav;