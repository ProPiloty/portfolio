import React from 'react';
import profilePic from './../../assets/profilePic.jpg';

// FontAwesome Icon Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithubSquare
} from '@fortawesome/free-brands-svg-icons'

// Hero Component
const Hero = () => {
    return (
        <div>
            <div>
                <img src={profilePic} alt="Headshot" />
                <h3>Hi, I'm Tyler. Nice to meet you!</h3>
                <h3>I'm a web developer who's passionate about building towards a better future through tech.</h3>
            </div>
            <div>
                <a href="https://github.com/ProPiloty"><FontAwesomeIcon icon={faGithubSquare}/>GitHub</a>
                <a href="https://www.linkedin.com/in/tylerellingford/"><FontAwesomeIcon icon={faLinkedin}/>LinkedIn</a>
            </div>
            <div>
                <h6>© Tyler Ellingford | 2019</h6>
            </div>
        </div>
    )
}
export default Hero;