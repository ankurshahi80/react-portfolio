import React from 'react';

const Nav =()=>{
    
    const handleClick=()=>{
        console.log("click handled");
    }
    return(
        <header className="flex-row px-1">
            <h2 className="mx-2">Ankur Shahi</h2>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={()=> handleClick()}>
                        About me
                    </a>
                </li>
                <li className="mx-2">
                    <span onClick={() => handleClick()}>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span onClick={() => handleClick()}>Contact</span>
                </li>
                <li className="mx-2">
                    <span onClick={() => handleClick()}>Resume</span>
                </li>
            </ul>
        </header>
    )
};

export default Nav;