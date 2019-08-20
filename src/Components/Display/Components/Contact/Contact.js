import React, { Component } from "react";
import axios from "axios";

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
  SectionHeader,
  ContactForm,
  InputTag,
  Input,
  Message,
  Submit,
  SocialContainer,
  SocialLink,
  Legal
} from "./ContactStyles";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleContactSubmit = e => {
    e.preventdefault();
    this.setState({
      sent: true
    });
    axios
      .post("/api/contact")
      .then()
      .catch(err => console.log(err));
  };

  render() {
    const { sent } = this.state;
    return (
      <Container>
        <SectionHeader>Contact Me</SectionHeader>
        {!sent ? (
          <>
            <ContactForm>
              <InputTag>Name</InputTag>
              <Input placeholder="Elon Musk" />
              <InputTag>Email</InputTag>
              <Input placeholder="e.musk@tesla.com" />
              <InputTag>Message</InputTag>
              <Message placeholder="Message" rows="4" />
              <Submit>Submit</Submit>
            </ContactForm>
            <SocialContainer>
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
                href="https://github.com/ProPiloty"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </SocialLink>
              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/ProPiloty"
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </SocialLink>
            </SocialContainer>
            <Legal>
              <h6>© Tyler Ellingford | 2019</h6>
            </Legal>
          </>
        ) : (
          <h1>Your Message has been sent</h1>
        )}
      </Container>
    );
  }
}
export default Contact;
