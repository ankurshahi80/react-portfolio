import React from 'react';
import { AiFillGithub, AiFillLinkedin,AiOutlineMail,AiFillPhone } from 'react-icons/ai';

function Footer() {
    return (
      <div className="contact-icons">
          <a href="tel:647-388-2109"><span><AiFillPhone size="2em"/></span></a>
          <a href="mailto:shahiankur80@gmail.com"><span><AiOutlineMail size="2em"/></span></a>
          <a href="https://github.com/ankurshahi80" target="_blank" rel="noreferrer"><span><AiFillGithub size="2em"/></span></a>
          <a href="https://www.linkedin.com/in/ankur-shahi/" target="_blank" rel="noreferrer"><span><AiFillLinkedin size="2em"/></span></a>
        </div>
    )
  }
export default Footer;