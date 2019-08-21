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
      submit: false,
      name: "",
      email: "",
      message: "",
      sent: false,
      err: false,
      errMessage: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // const {name, email, message} = this.state;
    // if (name.length > 0 && email.length > 0 && message.length > 0) {
    //   this.setState({
    //     submit: true
    //   })
    // } else {
    //   this.setState({
    //     submit: false,
    //   })
    // }
  };

  handleContactSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/contact")
      .then(() => {
        this.setState({
          sent: true
        });
      })
      .catch(err => {
        this.setState({
          err: true,
          errMessage: err
        });
      });
  };

  render() {
    const { sent, submit } = this.state;
    return (
      <Container>
        <SectionHeader>Contact Me</SectionHeader>
        {!sent ? (
          <>
            <ContactForm>
              <InputTag>Name</InputTag>
              <Input
                placeholder="Elon Musk"
                name="name"
                onChange={this.handleInputChange}
                type="text"
                required
              />
              <InputTag>Email</InputTag>
              <Input
                placeholder="e.musk@tesla.com"
                name="email"
                onChange={this.handleInputChange}
                type="email"
                required
              />
              <InputTag>Message</InputTag>
              <Message
                placeholder="Message"
                name="message"
                rows="4"
                onChange={this.handleInputChange}
                required
              />
              <Submit onClick={this.handleContactSubmit}>Submit</Submit>
            </ContactForm>
          </>
        ) : (
          <h1>Your Message has been sent</h1>
        )}
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
      </Container>
    );
  }
}
export default Contact;
