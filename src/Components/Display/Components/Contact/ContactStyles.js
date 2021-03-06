import styled from "styled-components";
import { device } from "./../../../../utils/Devices";

export const Container = styled.div`
  background: #7ebdc3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.h2`
  margin-top: 30px;
  font-size: 2rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;

  @media (${device.tablet}) {
    font-size: 2.5rem;
  }
`;

export const ContactForm = styled.form`
  text-align: center;
  margin: 15px 30px 0px;
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const InputTag = styled.h3`
  margin: 15px 0px 0px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;

  @media (${device.laptop}) {
    font-size: 1.25rem;
  }
`;

export const Input = styled.input`
  margin: 15px 0px 0px;
  border-radius: 5px;
  border: 1px solid #424b54;
  font-size: 0.75rem;
  font-family: "Cabin", sans-serif;
  padding: 10px;

  &:focus {
    border-color: #0a0908;
    outline: none;
    font-weight: 700;
  }

  @media (${device.laptop}) {
    font-size: 1rem;
  }
`;

export const Message = styled.textarea`
  margin: 15px 0px 0px;
  border-radius: 5px;
  border: none;
  font-size: 0.75rem;
  font-family: "Cabin", sans-serif;
  padding: 10px;
  border: 1px solid #424b54;
  resize: vertical;

  &:focus {
    border-color: #0a0908;
    outline: none;
    font-weight: 700;
  }

  @media (${device.laptop}) {
    font-size: 1rem;
  }
`;

export const Submit = styled.button`
  margin: 15px 0px 0px;
  background: #fcfffc;
  text-decoration: none;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #0a0908;
  border-radius: 5px;
  border: 1px solid #424b54;
  font-size: 0.75rem;

  &:hover,
  &:focus {
    font-weight: 700;
    color: #fcfffc;
    background: #424b54;
    border-color: #0a0908;
    outline: none;
  }

  @media (${device.laptop}) {
    font-size: 1rem;
    margin: 30px 0px 0px;
  }
`;

export const SocialContainer = styled.div`
  margin: 30px 0px 15px;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;

  @media (${device.laptop}) {
    margin: 30px 0px 30px;
    font-size: 2.75rem;
  }
`;

export const SocialLink = styled.a`
  margin: 0px 15px;
  color: #0a0908;

  &:hover,
  &:focus {
    color: #fcfffc;
    outline: none;
  }
`;

export const SentMessage = styled.h3`
  margin: 30px 30px 0px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  text-align: center;

  @media (${device.laptop}) {
    font-size: 1.25rem;
  }
`;

export const Legal = styled.h6`
  margin: 15px 30px 15px;

  @media (${device.laptop}) {
    display: none;
  }
`;
