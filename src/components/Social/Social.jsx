import React from "react";
import { UilLinkedin, UilGithub, UilInstagram } from '@iconscout/react-unicons';
import '../../sections/Hero/style/Hero.css';

const Social = () => {
    return (
        <div className="home__social" style={{marginLeft: "3rem"}}>
            <a
                href="https://www.linkedin.com/in/rudrika-panigrahi-6085b5268/"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <UilLinkedin />
            </a>
            <a
                href="https://github.com/rudrika08"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <UilGithub />
            </a>
            <a
                href="https://www.instagram.com/_rud_rika/profilecard/?igsh=MWF0bDFvMTkybXphaA=="
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <UilInstagram />
            </a>
        </div>  
    )
}
export default Social;