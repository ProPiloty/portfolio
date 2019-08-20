import styled from "styled-components";
import { device } from "./../../../../utils/Devices";

export const Container = styled.div`
  background: #7ebdc3;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${device.laptop}) {
  }
`;

export const SectionHeader = styled.h2`
  margin-top: 30px;
  font-size: 2rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
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
`;

export const Input = styled.input`
  margin: 15px 0px 0px;
  border-radius: 5px;
  border: 1px solid #424b54;
  font-size: 0.75rem;
  font-family: "Cabin", sans-serif;
  text-align: center;
  padding: 10px;

  &:focus {
    border-color: #0a0908;
    outline: none;
    font-weight: 700;
  }
`;

export const Message = styled.textarea`
  margin: 15px 0px 0px;
  border-radius: 5px;
  border: none;
  font-size: 0.75rem;
  padding: 10px;
  border: 1px solid #424b54;
  resize: vertical;

  &:focus {
    border-color: #0a0908;
    outline: none;
    font-weight: 700;
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
  font-size: 1rem;

  &:hover {
    color: #fcfffc;
    background: #424b54;
    border-color: #0a0908;
  }
`;

export const SocialContainer = styled.div`
  margin: 30px 30px 30px;
  font-size: 2rem;
`;

export const SocialLink = styled.a`
  margin: 0px 15px;
  color: #fcfffc;

  &:hover {
    color: #7ebdc3;
  }
`

export const Legal = styled.div`
  margin: 15px 30px 15px;

  @media (${device.laptop}) {
    display: none;
  }
`;
