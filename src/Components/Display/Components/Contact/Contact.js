import React, { Component } from "react";
import axios from "axios";

// FONT-AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

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
  SentMessage,
  Legal
} from "./ContactStyles";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false,
      err: false
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleContactSubmit = e => {
    const { name, email, message } = this.state;
    const body = { name, email, message };
    e.preventDefault();
    axios
      .post("/api/contact", body)
      .then(() => {
        this.setState({
          sent: true
        });
      })
      .catch(err => {
        this.setState({
          err: true
        });
        console.log(err);
      });
  };

  render() {
    const { sent, err } = this.state;
    return (
      <Container>
        <SectionHeader>Contact Me</SectionHeader>
        {sent ? (
          <>
            <SentMessage>Your Message has been sent</SentMessage>
          </>
        ) : err ? (
          <>
            <SentMessage>
              There was an error sending your message,
              <br />
              please refresh and try again.
            </SentMessage>
          </>
        ) : (
          <>
            <ContactForm>
              <InputTag>Name</InputTag>
              <Input
                placeholder="Name"
                name="name"
                onChange={this.handleInputChange}
                type="text"
                required
              />
              <InputTag>Email</InputTag>
              <Input
                placeholder="Email"
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
          <SocialLink href="mailto:ellingfordtyler@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </SocialLink>
        </SocialContainer>
        <Legal>© Tyler Ellingford | 2019</Legal>
      </Container>
    );
  }
}
export default Contact;
