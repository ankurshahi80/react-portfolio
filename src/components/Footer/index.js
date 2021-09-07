import React from 'react';
import linkedIn from '../../assets/LI-In-Bug.png';
import GitHub from '../../assets/GitHub-logo.png';

const Footer =()=>{
    const handleClick=()=>{
    console.log("click handled");
    };

    return(
        <footer >
            <div className="footer-wrapper">
                
                    {/* <ul className="flex-row">
                        <li>
                            <span onClick={() => handleClick()}><img src={linkedIn} style={{width:"10%"}} alt="linkedIn"></img></span>
                        </li>
                        <li>
                            <span onClick={() => handleClick()}><img src={GitHub} style={{width:"10%", backgroundColor:"white"}}></img></span>
                        </li>
                        <li>
                            <span onClick={() => handleClick()}>Other</span>
                        </li>
                    </ul> */}
                    <ul className="logo-container">
                        <li>
                            <span onClick={() => handleClick()}><img src={linkedIn} style={{maxwidth:"33%"}} alt="linkedIn"></img></span>
                        </li>
                        <li>
                            <span onClick={() => handleClick()}><img src={GitHub} style={{width:"33%", backgroundColor:"white"}}></img></span>
                        </li> 
                        <li>
                        <span onClick={() => handleClick()}><img src={linkedIn} style={{maxwidth:"33%"}} alt="linkedIn"></img></span>
                        </li>
                    </ul>
                
            </div>
        </footer>
    )
};

export default Footer;