import React from 'react';

const Nav =()=>{
    const menuSelected=()=>{
        console.log("hello");
    }
    return(
        <header className="flex-row">
            <h2 className="mx-2">Ankur Shahi</h2>
            <ul className="flex-row flex-end">
                <li className="mx-2">
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li className="mx-2">
                    <span onClick={menuSelected}>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span onClick={menuSelected}>Contact</span>
                </li>
                <li className="mx-2">
                    <span onClick={menuSelected}>Resume</span>
                </li>
            </ul>
        </header>
    )
};

export default Nav;