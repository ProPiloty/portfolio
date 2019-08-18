import React from "react";

// MEDIA IMPORTS
import { Headshot } from "./../../../../utils/MediaManager";

// STYLED COMPONENTS
import {
  Container,
  Separator,
  HeadShot,
  Intro,
  Break,
  Summary,
  SocialContainer,
  SocialLink,
  Legal
} from "./HeroStyles";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

// HERO COMPONENT
const Hero = () => {
  return (
    <Container>
      <Separator>
        <HeadShot src={Headshot} alt="Headshot" />
        <Intro>
          Hi, I'm Tyler.
          <br />
          Nice to meet you!
        </Intro>
        <Summary>
          I am a web developer passionate about creating products and user
          experiences that can help shape the future. In the past, I've worn
          many hats. I've managed a limousine business, screened cargo for the
          airlines, assisted with directing funerals, serviced aircraft at an
          FBO, and have been in the grocery industry. I've always loved
          technology and have aspired to push the boundaries of what is
          possible.
        </Summary>
        <SocialContainer>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ProPiloty"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tylerellingford/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tylerellingford/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tylerellingford/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
        </SocialContainer>
      </Separator>
      <Legal>© Tyler Ellingford | 2019</Legal>
    </Container>
  );
};
export default Hero;
