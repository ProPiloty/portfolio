import React from 'react';
import {Headshot} from './../Gallery/MediaManager';

// STYLED COMPONENTS
import {
    Container,
    Summary,
    HeadShot
  } from './HeroStyles';

// FONT AWESOME ICONS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithubSquare
} from '@fortawesome/free-brands-svg-icons'

// HERO COMPONENT
const Hero = () => {
    return (
        <Container>
            <Summary>
                <HeadShot src={Headshot} alt="Headshot" />
                <h3>Hi, I'm Tyler. Nice to meet you!</h3>
                <h3>I'm a web developer who's passionate about building towards a better future through tech.</h3>
            </Summary>
            <div>
                <button href="https://github.com/ProPiloty"><FontAwesomeIcon icon={faGithubSquare}/>GitHub</button>
                <button href="https://www.linkedin.com/in/tylerellingford/"><FontAwesomeIcon icon={faLinkedin}/>LinkedIn</button>
            </div>
            <div>
                <h6>© Tyler Ellingford | 2019</h6>
            </div>
        </Container>
    )
}
export default Hero;