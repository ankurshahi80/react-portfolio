import React from 'react';

const Nav =()=>{
    return(
        <header>
            <h2>Ankur Shahi</h2>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li>
                <span>Portfolio</span>
                </li>
                <li>
                <span>Contact</span>
                </li>
                <li>
                <span>Resume</span>
                </li>
            </ul>
        </header>
    )
};

export default Nav;