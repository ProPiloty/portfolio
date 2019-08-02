import React from 'react';
import {Headshot} from './../Main/Components/Projects/Components/Gallery/MediaManager';

// STYLED COMPONENTS
import {
    Container,
    HeadShot,
    Summary,
    Legal
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
            <HeadShot src={Headshot} alt="Headshot" />
            <Summary>
                <h3>Hi, I'm Tyler. Nice to meet you!</h3>
                <h3>I am a web developer passionate about creating products and user experiences that can help shape the future. In the past, I've worn many hats. I've managed a limousine business, screened cargo for the airlines, assisted with directing funerals, serviced aircraft at an FBO, and have been in the grocery industry. I've always loved technology and have aspired to push the boundaries of what is possible.</h3>
            </Summary>
            <div>
                <button href="https://github.com/ProPiloty"><FontAwesomeIcon icon={faGithubSquare}/>GitHub</button>
                <button href="https://www.linkedin.com/in/tylerellingford/"><FontAwesomeIcon icon={faLinkedin}/>LinkedIn</button>
            </div>
            <Legal>
                <h6>© Tyler Ellingford | 2019</h6>
            </Legal>
        </Container>
    )
}
export default Hero;