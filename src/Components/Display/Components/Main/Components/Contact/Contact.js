import React from "react";

// FONT-AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faBolt,
//     faTint,
//     faToilet,
//     faCalendarAlt,
//     faRoad,
//     faChargingStation
// } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

// STYLED COMPONENTS
import {
  Container,
  ContactForm,
  Legal
} from './ContactStyles';

const Contact = () => {
  return (
    <Container>
      <h1>Contact Me</h1>
      <ContactForm>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Message" />
        <button>Submit</button>
      </ContactForm>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tylerellingford/" >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ProPiloty" >
          <FontAwesomeIcon icon={faGithubSquare} /> GitHub
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ProPiloty" >
          <FontAwesomeIcon icon={faTwitterSquare} /> Twitter
        </a>
      </div>
      <Legal>
        <h6>© Tyler Ellingford | 2019</h6>
      </Legal>
    </Container>
  );
};
export default Contact;
